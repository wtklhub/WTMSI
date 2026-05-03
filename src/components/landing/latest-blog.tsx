"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { GridLine } from "./grid-background";
import { ScrollAnimation } from "./scroll-animations";
import { fetchPostsPage, type NormalizedPost } from "@/lib/wordpress";

async function fetchLatestPosts(): Promise<NormalizedPost[]> {
  const { posts } = await fetchPostsPage(1, 3);
  return posts;
}

const skeletonPosts = Array.from({ length: 3 });

export function LatestBlogPosts() {
  const [posts, setPosts] = useState<NormalizedPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLatestPosts().then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, []);

  return (
    <section className="relative py-16 sm:py-24">
      <div className="pointer-events-none absolute right-1/4 top-0 h-[300px] w-[500px] rounded-full bg-[var(--brand)]/[0.03] blur-[130px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimation variant="fade-up">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)] mb-4">
              From Our Blog
            </p>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              Latest insights
              <br />
              <span className="text-muted-foreground">from our team.</span>
            </h2>
          </div>
        </ScrollAnimation>

        <ScrollAnimation variant="stagger-children" staggerAmount={0.15}>
          <div className="grid gap-px md:grid-cols-3 bg-border/80 rounded-xl overflow-hidden">
            {loading
              ? skeletonPosts.map((_, i) => (
                  <div
                    key={i}
                    className="flex flex-col bg-background p-6 sm:p-8 animate-pulse"
                  >
                    <div className="h-5 w-20 rounded-full bg-muted mb-4" />
                    <div className="h-4 w-full rounded bg-muted mb-2" />
                    <div className="h-4 w-3/4 rounded bg-muted mb-4" />
                    <div className="h-3 w-full rounded bg-muted/60 mb-1" />
                    <div className="h-3 w-5/6 rounded bg-muted/60 mb-4" />
                    <div className="mt-auto flex gap-3">
                      <div className="h-3 w-24 rounded bg-muted/40" />
                      <div className="h-3 w-16 rounded bg-muted/40" />
                    </div>
                  </div>
                ))
              : posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/stories/${post.slug}`}
                    className="group flex flex-col bg-background p-6 sm:p-8 transition-colors hover:bg-accent/60"
                  >
                    <span
                      className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${post.categoryColor} mb-4`}
                    >
                      <Tag className="h-3 w-3" />
                      {post.category}
                    </span>
                    <h3 className="text-base font-bold text-foreground group-hover:text-[var(--brand)] transition-colors leading-tight flex-1 sm:text-lg">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground/60">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </Link>
                ))}
          </div>
        </ScrollAnimation>

        <GridLine className="mt-12" />

        <ScrollAnimation variant="fade-up" delay={0.2}>
          <div className="mt-8 text-center">
            <Link
              href="/stories"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--brand)] hover:text-[var(--brand-hover)] transition-colors"
            >
              View all stories
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
