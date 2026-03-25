"use client";

import Image from "next/image";
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
// Row 1 — Circle logos
const circleLogos = [
  { src: "/clients/circle logo/image 339.png", alt: "Client" },
  { src: "/clients/circle logo/image 340.png", alt: "Client" },
  { src: "/clients/circle logo/image 342.png", alt: "Client" },
  { src: "/clients/circle logo/image 348.png", alt: "Client" },
  { src: "/clients/circle logo/image 354.png", alt: "Client" },
  { src: "/clients/circle logo/image 357.png", alt: "Client" },
  { src: "/clients/circle logo/image 358.png", alt: "Client" },
  { src: "/clients/circle logo/image 365.png", alt: "Client" },
  { src: "/clients/circle logo/image 367.png", alt: "Client" },
  { src: "/clients/circle logo/image 368.png", alt: "Client" },
];

// Row 2 — Vertical logos without background
const noBgLogos = [
  { src: "/clients/vertical logo without bg/image 341.png", alt: "Client" },
  { src: "/clients/vertical logo without bg/image 344.png", alt: "Client" },
  { src: "/clients/vertical logo without bg/image 345.png", alt: "Client" },
  { src: "/clients/vertical logo without bg/image 351.png", alt: "Client" },
  { src: "/clients/vertical logo without bg/image 352.png", alt: "Client" },
  { src: "/clients/vertical logo without bg/image 353.png", alt: "Client" },
  { src: "/clients/vertical logo without bg/image 355.png", alt: "Client" },
  { src: "/clients/vertical logo without bg/image 359.png", alt: "Client" },
  { src: "/clients/vertical logo without bg/image 360.png", alt: "Client" },
  { src: "/clients/vertical logo without bg/image 362.png", alt: "Client" },
  { src: "/clients/vertical logo without bg/image 363.png", alt: "Client" },
  { src: "/clients/vertical logo without bg/image 364.png", alt: "Client" },
];

// Row 3 — Vertical logos with white background
const whiteBgLogos = [
  { src: "/clients/vertical logo with white bg/image 343.png", alt: "Client" },
  { src: "/clients/vertical logo with white bg/image 346.png", alt: "Client" },
  { src: "/clients/vertical logo with white bg/image 347.png", alt: "Client" },
  { src: "/clients/vertical logo with white bg/image 349.png", alt: "Client" },
  { src: "/clients/vertical logo with white bg/image 350.png", alt: "Client" },
  { src: "/clients/vertical logo with white bg/image 356.png", alt: "Client" },
  { src: "/clients/vertical logo with white bg/image 361.png", alt: "Client" },
  { src: "/clients/vertical logo with white bg/image 366.png", alt: "Client" },
];

/* ──── Recent projects ──── */
const recentProjects = [
  {
    title: "NIPPON PAINT PH",
    client: "Nippon Paint",
    description:
      "An improved website experience for customers by adding paint product specifications, color palettes, and enhanced features for better usability.",
    tags: ["Web App", "UI/UX", "E-Commerce"],
    color: "border-[#c60000]",
  },
  {
    title: "AJES",
    client: "AJES Corp",
    description:
      "A textile inventory management system that provides accurate inventory tracking and item-level reporting.",
    tags: ["Inventory", "Enterprise", "Full Stack"],
    color: "border-orange-400",
  },
  {
    title: "VALDEZ SECURITY",
    client: "Valdez Security",
    description:
      "A geo-tagging app that allows staff to record their daily time in and time out with location verification.",
    tags: ["Mobile", "Geolocation", "HR Tech"],
    color: "border-emerald-400",
  },
  {
    title: "OPTUM",
    client: "Optum",
    description:
      "Corporate events made more engaging through a gamification app that adds excitement and interactive experiences for participants.",
    tags: ["Gamification", "Mobile App", "Events"],
    color: "border-purple-400",
  },
  {
    title: "BNI",
    client: "Business Network International",
    description:
      "An event management app that allows participants to register, check in seamlessly during the event, and view the full program details.",
    tags: ["Event Management", "Mobile", "Registration"], 
    color: "border-teal-400",
  },
];

function CircleLogoItem({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mx-5 flex shrink-0 items-center justify-center">
      <Image
        src={src}
        alt={alt}
        width={72}
        height={72}
        className="h-16 w-16 object-contain transition-all duration-300 hover:scale-110"
        unoptimized
      />
    </div>
  );
}

function NoBgLogoItem({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mx-8 flex shrink-0 items-center justify-center">
      <Image
        src={src}
        alt={alt}
        width={120}
        height={48}
        className="h-10 w-auto object-contain transition-all duration-300 hover:scale-110"
        unoptimized
      />
    </div>
  );
}

function WhiteBgLogoItem({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mx-5 flex shrink-0 items-center justify-center rounded-xl bg-white/90 px-3 py-2 transition-all duration-300 hover:scale-110">
      <Image
        src={src}
        alt={alt}
        width={120}
        height={48}
        className="h-9 w-auto object-contain"
        unoptimized
      />
    </div>
  );
}
// Shared fade mask
const MASK = "mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]";

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
              <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-[var(--brand)]/[0.05] blur-[150px]" />
            </div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <ScrollAnimation variant="fade-up">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)] mb-4">
                    Our Clients
                  </p>
                  <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                    Trusted by organizations{" "}
                    <span className="text-muted-foreground">across industries.</span>
                  </h1>
                  <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                    From small businesses to large corporations, WT Migremo Systems, Inc. <br /> 
                    delivers software that drives real impact.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </section>
        </GridSection>

        {/* ──── Client Partners Marquee ──── */}
        <GridSection>
          <section className="relative py-16 sm:py-24 overflow-hidden">
            {/* Glow effect */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-[var(--brand)]/[0.08] blur-[100px]" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <ScrollAnimation variant="fade-up">
                <div className="mb-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)] mb-4">
                    Clients & Partners
                  </p>
                  <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                    Companies we&apos;ve worked with
                  </h2>
                </div>
              </ScrollAnimation>
            </div>

            {/* Marquee rows - Client */}
            <div className="mt-10 space-y-8">
            {/* Row 1 — Circle logos, scrolls left */}
            <ScrollAnimation variant="fade-up" delay={0.1}>
              <div className={`relative flex overflow-hidden ${MASK}`}>
                <div className="flex animate-marquee-left items-center">
                  {circleLogos.map((logo, i) => (
                    <CircleLogoItem key={`r1a-${i}`} src={logo.src} alt={logo.alt} />
                  ))}
                  {circleLogos.map((logo, i) => (
                    <CircleLogoItem key={`r1b-${i}`} src={logo.src} alt={logo.alt} />
                  ))}
                </div>
              </div>
              </ScrollAnimation>

            {/* Row 2 — No-bg vertical logos (transparent bg, need white card), scrolls right */}
            <ScrollAnimation variant="fade-up" delay={0.2}>
              <div className={`relative flex overflow-hidden ${MASK}`}>
                <div className="flex animate-marquee-right items-center">
                  {noBgLogos.map((logo, i) => (
                    <WhiteBgLogoItem key={`r2a-${i}`} src={logo.src} alt={logo.alt} />
                  ))}
                  {noBgLogos.map((logo, i) => (
                    <WhiteBgLogoItem key={`r2b-${i}`} src={logo.src} alt={logo.alt} />
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            {/* Row 3 — White-bg vertical logos (bg already baked in image), scrolls left */}
            <ScrollAnimation variant="fade-up" delay={0.3}>
              <div className={`relative flex overflow-hidden ${MASK}`}>
                <div className="flex animate-marquee-left items-center" style={{ animationDuration: "45s" }}>
                  {whiteBgLogos.map((logo, i) => (
                    <NoBgLogoItem key={`r3a-${i}`} src={logo.src} alt={logo.alt} />
                  ))}
                  {whiteBgLogos.map((logo, i) => (
                    <NoBgLogoItem key={`r3b-${i}`} src={logo.src} alt={logo.alt} />
                  ))}
                </div>
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
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)] mb-4">
                      Recent Work
                    </p>
                    <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                      5 recent projects
                    </h2>
                  </div>
                  <div className="hidden sm:flex items-center gap-2">
                    <button
                      onClick={prevSlide}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-border/80 text-muted-foreground transition-colors hover:bg-accent/60 hover:text-foreground"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-border/80 text-muted-foreground transition-colors hover:bg-accent/60 hover:text-foreground"
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
                          className={`rounded-2xl border-l-4 ${project.color} border border-border/80 bg-card/60 p-8 sm:p-10 lg:p-12`}
                        >
                          <div className="grid gap-6 lg:grid-cols-2">
                            <div>
                              <span className="text-xs font-medium text-muted-foreground/60 uppercase tracking-wider">
                                {project.client}
                              </span>
                              <h3 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
                                {project.title}
                              </h3>
                              <p className="mt-4 text-muted-foreground leading-relaxed">
                                {project.description}
                              </p>
                              <div className="mt-6 flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="rounded-full border border-border/80 bg-card/70 px-3 py-1 text-xs text-muted-foreground"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="flex items-center justify-center">
                              <div className="h-48 w-full rounded-xl bg-gradient-to-br from-accent/70 to-transparent border border-border/80 flex items-center justify-center">
                                <span className="text-sm text-foreground/20 uppercase tracking-widest">
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
                        ? "w-8 bg-[var(--brand)]"
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              {/* Mobile nav */}
              <div className="mt-6 flex items-center justify-center gap-2 sm:hidden">
                <button
                  onClick={prevSlide}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border/80 text-muted-foreground transition-colors hover:bg-accent/60"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border/80 text-muted-foreground transition-colors hover:bg-accent/60"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <GridLine className="mt-12" />

              <ScrollAnimation variant="zoom-in" delay={0.1}>
                <div className="mt-12 text-center">
                  <Link href="/contact">
                    <Button className="bg-[var(--brand)] text-[var(--brand-foreground)] hover:bg-[var(--brand-hover)] gap-2 shadow-lg shadow-red-500/20">
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
