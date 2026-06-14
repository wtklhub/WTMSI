if (!process.env.NEXT_PUBLIC_WP_API_URL) {
  throw new Error("Missing required env variable: NEXT_PUBLIC_WP_API_URL");
}
const WP_BASE = process.env.NEXT_PUBLIC_WP_API_URL;

export interface WPPost {
  id: number;
  date: string;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  featured_media: number;
  categories: number[];
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string; alt_text: string }>;
    "wp:term"?: Array<Array<{ id: number; name: string; slug: string }>>;
  };
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
}

export interface NormalizedPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  categorySlug: string;
  categoryColor: string;
  featuredImage: string | null;
  featured: boolean;
}

export async function getPosts(params?: {
  per_page?: number;
  page?: number;
  fields?: string;
}): Promise<{ posts: WPPost[]; total: number; totalPages: number }> {
  try {
    const query = new URLSearchParams({
      _embed: "1",
      per_page: String(params?.per_page ?? 100),
      page: String(params?.page ?? 1),
    });
    if (params?.fields) query.set("_fields", params.fields);
    const res = await fetch(`${WP_BASE}/posts?${query}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return { posts: [], total: 0, totalPages: 0 };
    const total = parseInt(res.headers.get("X-WP-Total") ?? "0", 10);
    const totalPages = parseInt(
      res.headers.get("X-WP-TotalPages") ?? "0",
      10
    );
    const posts: WPPost[] = await res.json();
    return { posts, total, totalPages };
  } catch {
    return { posts: [], total: 0, totalPages: 0 };
  }
}

/** Lightweight fetch — returns only slugs, no _embed. Use in generateStaticParams. */
export async function getPostSlugs(): Promise<string[]> {
  try {
    const res = await fetch(
      `${WP_BASE}/posts?per_page=100&_fields=slug`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const posts: { slug: string }[] = await res.json();
    return posts.map((p) => p.slug);
  } catch {
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  try {
    const res = await fetch(
      `${WP_BASE}/posts?slug=${encodeURIComponent(slug)}&_embed=1`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const posts: WPPost[] = await res.json();
    return posts[0] ?? null;
  } catch {
    return null;
  }
}

/** Client-safe version — no Next.js `next:` option, safe in useQuery */
export async function fetchPostsPage(
  page: number,
  perPage = 10,
  categoryId?: number
): Promise<{ posts: NormalizedPost[]; total: number; totalPages: number }> {
  const query = new URLSearchParams({
    _embed: "1",
    per_page: String(perPage),
    page: String(page),
  });
  if (categoryId) query.set("categories", String(categoryId));

  const res = await fetch(`${WP_BASE}/posts?${query}`);
  if (!res.ok) return { posts: [], total: 0, totalPages: 0 };

  const total = parseInt(res.headers.get("X-WP-Total") ?? "0", 10);
  const totalPages = parseInt(res.headers.get("X-WP-TotalPages") ?? "0", 10);
  const raw: WPPost[] = await res.json();
  const posts = raw.map((p, i) => normalizePost(p, (page - 1) * perPage + i));
  return { posts, total, totalPages };
}

/** Client-safe categories fetch */
export async function fetchCategories(): Promise<WPCategory[]> {
  const res = await fetch(`${WP_BASE}/categories?per_page=100`);
  if (!res.ok) return [];
  return res.json();
}

export async function getCategories(): Promise<WPCategory[]> {
  try {
    const res = await fetch(`${WP_BASE}/categories?per_page=100`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}

export function getFeaturedImageUrl(post: WPPost): string | null {
  return post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null;
}

export function getPostCategories(
  post: WPPost
): Array<{ name: string; slug: string }> {
  return (
    post._embedded?.["wp:term"]?.[0]?.map((t) => ({
      name: t.name,
      slug: t.slug,
    })) ?? []
  );
}

export function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&[^;]+;/g, " ")
    .trim();
}

export function calculateReadTime(content: string): string {
  const text = stripHtml(content);
  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const categoryColorMap: Record<string, string> = {
  technology:
    "text-[var(--brand)] bg-[var(--brand)]/10 border-[var(--brand)]/20",
  systems: "text-orange-400 bg-orange-500/10 border-orange-500/20",
  digitalization: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  business: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  uncategorized: "text-blue-400 bg-blue-500/10 border-blue-500/20",
};

export function getCategoryColor(categorySlug: string): string {
  return (
    categoryColorMap[categorySlug.toLowerCase()] ??
    "text-blue-400 bg-blue-500/10 border-blue-500/20"
  );
}

export function normalizePost(post: WPPost, index: number): NormalizedPost {
  const cats = getPostCategories(post);
  const primaryCat = cats[0] ?? { name: "Uncategorized", slug: "uncategorized" };
  return {
    id: post.id,
    slug: post.slug,
    title: post.title.rendered,
    excerpt: stripHtml(post.excerpt.rendered),
    date: formatDate(post.date),
    readTime: calculateReadTime(post.content?.rendered ?? ""),
    category: primaryCat.name,
    categorySlug: primaryCat.slug,
    categoryColor: getCategoryColor(primaryCat.slug),
    featuredImage: getFeaturedImageUrl(post),
    featured: index < 2,
  };
}
