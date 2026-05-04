"use client";

import Image from "next/image";
import { GridLine } from "./grid-background";
import { ScrollAnimation } from "./scroll-animations";

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
  { src: "/clients/circle logo/valdez.png", alt: "Client" },
  { src: "/clients/circle logo/ajes logo 1.png", alt: "Client" },
  { src: "/clients/circle logo/LANDEV LOGO FINAL 1.png", alt: "Client" },
  { src: "/clients/circle logo/logo 1.png", alt: "Client" },
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
  { src: "/clients/vertical logo with white bg/autohub.png", alt: "Client" },
  { src: "/clients/vertical logo with white bg/nippon.png", alt: "Client" },
];

// Shared fade mask
const MASK = "mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]";

function CircleLogoItem({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mx-5 flex shrink-0 items-center justify-center">
      <Image
        src={src}
        alt={alt}
        width={72}
        height={72}
        className="h-16 w-16 object-contain brightness-90 grayscale opacity-80 transition-all duration-300 hover:brightness-100 hover:grayscale-0 hover:opacity-100"
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
        className="h-10 w-auto object-contain brightness-150 grayscale opacity-75 transition-all duration-300 hover:brightness-100 hover:grayscale-0 hover:opacity-100"
        unoptimized
      />
    </div>
  );
}

function WhiteBgLogoItem({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mx-5 flex shrink-0 items-center justify-center rounded-xl bg-white/90 px-3 py-2 grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100">
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

export function PartnersSection() {
  return (
    <section id="partners" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-75 w-175 rounded-full bg-[var(--brand)]/3 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollAnimation variant="fade-up">
          <div className="mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)] mb-4">
              Partners &amp; Collaborators
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Trusted by organizations{" "}
              <span className="text-muted-foreground">across industries.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground">
              We work alongside government agencies, private enterprises, and
              startups to deliver software that drives real impact.
            </p>
          </div>
        </ScrollAnimation>
      </div>

      <GridLine />

      {/* Marquee rows */}
      <div className="mt-10 space-y-8">
        {/* Row 1 — Circle logos, scrolls left */}
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

        {/* Row 2 — No-bg vertical logos (transparent bg, need white card), scrolls right */}
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

        {/* Row 3 — White-bg vertical logos (bg already baked in image), scrolls left */}
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
      </div>

      <GridLine className="mt-10" />

      {/* Bottom note */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimation variant="fade-up" delay={0.2}>
          <div className="mt-10 text-center">
            <p className="text-sm text-muted-foreground">
              And many more government agencies, enterprises, and startups
              throughout the Philippines and Southeast Asia.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
