import type { Metadata } from "next";
import {
  Navbar,
  Footer,
  GridLayout,
  GridSection,
  ScrollAnimation,
} from "@/components/landing";
import { BlogList } from "@/components/landing/blog-list";
import { getCategories } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "Stories & Insights — WT Migremo Systems, Inc.",
  description:
    "Read the latest insights on software development, ERP implementation, digital transformation, and technology trends from the WTMSI team.",
};

export default async function StoriesPage() {
  const rawCategories = await getCategories();
  const categories = rawCategories
    .filter((c) => c.slug !== "uncategorized" && c.count > 0)
    .map((c) => ({ id: c.id, name: c.name }));

  return (
    <GridLayout>
      <Navbar />
      <main>
        {/* Hero header */}
        <GridSection topLine={false}>
          <section className="relative pt-32 pb-4">
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
                    Latest from{" "}
                    <span className="text-muted-foreground">our team.</span>
                  </h1>
                  <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                    Insights on software development, digital transformation, and
                    technology trends — straight from our 15+ years of
                    experience.
                  </p>
                </div>
              </ScrollAnimation>

              <BlogList initialCategories={categories} />
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
