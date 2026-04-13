"use client";
import { Quote } from "lucide-react";
import { GridLine } from "./grid-background";

// Original stats
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

// New industry statistics
const industryStats = [
  {
    value: "99.5%",
    label: (
      <>
        businesses are <span className="font-bold">MSMEs</span>
      </>
    ),
    color: "text-[var(--brand)]",
  },
  {
    value: "86%",
    label: (
      <>
        SMEs say digital technology is essential{" "}
        <span className="font-bold">
          but cost and complexity remain major barriers
        </span>
      </>
    ),
    color: "text-orange-400",
  },
  {
    value: "10%",
    label: (
      <>
        <span className="font-bold">are digitally advanced</span>
      </>
    ),
    color: "text-emerald-400",
  },
];
export function TestimonialsSection() {
  return (
    <section id="stories" className="relative py-16 sm:py-24">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= SaaS GAP SECTION (NOW FIRST) ================= */}
        <div className="mt-16">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-10 text-left leading-tight">
            The SaaS Gap in the<br />
            Philippines
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* LEFT */}
            <div className="flex justify-center">
              <div className="flex flex-col gap-6 items-center text-center">

                {industryStats.map((stat) => {
                  const percent = parseFloat(stat.value);
                  const size = 60 + percent * 0.8;

                  return (
                    <div
                      key={stat.value}
                      className="flex items-center gap-4 justify-center"
                    >
                      <div
                        className="flex items-center justify-center rounded-full bg-red-600 shrink-0"
                        style={{
                          width: `${size}px`,
                          height: `${size}px`,
                        }}
                      >
                        <p className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl">
                          {stat.value}
                        </p>
                      </div>

                      <p className="text-sm sm:text-base text-gray-800 dark:text-white max-w-xs text-left">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}

              </div>
            </div>

            {/* RIGHT */}
            <div className="relative flex items-center justify-center text-center">

              {/* top-left (sagad inward using transform) */}
              <Quote className="absolute top-0 left-[15%] -translate-y-1/2 w-20 h-20 text-gray-300/20 dark:text-white/10 rotate-180" />

              {/* bottom-right (sagad inward using transform) */}
              <Quote className="absolute bottom-0 right-[27%] translate-y-1/2 w-20 h-20 text-gray-300/20 dark:text-white/10" />

              {/* main text */}
              <h3 className="relative text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug">
                <span>Demand is clear.</span>
                <br />
                <span className="underline text-red-600">
                  The right solution
                </span>
                <br />
                <span>is missing.</span>
              </h3>

            </div>

          </div>
        </div>

        {/* ================= STATS / TRUSTED SECTION (NOW SECOND) ================= */}

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

        {/* ================= WATATRIP (STAYS LAST) ================= */}
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