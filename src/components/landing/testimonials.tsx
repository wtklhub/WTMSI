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

                      {/* Laptop Device Mockup*/}
                      <div className="relative mx-auto max-w-2xl w-full px-4 sm:px-10">
                        {/* Screen */}
                          <div className="relative overflow-hidden rounded-t-3xl bg-zinc-950 p-3 shadow-2xl group">
                          {/*Camera Notch */}
                          <div className="absolute inset-x-0 top-0 flex items-center justify-center z-20">
                            <div className="relative flex h-6 w-24 items-center justify-center">
                              {/* Notch shape */}
                              <div className="absolute left-1/2 -translate-x-1/2 top-0 h-6 w-22 rounded-b-2xl bg-zinc-900 shadow-lg shadow-black/30 border-b border-zinc-800" />
                              {/* Camera */}
                              <div className="relative z-10 flex items-center justify-center w-full">
                                <div className="mx-auto h-1.5 w-1.5 rounded-full bg-zinc-700 border border-zinc-600 shadow-inner shadow-black/40" />
                              </div>
                            </div>
                          </div>
                          {/* Reflective light effects*/}
                          <div className="pointer-events-none absolute top-2 left-0 h-8 w-16 bg-gradient-to-r from-white/30 via-white/0 to-transparent rounded-l-2xl blur-md opacity-40" />
                          <div className="pointer-events-none absolute top-2 right-0 h-8 w-16 bg-gradient-to-l from-white/30 via-white/0 to-transparent rounded-r-2xl blur-md opacity-40" />
                          {/* Keyboard glow */}
                          <div className="absolute inset-x-10 bottom-0 h-2 bg-white blur-xl" />
                          {/* Screen Content */}
                          <div className="aspect-[16/10] w-full overflow-hidden rounded-t-2xl  items-center justify-center">
                              <img
                                src="/watatrip-site.png"
                                alt="Watatrip Website Preview"
                                className="aspect-[16/10] w-full object-cover object-top opacity-0 scale-95 animate-[fadeInScreen_1.2s_ease-out_forwards]"
                              />
                          {/* fadeInScreen animation */}
                          <style jsx global>{`
                          @keyframes fadeInScreen {
                            0% { opacity: 0; transform: scale(0.95); }
                            100% { opacity: 1; transform: scale(1); }
                          }
                          `}</style>
                          </div>
                        </div>
                        {/* Base */}
                        <div className="-mx-10 pb-1">
                          <div className="relative h-4 w-full rounded-b-2xl bg-gradient-to-r from-zinc-800 via-zinc-950 to-zinc-800">
                            <div className="absolute inset-0 flex items-start justify-center">
                              <div className="h-2 w-20 rounded-b-md border-x border-b border-zinc-600/25 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 opacity-75" />
                            </div>
                            <div className="absolute -bottom-1 left-8 h-1 w-10 rounded-b-full bg-zinc-900" />
                            <div className="absolute right-8 -bottom-1 h-1 w-10 rounded-b-full bg-zinc-900" />
                          </div>
                        </div>
                      </div>
          </div>
        </div>

      </div>
    </section>
  );
}