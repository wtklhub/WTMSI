import type { Metadata } from "next";
import Link from "next/link";
import {
  Navbar,
  Footer,
  GridLayout,
  GridSection,
  GridLine,
  ScrollAnimation,
} from "@/components/landing";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Stories & Insights — WT Migremo Systems, Inc.",
  description:
    "Read the latest insights on software development, ERP implementation, digital transformation, and technology trends from the WTMSI team.",
};

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  categoryColor: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    slug: "choosing-the-right-software-solution",
    title:
      "Choosing the Right Software Solution for Your Business: 5 Important Tips",
    excerpt:
      "Finding the right software for your business can feel overwhelming with so many options out there. Here are five practical tips to help you make the right choice and avoid costly mistakes.",
    date: "February 6, 2026",
    readTime: "6 min read",
    category: "Technology",
    categoryColor: "text-[var(--brand)] bg-[var(--brand)]/10 border-[var(--brand)]/20",
    featured: true,
  },
  {
    slug: "7-erp-implementation-mistakes",
    title: "7 ERP Implementation Mistakes and How to Avoid Them",
    excerpt:
      "ERP implementations are complex projects that can transform your business — or drain your resources. Learn from the most common pitfalls and how to steer clear of them.",
    date: "January 27, 2026",
    readTime: "8 min read",
    category: "Systems",
    categoryColor: "text-orange-400 bg-orange-500/10 border-orange-500/20",
    featured: true,
  },
  {
    slug: "6-phases-of-erp-implementation",
    title:
      "6 Phases of ERP Implementation: A Step-by-Step Guide for Success",
    excerpt:
      "A successful ERP rollout follows a structured process. We break down the six essential phases — from planning and design through go-live and optimization.",
    date: "January 11, 2026",
    readTime: "10 min read",
    category: "Systems",
    categoryColor: "text-orange-400 bg-orange-500/10 border-orange-500/20",
  },
  {
    slug: "why-custom-software-over-off-the-shelf",
    title: "Why Custom Software Beats Off-the-Shelf for Growing Businesses",
    excerpt:
      "Off-the-shelf solutions can get you started, but custom software scales with your vision. We explore when it makes sense to invest in tailor-fit development.",
    date: "December 20, 2025",
    readTime: "5 min read",
    category: "Business",
    categoryColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    slug: "ai-in-government-services",
    title:
      "How AI is Transforming Government Services in the Philippines",
    excerpt:
      "From intelligent GIS to video analytics, AI is reshaping how government agencies serve citizens. Here's what we've learned from our partnerships.",
    date: "December 5, 2025",
    readTime: "7 min read",
    category: "Digitalization",
    categoryColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  },
  {
    slug: "mobile-first-development-guide",
    title: "Mobile-First Development: A Practical Guide for 2026",
    excerpt:
      "With mobile usage continuing to rise in Southeast Asia, building mobile-first is no longer optional. Our practical guide covers Flutter, React Native, and native approaches.",
    date: "November 18, 2025",
    readTime: "9 min read",
    category: "Technology",
    categoryColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  },
];

const categories = [
  "All",
  "Technology",
  "Systems",
  "Digitalization",
  "Business",
];

export default function StoriesPage() {
  const featured = blogPosts.filter((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <GridLayout>
      <Navbar />
      <main>
        {/* Hero header */}
        <GridSection topLine={false}>
          <section className="relative pt-32 pb-16">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-[var(--brand)]/[0.05] blur-[150px]" />
            </div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <ScrollAnimation variant="fade-up">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)] mb-4">
                    Stories & Insights
                  </p>
                  <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                    Latest from <span className="text-muted-foreground">our team.</span>
                  </h1>
                  <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                    Insights on software development, digital transformation, and
                    technology trends — straight from our 15+ years of experience.
                  </p>
                </div>
              </ScrollAnimation>

              {/* Category filters */}
              <ScrollAnimation variant="fade-up" delay={0.1}>
                <div className="mt-8 flex flex-wrap gap-2">
                  {categories.map((cat, i) => (
                    <button
                      key={cat}
                      className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
                        i === 0
                          ? "border-[var(--brand)]/40 bg-[var(--brand)]/10 text-[var(--brand)]"
                          : "border-border/80 bg-card/70 text-muted-foreground hover:text-foreground hover:bg-accent/60"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </ScrollAnimation>
            </div>
          </section>
        </GridSection>

        {/* Featured posts */}
        <GridSection>
          <section className="py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                      className="group flex flex-col bg-background p-8 sm:p-10 transition-colors hover:bg-accent/60"
                    >
                      {/* Category badge */}
                      <span
                        className={`inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${post.categoryColor} mb-4`}
                      >
                        <Tag className="h-3 w-3" />
                        {post.category}
                      </span>

                      <h3 className="text-xl font-bold text-foreground group-hover:text-[var(--brand)] transition-colors sm:text-2xl leading-tight">
                        {post.title}
                      </h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
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
                    </Link>
                  ))}
                </div>
              </ScrollAnimation>
            </div>
          </section>
        </GridSection>

        {/* All posts */}
        <GridSection>
          <section className="py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <ScrollAnimation variant="fade-up">
                <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">
                  All Stories
                </h2>
              </ScrollAnimation>

              <ScrollAnimation variant="stagger-children" staggerAmount={0.08}>
                <div>
                  {rest.map((post, idx) => (
                    <div key={post.slug}>
                      {idx > 0 && <GridLine className="my-0" />}
                      <Link
                        href={`/stories/${post.slug}`}
                        className="group flex flex-col gap-4 py-8 sm:flex-row sm:items-start sm:gap-8 transition-colors"
                      >
                        {/* Date column */}
                        <div className="flex items-center gap-3 sm:w-48 sm:flex-shrink-0 sm:flex-col sm:items-start sm:gap-1">
                          <span className="text-xs text-muted-foreground">
                            {post.date}
                          </span>
                          <span
                            className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium ${post.categoryColor}`}
                          >
                            {post.category}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-foreground group-hover:text-[var(--brand)] transition-colors leading-tight">
                            {post.title}
                          </h3>
                          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                            {post.excerpt}
                          </p>
                          <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[var(--brand)] opacity-0 group-hover:opacity-100 transition-opacity">
                            Read more
                            <ArrowRight className="h-3.5 w-3.5" />
                          </span>
                        </div>

                        {/* Read time */}
                        <div className="hidden sm:flex sm:w-24 sm:flex-shrink-0 sm:items-center sm:justify-end">
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </span>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </ScrollAnimation>

              <GridLine />

              {/* Load more */}
              <ScrollAnimation variant="zoom-in" delay={0.1}>
                <div className="mt-8 text-center">
                  <button className="rounded-full border border-border/80 bg-card/70 px-6 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:bg-accent/60 hover:text-foreground">
                    Load more stories
                  </button>
                </div>
              </ScrollAnimation>
            </div>
          </section>
        </GridSection>

        {/* Newsletter CTA */}
        <GridSection bottomLine>
          <section className="py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <ScrollAnimation variant="zoom-in">
                <div className="mx-auto max-w-2xl text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)] mb-4">
                    Stay Updated
                  </p>
                  <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                    Get insights delivered to your inbox.
                  </h2>
                  <p className="mt-3 text-muted-foreground">
                    No spam. Just practical software development insights, once a
                    month.
                  </p>
                  <form className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full rounded-lg border border-border/80 bg-card/70 px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:border-[var(--brand)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--brand)]/50 sm:max-w-xs transition-colors"
                    />
                    <button
                      type="submit"
                      className="rounded-lg bg-[var(--brand)] px-6 py-3 text-sm font-medium text-[var(--brand-foreground)] hover:bg-[var(--brand-hover)] shadow-lg shadow-red-500/20 transition-colors"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </ScrollAnimation>
            </div>
          </section>
        </GridSection>
      </main>
      <GridSection as="footer">
        <Footer />
      </GridSection>
    </GridLayout>
  );
}
