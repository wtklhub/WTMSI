"use client";

import { useState } from "react";
import {
  Navbar,
  Footer,
  GridLayout,
  GridSection,
  GridLine,
  ScrollAnimation,
} from "@/components/landing";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

/* ──── Client / Partner logos ──── */
const clientLogos = [
  { name: "DICT", sector: "Government" },
  { name: "DOST", sector: "Government" },
  { name: "DOT", sector: "Government" },
  { name: "DENR", sector: "Government" },
  { name: "DepEd", sector: "Government" },
  { name: "DPWH", sector: "Government" },
  { name: "CHED", sector: "Government" },
  { name: "PhilGEPS", sector: "Government" },
  { name: "Globe", sector: "Enterprise" },
  { name: "PLDT", sector: "Enterprise" },
  { name: "LGU Partners", sector: "Government" },
  { name: "Watatrip", sector: "Startup" },
  { name: "SM Retail", sector: "Enterprise" },
  { name: "Cebu Pacific", sector: "Enterprise" },
  { name: "BDO", sector: "Enterprise" },
  { name: "Jollibee Group", sector: "Enterprise" },
];

/* ──── Recent projects ──── */
const recentProjects = [
  {
    title: "Government GIS Platform",
    client: "DENR",
    description:
      "An intelligent Geographic Information System for environmental monitoring, integrating AI-powered analytics and real-time satellite data processing.",
    tags: ["GIS", "AI", "Government"],
    color: "border-[#c60000]",
  },
  {
    title: "Enterprise Resource Planning",
    client: "Retail Enterprise",
    description:
      "End-to-end ERP system covering inventory, procurement, sales, and HR modules — deployed across 50+ branches nationwide.",
    tags: ["ERP", "Full Stack", "Enterprise"],
    color: "border-orange-400",
  },
  {
    title: "Mobile Tourism App",
    client: "DOT Partnership",
    description:
      "A cross-platform mobile app connecting tourists with local experiences, cultural heritage sites, and events throughout the Philippines.",
    tags: ["Mobile", "Flutter", "Tourism"],
    color: "border-emerald-400",
  },
  {
    title: "E-Learning Management System",
    client: "Education Institution",
    description:
      "A comprehensive LMS with video conferencing, grading, enrollment, and student analytics — serving 10,000+ students.",
    tags: ["Web App", "Education", "LMS"],
    color: "border-purple-400",
  },
  {
    title: "Video Analytics System",
    client: "Government Agency",
    description:
      "AI-powered video surveillance analytics for public safety — with real-time object detection, counting, and anomaly alerts.",
    tags: ["AI", "Computer Vision", "Security"],
    color: "border-blue-400",
  },
];

export default function ClientsPage() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () =>
    setActiveSlide((prev) => (prev + 1) % recentProjects.length);
  const prevSlide = () =>
    setActiveSlide(
      (prev) => (prev - 1 + recentProjects.length) % recentProjects.length
    );

  return (
    <GridLayout>
      <Navbar />
      <main>
        {/* Hero header */}
        <GridSection topLine={false}>
          <section className="relative pt-32 pb-16">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-[#c60000]/[0.05] blur-[150px]" />
            </div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <ScrollAnimation variant="fade-up">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c60000] mb-4">
                    Our Clients
                  </p>
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    Trusted by organizations{" "}
                    <span className="text-[#c7c8bd]">across industries.</span>
                  </h1>
                  <p className="mt-4 max-w-2xl text-lg text-[#c7c8bd]">
                    From government agencies to enterprise brands and startups — we
                    deliver software that drives real impact.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </section>
        </GridSection>

        {/* ──── Mosaic Logo Grid ──── */}
        <GridSection>
          <section className="py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <ScrollAnimation variant="fade-up">
                <div className="mb-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c60000] mb-4">
                    Clients & Partners
                  </p>
                  <h2 className="text-2xl font-bold text-white sm:text-3xl">
                    Companies we&apos;ve worked with
                  </h2>
                </div>
              </ScrollAnimation>

              {/* Mosaic grid — scattered/asymmetric card layout */}
              <ScrollAnimation variant="stagger-children" staggerAmount={0.1}>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                  {clientLogos.map((client, i) => {
                    // Varied card sizing for mosaic effect
                    const sizeClasses = [
                      "row-span-1 col-span-1",
                      "row-span-1 col-span-1",
                      "row-span-1 col-span-1 sm:col-span-2",
                      "row-span-1 col-span-1",
                      "row-span-1 col-span-1",
                      "row-span-1 col-span-1",
                      "row-span-1 col-span-1 sm:col-span-2",
                      "row-span-1 col-span-1",
                      "row-span-1 col-span-1",
                      "row-span-1 col-span-1",
                      "row-span-1 col-span-1 sm:col-span-2",
                      "row-span-1 col-span-1",
                      "row-span-1 col-span-1",
                      "row-span-1 col-span-1",
                      "row-span-1 col-span-1",
                      "row-span-1 col-span-1 sm:col-span-2",
                    ];
                    return (
                      <div
                        key={client.name}
                        className={`${sizeClasses[i % sizeClasses.length]} group flex flex-col items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8 transition-all hover:bg-white/[0.05] hover:border-white/[0.15]`}
                      >
                        <span className="text-lg font-bold text-white/80 group-hover:text-white transition-colors sm:text-xl">
                          {client.name}
                        </span>
                        <span className="mt-1 text-xs text-[#c7c8bd]/60 uppercase tracking-wider">
                          {client.sector}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </ScrollAnimation>
            </div>
          </section>
        </GridSection>

        {/* ──── Recent Projects Slider ──── */}
        <GridSection bottomLine>
          <section className="py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <GridLine className="mb-12" />

              <ScrollAnimation variant="fade-up">
                <div className="flex items-end justify-between mb-10">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c60000] mb-4">
                      Recent Work
                    </p>
                    <h2 className="text-2xl font-bold text-white sm:text-3xl">
                      5 recent projects
                    </h2>
                  </div>
                  <div className="hidden sm:flex items-center gap-2">
                    <button
                      onClick={prevSlide}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-[#c7c8bd] transition-colors hover:bg-white/[0.05] hover:text-white"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-[#c7c8bd] transition-colors hover:bg-white/[0.05] hover:text-white"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Slider container */}
              <ScrollAnimation variant="reveal">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateX(-${activeSlide * 100}%)`,
                    }}
                  >
                    {recentProjects.map((project, i) => (
                      <div key={i} className="w-full flex-shrink-0 px-1">
                        <div
                          className={`rounded-2xl border-l-4 ${project.color} border border-white/[0.08] bg-white/[0.02] p-8 sm:p-10 lg:p-12`}
                        >
                          <div className="grid gap-6 lg:grid-cols-2">
                            <div>
                              <span className="text-xs font-medium text-[#c7c8bd]/60 uppercase tracking-wider">
                                {project.client}
                              </span>
                              <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                                {project.title}
                              </h3>
                              <p className="mt-4 text-[#c7c8bd] leading-relaxed">
                                {project.description}
                              </p>
                              <div className="mt-6 flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-[#c7c8bd]"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="flex items-center justify-center">
                              <div className="h-48 w-full rounded-xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.06] flex items-center justify-center">
                                <span className="text-sm text-white/20 uppercase tracking-widest">
                                  Project Screenshot
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>

              {/* Dots */}
              <div className="mt-8 flex items-center justify-center gap-2">
                {recentProjects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSlide(i)}
                    className={`h-2 rounded-full transition-all ${
                      activeSlide === i
                        ? "w-8 bg-[#c60000]"
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>

              {/* Mobile nav */}
              <div className="mt-6 flex items-center justify-center gap-2 sm:hidden">
                <button
                  onClick={prevSlide}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-[#c7c8bd] transition-colors hover:bg-white/[0.05]"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-[#c7c8bd] transition-colors hover:bg-white/[0.05]"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <GridLine className="mt-12" />

              <ScrollAnimation variant="zoom-in" delay={0.1}>
                <div className="mt-12 text-center">
                  <Link href="/contact">
                    <Button className="bg-[#c60000] text-white hover:bg-[#a50000] gap-2 shadow-lg shadow-[#c60000]/20">
                      Start Your Project
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </Link>
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
