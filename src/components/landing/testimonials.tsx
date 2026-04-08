import { Quote } from "lucide-react";
import { GridLine } from "./grid-background";

// Testimonials - currently hidden
// const testimonials = [
//   {
//     quote:
//       "WT Migremo delivered exactly what we needed — a system that actually understands our business workflow. Their team took the time to dig into our processes before writing a single line of code.",
//     author: "Operations Director",
//     company: "Retail Enterprise Client",
//     avatar: "RE",
//     avatarBg: "bg-[var(--brand)]/20 text-[var(--brand)]",
//   },
//   {
//     quote:
//       "What impressed us most was their ability to turn complex government requirements into an intuitive platform. They made the impossible feel straightforward.",
//     author: "IT Department Head",
//     company: "Government Agency",
//     avatar: "GA",
//     avatarBg: "bg-emerald-500/20 text-emerald-400",
//   },
//   {
//     quote:
//       "From concept to deployment, the WTMSI team was with us every step. They didn't just build an app — they became an extension of our team and helped us rethink our entire digital strategy.",
//     author: "CTO",
//     company: "Education Technology Startup",
//     avatar: "ET",
//     avatarBg: "bg-purple-500/20 text-purple-400",
//   },
// ];

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
  { value: "99.5%", label: "businesses are MSMEs", color: "text-[var(--brand)]" },
  { value: "86%", label: "SMEs say digital technology is essential but cost and complexity remain major barriers", color: "text-orange-400" },
  { value: "10%", label: "are digitally advanced", color: "text-emerald-400" },
];

export function TestimonialsSection() {
  return (
    <section id="stories" className="relative py-16 sm:py-24">
      {/* Section glow */}
      <div className="pointer-events-none absolute left-1/3 top-0 h-[300px] w-[500px] rounded-full bg-[var(--brand)]/[0.03] blur-[130px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)] mb-4">
            Client Stories
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Trusted by teams
            <br />
            <span className="text-muted-foreground">who need to deliver.</span>
          </h2>
        </div>

        {/* Testimonial cards - hidden */}
        {/*
        <div className="grid gap-px md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col p-6 sm:p-8 transition-all hover:bg-accent/60"
            >
              <Quote className="h-8 w-8 text-foreground/10 mb-4" />
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 pt-4 border-t border-border/80">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold ${t.avatarBg}`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        */}

        {/* New industry statistics */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {industryStats.map((stat) => (
            <div key={stat.value} className="flex flex-col items-center">
              {/* Red circle with white number */}
              <div className="flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-red-600">
                <p className="text-white text-2xl sm:text-4xl font-bold">{stat.value}</p>
              </div>
              {/* Label below circle */}
              <p className="mt-4 text-xs sm:text-sm text-muted-foreground leading-snug max-w-[12rem]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>


        {/* Original stats */}
        <GridLine className="mt-12 sm:mt-16" />
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <div
              key={stat.value}
              className={`flex flex-col items-center justify-center py-6 sm:py-10 sm:border-r sm:border-border/80 sm:last:border-r-0 ${
                i < stats.length - 1 ? "border-b border-border/80 sm:border-b-0" : ""
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

        

        {/* Watatrip spotlight */}
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
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--brand)] hover:text-[var(--brand-hover)] transition-colors"
              >
                Visit Watatrip →
              </a>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-48 w-48 rounded-2xl bg-gradient-to-br from-[var(--brand)]/20 via-orange-500/10 to-transparent border border-border/80 flex items-center justify-center">
                <span className="text-4xl font-bold text-foreground/20">W</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}