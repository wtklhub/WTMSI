"use client";

import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { GridLine } from "./grid-background";
import { ParticlesBackground } from "./particles-background";
import gsap from "gsap";
import Link from "next/link";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
        delay: 0.3,
      });

      // Company name — letter-by-letter reveal
      tl.fromTo(
        ".hero-company-letter",
        { opacity: 0, y: 80, rotateX: -90 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.03,
          ease: "back.out(1.7)",
        }
      )
        // Red line sweep
        .fromTo(
          ".hero-line",
          { scaleX: 0 },
          { scaleX: 1, duration: 0.8, ease: "power3.inOut" },
          "-=0.3"
        )
        // Tagline words
        .fromTo(
          ".hero-tagline-word",
          { opacity: 0, y: 50, scale: 0.8 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.4"
        )
        // Description text
        .fromTo(
          ".hero-desc",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.3"
        )
        // CTA buttons
        .fromTo(
          ".hero-cta-btn",
          { opacity: 0, y: 20, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.12,
          },
          "-=0.3"
        )
        // Stats
        .fromTo(
          ".hero-stats",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.2"
        )
        // Social proof
        .fromTo(
          ".hero-proof",
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          "-=0.1"
        );

      // Floating glow animation
      gsap.to(".hero-glow-1", {
        y: -20,
        x: 10,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".hero-glow-2", {
        y: 15,
        x: -15,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, el);

    return () => ctx.revert();
  }, []);

  const companyNameLine1 = "WT MIGREMO";
  const companyNameLine2 = "SYSTEMS, INC.";

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden min-h-[100vh] flex items-center"
    >
      {/* Particles background */}
      <ParticlesBackground />

      {/* Animated gradient blobs */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div className="hero-glow-1 absolute left-1/2 top-0 -translate-x-1/2 h-[700px] w-[1000px] rounded-full bg-[#c60000]/[0.08] blur-[180px]" />
        <div className="hero-glow-2 absolute right-1/4 top-1/3 h-[400px] w-[500px] rounded-full bg-red-500/[0.05] blur-[120px]" />
        <div className="absolute left-1/4 bottom-1/4 h-[300px] w-[400px] rounded-full bg-[#c60000]/[0.04] blur-[100px]" />
      </div>

      <div className="relative z-[2] mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
        {/* Main hero content */}
        <div className="text-center">
          {/* Company name — large bold, letter-by-letter animated */}
          <h1 className="mx-auto max-w-6xl" style={{ perspective: "800px" }}>
            <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter text-white leading-[0.9] uppercase">
              {companyNameLine1.split("").map((letter, i) => (
                <span
                  key={i}
                  className="hero-company-letter inline-block opacity-0"
                  style={{
                    display: letter === " " ? "inline" : "inline-block",
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </span>
            <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter text-white leading-[0.9] uppercase">
              {companyNameLine2.split("").map((letter, i) => (
                <span
                  key={`line2-${i}`}
                  className="hero-company-letter inline-block opacity-0"
                  style={{
                    display: letter === " " ? "inline" : "inline-block",
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </span>
          </h1>

          {/* Red accent line */}
          <div className="hero-line mx-auto mt-6 h-1.5 w-32 sm:w-48 bg-gradient-to-r from-[#c60000] to-[#ff3333] rounded-full origin-left scale-x-0" />

          {/* Tagline — word-by-word animated */}
          <h2 className="mt-6 sm:mt-8">
            {"YOUR VISION, OUR CODE".split(" ").map((word, i) => (
              <span
                key={i}
                className="hero-tagline-word inline-block text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight opacity-0 mx-1 sm:mx-2"
              >
                <span
                  className={
                    word === "VISION," || word === "CODE"
                      ? "bg-gradient-to-r from-[#c60000] via-[#ff3333] to-[#c60000] bg-clip-text text-transparent"
                      : "text-[#F1F4F9]"
                  }
                >
                  {word}
                </span>
              </span>
            ))}
          </h2>

          {/* Description */}
          <p className="hero-desc mx-auto mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-[#c7c8bd] opacity-0">
            Software solutions built for real businesses.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 sm:mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/contact">
            <Button
              size="lg"
              className="hero-cta-btn bg-[#c60000] px-8 text-white hover:bg-[#a50000] gap-2 shadow-lg shadow-[#c60000]/25 text-base opacity-0"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/products">
            <Button
              size="lg"
              variant="outline"
              className="hero-cta-btn border-[#c7c8bd]/30 bg-transparent px-8 text-[#F1F4F9] hover:bg-white/10 hover:text-white text-base opacity-0"
            >
              View Our Products
            </Button>
          </Link>
        </div>

        {/* Stats bar */}
        <div className="hero-stats opacity-0 mt-16 sm:mt-20">
          <GridLine />
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {[
              { value: "15+", label: "Years Experience" },
              { value: "200+", label: "Projects Delivered" },
              { value: "50+", label: "Enterprise Clients" },
              { value: "4", label: "Core Specializations" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center py-6 sm:py-10 ${
                  i % 2 === 0 ? "border-r border-white/[0.08]" : ""
                } sm:border-r sm:border-white/[0.08] sm:last:border-r-0 ${
                  i < 2 ? "border-b border-b-white/[0.08] sm:border-b-0" : ""
                }`}
              >
                <p className="text-2xl font-bold text-[#c60000] sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[10px] sm:text-xs text-[#c7c8bd] uppercase tracking-wider text-center">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <GridLine />
        </div>

        {/* Social proof */}
        <div className="hero-proof mt-12 text-center opacity-0">
          <p className="text-sm text-[#c7c8bd]">
            Trusted by{" "}
            <span className="text-[#F1F4F9]">government agencies</span>,{" "}
            <span className="text-[#F1F4F9]">enterprises</span>, and{" "}
            <span className="text-[#F1F4F9]">startups</span> across the
            Philippines
          </p>
        </div>
      </div>
    </section>
  );
}
