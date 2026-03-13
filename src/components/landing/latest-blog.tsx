"use client";

import Link from "next/link";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { GridLine } from "./grid-background";
import { ScrollAnimation } from "./scroll-animations";

const latestPosts = [
  {
    slug: "choosing-the-right-software-solution",
    title:
      "Choosing the Right Software Solution for Your Business: 5 Important Tips",
    excerpt:
      "Finding the right software for your business can feel overwhelming. Here are five practical tips to help you make the right choice.",
    date: "February 6, 2026",
    readTime: "6 min read",
    category: "Technology",
    categoryColor: "text-[var(--brand)] bg-[var(--brand)]/10 border-[var(--brand)]/20",
  },
  {
    slug: "7-erp-implementation-mistakes",
    title: "7 ERP Implementation Mistakes and How to Avoid Them",
    excerpt:
      "ERP implementations are complex projects that can transform your business or drain your resources. Learn the most common pitfalls.",
    date: "January 27, 2026",
    readTime: "8 min read",
    category: "Systems",
    categoryColor: "text-orange-400 bg-orange-500/10 border-orange-500/20",
  },
  {
    slug: "ai-in-government-services",
    title:
      "How AI is Transforming Government Services in the Philippines",
    excerpt:
      "From intelligent GIS to video analytics, AI is reshaping how government agencies serve citizens.",
    date: "December 5, 2025",
    readTime: "7 min read",
    category: "Digitalization",
    categoryColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  },
];

export function LatestBlogPosts() {
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
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/stories/${post.slug}`}
                className="group flex flex-col bg-background p-6 sm:p-8 transition-colors hover:bg-accent/70"
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
