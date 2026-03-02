"use client";

import { Quote } from "lucide-react";
import { GridLine } from "./grid-background";
import { ScrollAnimation, CounterAnimation } from "./scroll-animations";

const testimonials = [
  {
    quote:
      "WT Migremo delivered exactly what we needed — a system that actually understands our business workflow. Their team took the time to dig into our processes before writing a single line of code.",
    author: "Operations Director",
    company: "Retail Enterprise Client",
    avatar: "RE",
    avatarBg: "bg-[#c60000]/20 text-[#c60000]",
  },
  {
    quote:
      "What impressed us most was their ability to turn complex government requirements into an intuitive platform. They made the impossible feel straightforward.",
    author: "IT Department Head",
    company: "Government Agency",
    avatar: "GA",
    avatarBg: "bg-emerald-500/20 text-emerald-400",
  },
  {
    quote:
      "From concept to deployment, the WTMSI team was with us every step. They didn't just build an app — they became an extension of our team and helped us rethink our entire digital strategy.",
    author: "CTO",
    company: "Education Technology Startup",
    avatar: "ET",
    avatarBg: "bg-purple-500/20 text-purple-400",
  },
];

const stats = [
  {
    value: "15+",
    label: "years of experience in software development",
    color: "text-[#c60000]",
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
      {/* Section glow */}
      <div className="pointer-events-none absolute left-1/3 top-0 h-[300px] w-[500px] rounded-full bg-[#c60000]/[0.03] blur-[130px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollAnimation variant="fade-up">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c60000] mb-4">
              Client Stories
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Trusted by teams
              <br />
              <span className="text-[#c7c8bd/80]">who need to deliver.</span>
            </h2>
          </div>
        </ScrollAnimation>

        {/* Testimonial cards */}
        <ScrollAnimation variant="stagger-children" staggerAmount={0.2}>
          <div className="grid gap-px md:grid-cols-3 bg-white/[0.08]">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col bg-[#282828] p-6 sm:p-8 transition-all hover:bg-white/[0.02]"
            >
              <Quote className="h-8 w-8 text-white/10 mb-4" />
              <p className="text-sm text-[#F1F4F9] leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3 pt-4 border-t border-white/[0.08]">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold ${t.avatarBg}`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{t.author}</p>
                  <p className="text-xs text-[#c7c8bd/80]">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
          </div>
        </ScrollAnimation>

        {/* Stats */}
        <GridLine className="mt-12 sm:mt-16" />
        <ScrollAnimation variant="stagger-children" staggerAmount={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-3">
            {stats.map((stat, i) => (
              <div
                key={stat.value}
              className={`flex flex-col items-center justify-center py-6 sm:py-10 sm:border-r sm:border-white/[0.08] sm:last:border-r-0 ${
                i < stats.length - 1 ? "border-b border-white/[0.08] sm:border-b-0" : ""
              }`}
            >
              <p className={`text-3xl font-bold ${stat.color} sm:text-5xl`}>
                {stat.value}
              </p>
              <p className="mt-2 text-xs text-[#c7c8bd/80] text-center leading-tight max-w-[14rem]">
                {stat.label}
              </p>
            </div>
          ))}
          </div>
        </ScrollAnimation>
        <GridLine />

        {/* Watatrip spotlight */}
        <ScrollAnimation variant="reveal">
          <div className="mt-12 sm:mt-16 rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block rounded-full bg-[#c60000]/10 border border-[#c60000]/20 px-3 py-1 text-xs font-medium text-[#c60000] mb-4">
                Featured Product
              </span>
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Watatrip
              </h3>
              <p className="mt-3 text-[#c7c8bd] leading-relaxed">
                Our own startup product — a travel app designed to be the go-to
                platform to discover the rich culture, places, and events of
                interest in the Philippines and soon, Southeast Asia.
              </p>
              <a
                href="http://www.watatrip.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#c60000] hover:text-[#a50000] transition-colors"
              >
                Visit Watatrip →
              </a>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-48 w-48 rounded-2xl bg-gradient-to-br from-[#c60000]/20 via-orange-500/10 to-transparent border border-white/[0.08] flex items-center justify-center">
                <span className="text-4xl font-bold text-white/20">W</span>
              </div>
            </div>
          </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
