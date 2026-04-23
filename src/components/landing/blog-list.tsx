"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { Calendar, Clock, Tag, ChevronLeft, ChevronRight } from "lucide-react";
import { GridLine } from "./grid-background";
import { ScrollAnimation } from "./scroll-animations";
import { fetchPostsPage } from "@/lib/wordpress";

const PER_PAGE = 9;

function PostSkeleton() {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden border border-border/80 bg-card/60 animate-pulse">
      <div className="w-full aspect-video bg-muted" />
      <div className="p-5 flex flex-col gap-3">
        <div className="h-5 w-20 rounded-full bg-muted" />
        <div className="h-4 w-full rounded bg-muted" />
        <div className="h-4 w-3/4 rounded bg-muted" />
        <div className="h-3 w-5/6 rounded bg-muted/60" />
        <div className="h-3 w-2/3 rounded bg-muted/60" />
        <div className="mt-2 flex gap-3">
          <div className="h-3 w-24 rounded bg-muted/40" />
          <div className="h-3 w-16 rounded bg-muted/40" />
        </div>
      </div>
    </div>
  );
}

type CategoryItem = { id: number; name: string };

export function BlogList({ initialCategories }: { initialCategories: CategoryItem[] }) {
  const [page, setPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState<CategoryItem | null>(null);

  const activeCategoryId = activeCategory?.id;
  const activeCategoryName = activeCategory?.name ?? "All";

  const { data, isFetching, isError } = useQuery({
    queryKey: ["wp-posts", page, activeCategoryId ?? null],
    queryFn: () => fetchPostsPage(page, PER_PAGE, activeCategoryId),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5,
  });

  const posts = data?.posts ?? [];
  const totalPages = data?.totalPages ?? 1;
  const total = data?.total ?? 0;

  const featured = page === 1 && activeCategory === null
    ? posts.slice(0, 2)
    : [];
  const rest = page === 1 && activeCategory === null
    ? posts.slice(2)
    : posts;

  function handleCategoryChange(cat: CategoryItem | null) {
    setActiveCategory(cat);
    setPage(1);
  }

  return (
    <>
      {/* Category filters */}
      <ScrollAnimation variant="fade-up" delay={0.1}>
        <div className="mt-8 flex flex-wrap gap-2">
          {/* "All" button */}
          <button
            onClick={() => handleCategoryChange(null)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
              activeCategory === null
                ? "border-[var(--brand)]/40 bg-[var(--brand)]/10 text-[var(--brand)]"
                : "border-border/80 bg-card/70 text-muted-foreground hover:text-foreground hover:bg-accent/60"
            }`}
          >
            All
          </button>
          {initialCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
                activeCategory?.id === cat.id
                  ? "border-[var(--brand)]/40 bg-[var(--brand)]/10 text-[var(--brand)]"
                  : "border-border/80 bg-card/70 text-muted-foreground hover:text-foreground hover:bg-accent/60"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </ScrollAnimation>

      {/* Featured posts grid — only on page 1 / All */}
      {featured.length > 0 && (
        <section className="pt-16 pb-4">
          <ScrollAnimation variant="fade-up">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">
              Featured
            </h2>
          </ScrollAnimation>
          <ScrollAnimation variant="stagger-children" staggerAmount={0.12}>
            <div className="grid gap-px md:grid-cols-2 bg-border/80 rounded-xl overflow-hidden">
              {featured.map((post) => (
                <Link
                  key={post.slug}
                  href={`/stories/${post.slug}`}
                  className="group flex flex-col bg-background transition-colors hover:bg-accent/60 overflow-hidden"
                >
                  {/* Featured image */}
                  {post.featuredImage && (
                    <div className="relative w-full aspect-[16/7] overflow-hidden">
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  )}
                  <div className="p-8 sm:p-10 flex flex-col flex-1">
                    <span
                      className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${post.categoryColor} mb-4`}
                    >
                      <Tag className="h-3 w-3" />
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-[var(--brand)] transition-colors sm:text-2xl leading-tight flex-1">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollAnimation>
        </section>
      )}

      {/* All posts list */}
      <section className="py-8">
        {(featured.length > 0 || page > 1 || activeCategoryName !== "All") && (
          <ScrollAnimation variant="fade-up">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {activeCategoryName === "All" ? "All Stories" : activeCategoryName}
              </h2>
              {total > 0 && (
                <span className="text-xs text-muted-foreground/60">
                  {total} post{total !== 1 ? "s" : ""}
                </span>
              )}
            </div>
          </ScrollAnimation>
        )}

        {isError && (
          <div className="py-16 text-center text-muted-foreground text-sm">
            Failed to load posts. Please try again.
          </div>
        )}

        {!isError && (
          <div className={isFetching ? "opacity-60 transition-opacity" : ""}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {isFetching && rest.length === 0
                ? Array.from({ length: PER_PAGE - featured.length }).map((_, i) => (
                    <PostSkeleton key={i} />
                  ))
                : rest.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/stories/${post.slug}`}
                      className="group flex flex-col rounded-xl overflow-hidden border border-border/80 bg-card/60 hover:bg-accent/60 transition-colors"
                    >
                      {/* Thumbnail */}
                      <div className="relative w-full aspect-video overflow-hidden bg-muted">
                        {post.featuredImage ? (
                          <Image
                            src={post.featuredImage}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-border/40 to-border/10" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex flex-col flex-1 p-5">
                        <span
                          className={`inline-flex w-fit items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium ${post.categoryColor} mb-3`}
                        >
                          <Tag className="h-3 w-3" />
                          {post.category}
                        </span>
                        <h3 className="text-base font-bold text-foreground group-hover:text-[var(--brand)] transition-colors leading-snug line-clamp-2 flex-1">
                          {post.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground/60">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
            </div>
          </div>
        )}

        {rest.length === 0 && !isFetching && !isError && (
          <div className="py-16 text-center text-muted-foreground text-sm">
            No posts found.
          </div>
        )}

        <GridLine />

        {/* Pagination */}
        {totalPages > 1 && (
          <ScrollAnimation variant="fade-up" delay={0.1}>
            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1 || isFetching}
                className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-card/70 px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-accent/60 hover:text-foreground disabled:opacity-40 disabled:pointer-events-none"
              >
                <ChevronLeft className="h-3.5 w-3.5" />
                Prev
              </button>

              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .filter((p) => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
                  .reduce<(number | "...")[]>((acc, p, i, arr) => {
                    if (i > 0 && p - (arr[i - 1] as number) > 1) acc.push("...");
                    acc.push(p);
                    return acc;
                  }, [])
                  .map((item, i) =>
                    item === "..." ? (
                      <span key={`ellipsis-${i}`} className="px-2 text-muted-foreground/40 text-sm">
                        …
                      </span>
                    ) : (
                      <button
                        key={item}
                        onClick={() => setPage(item as number)}
                        disabled={isFetching}
                        className={`h-8 w-8 rounded-full text-sm font-medium transition-all disabled:pointer-events-none ${
                          page === item
                            ? "bg-[var(--brand)] text-[var(--brand-foreground)]"
                            : "border border-border/80 bg-card/70 text-muted-foreground hover:bg-accent/60 hover:text-foreground"
                        }`}
                      >
                        {item}
                      </button>
                    )
                  )}
              </div>

              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages || isFetching}
                className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-card/70 px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-accent/60 hover:text-foreground disabled:opacity-40 disabled:pointer-events-none"
              >
                Next
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </ScrollAnimation>
        )}
      </section>
    </>
  );
}

