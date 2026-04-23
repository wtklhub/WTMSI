"use client";
import { GridLine } from "./grid-background";

//  stats
const stats = [
  {
    value: "15+",
    label: "years of experience in software development",
    color: "text-[var(--brand)]",
  },
  {
    value: "99%",
    label: "client satisfaction across all projects",
    color: "text-orange-400",
  },
  {
    value: "200+",
    label: "successful projects delivered on time",
    color: "text-emerald-400",
  },
];

export function TestimonialsSection() {
  return (
    <section id="stories" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* STATS / TRUSTED SECTION */}

        <div className="mb-16 mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)] mb-4">
            Client Stories
          </p>

          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Trusted by teams
            <br />
            <span className="text-muted-foreground">who need to deliver.</span>
          </h2>
        </div>

        <GridLine className="mt-12 sm:mt-16" />

        <div className="grid grid-cols-1 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <div
              key={stat.value}
              className={`flex flex-col items-center justify-center py-6 sm:py-10 sm:border-r sm:border-border/80 sm:last:border-r-0 ${
                i < stats.length - 1
                  ? "border-b border-border/80 sm:border-b-0"
                  : ""
              }`}
            >
              <p className={`text-3xl font-bold ${stat.color} sm:text-5xl`}>
                {stat.value}
              </p>
              <p className="mt-2 text-xs text-muted-foreground text-center leading-tight max-w-[14rem]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <GridLine />

        {/* WATATRIP */}
        <div className="mt-12 sm:mt-16 rounded-xl border border-border/80 bg-card/60 p-6 sm:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block rounded-full bg-[var(--brand)]/10 border border-[var(--brand)]/20 px-3 py-1 text-xs font-medium text-[var(--brand)] mb-4">
                Featured Product
              </span>

              <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
                Watatrip
              </h3>

              <p className="mt-3 text-muted-foreground leading-relaxed">
                Our own startup product — a travel app designed to be the go-to
                platform to discover the rich culture, places, and events of
                interest in the Philippines and soon, Southeast Asia.
              </p>

              <a
                href="http://www.watatrip.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--brand)]"
              >
                Visit Watatrip →
              </a>
            </div>

            <div className="flex items-center justify-center">
              <div className="h-48 w-48 rounded-2xl bg-gradient-to-br from-[var(--brand)]/20 via-orange-500/10 border border-border/80 flex items-center justify-center">
                <span className="text-4xl font-bold text-foreground/20">W</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}