import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import {
  Navbar,
  Footer,
  GridLayout,
  GridSection,
  ScrollAnimation,
} from "@/components/landing";
import {
  getPostBySlug,
  getFeaturedImageUrl,
  getPostCategories,
  getCategoryColor,
  calculateReadTime,
  formatDate,
  stripHtml,
  getPosts,
  normalizePost,
} from "@/lib/wordpress";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const { posts } = await getPosts({ per_page: 100 });
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${stripHtml(post.title.rendered)} — WT Migremo Systems, Inc.`,
    description: stripHtml(post.excerpt.rendered).slice(0, 160),
    openGraph: {
      images: getFeaturedImageUrl(post)
        ? [{ url: getFeaturedImageUrl(post)! }]
        : [],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const featuredImage = getFeaturedImageUrl(post);
  const categories = getPostCategories(post);
  const primaryCat = categories[0] ?? { name: "Uncategorized", slug: "uncategorized" };
  const categoryColor = getCategoryColor(primaryCat.slug);
  const readTime = calculateReadTime(post.content.rendered);
  const date = formatDate(post.date);
  const title = stripHtml(post.title.rendered);

  // Fetch 3 related posts (excluding current)
  const { posts: allRaw } = await getPosts({ per_page: 10 });
  const related = allRaw
    .filter((p) => p.slug !== slug)
    .slice(0, 3)
    .map((p, i) => normalizePost(p, i + 2));

  return (
    <GridLayout>
      <Navbar />
      <main>
        {/* Hero */}
        <GridSection topLine={false}>
          <section className="relative pt-32 pb-12">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-[var(--brand)]/[0.04] blur-[150px]" />
            </div>
            <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              {/* Back link */}
              <ScrollAnimation variant="fade-up">
                <Link
                  href="/stories"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  All stories
                </Link>
              </ScrollAnimation>

              <ScrollAnimation variant="fade-up" delay={0.05}>
                {/* Category */}
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${categoryColor} mb-6`}
                >
                  <Tag className="h-3 w-3" />
                  {primaryCat.name}
                </span>

                {/* Title */}
                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl leading-tight">
                  {title}
                </h1>

                {/* Meta */}
                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    {date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {readTime}
                  </span>
                </div>
              </ScrollAnimation>
            </div>
          </section>
        </GridSection>

        {/* Featured image */}
        {featuredImage && (
          <GridSection>
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-4">
              <ScrollAnimation variant="fade-up">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border/60">
                  <Image
                    src={featuredImage}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </ScrollAnimation>
            </div>
          </GridSection>
        )}

        {/* Content */}
        <GridSection>
          <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
            <ScrollAnimation variant="fade-up">
              <div
                className="wp-content"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />
            </ScrollAnimation>
          </article>
        </GridSection>

        {/* Related posts */}
        {related.length > 0 && (
          <GridSection bottomLine>
            <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
              <ScrollAnimation variant="fade-up">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">
                  More Stories
                </p>
              </ScrollAnimation>
              <ScrollAnimation variant="stagger-children" staggerAmount={0.1}>
                <div className="grid gap-px sm:grid-cols-3 bg-border/80 rounded-xl overflow-hidden">
                  {related.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/stories/${p.slug}`}
                      className="group flex flex-col bg-background p-6 hover:bg-accent/60 transition-colors"
                    >
                      <span
                        className={`inline-flex w-fit items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium ${p.categoryColor} mb-3`}
                      >
                        {p.category}
                      </span>
                      <h3 className="text-sm font-bold text-foreground group-hover:text-[var(--brand)] transition-colors leading-tight flex-1">
                        {p.title}
                      </h3>
                      <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground/60">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {p.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {p.readTime}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </ScrollAnimation>
            </section>
          </GridSection>
        )}
      </main>
      <GridSection as="footer">
        <Footer />
      </GridSection>
    </GridLayout>
  );
}
