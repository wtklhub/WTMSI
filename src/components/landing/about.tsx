"use client";

import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Smartphone, Layers } from "lucide-react";
import { GridLine } from "./grid-background";
import { ScrollAnimation } from "./scroll-animations";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  siHtml5,
  siCss,
  siJavascript,
  siTypescript,
  siReact,
  siNextdotjs,
  siTailwindcss,
  siWordpress,
  siPhp,
  siLaravel,
  siCodeigniter,
  siDotnet,
  siNodedotjs,
  siExpress,
  siAngular,
  siMongodb,
  siMysql,
  siAndroid,
  siSwift,
  siKotlin,
  siFlutter,
  siIos,
} from "simple-icons";

gsap.registerPlugin(ScrollTrigger);

interface TechItem {
  si: { path: string; hex: string; title: string };
  name?: string;
  overrideHex?: string;
  /** Use currentColor so Tailwind dark-mode classes drive the fill instead of a static hex */
  adaptiveColor?: boolean;
}

interface ExpertiseArea {
  Icon: React.FC<{ className?: string }>;
  title: string;
  subtitle: string;
  accentClass: string;
  iconBgClass: string;
  iconColorClass: string;
  glowClass: string;
  techs: TechItem[];
}

const expertiseAreas: ExpertiseArea[] = [
  {
    Icon: Globe,
    title: "Web Development",
    subtitle: "End-to-end web experiences — from design to deployment",
    accentClass: "bg-[var(--brand)]",
    iconBgClass: "bg-[var(--brand)]/10",
    iconColorClass: "text-[var(--brand)]",
    glowClass: "bg-[var(--brand)]",
    techs: [
      { si: siHtml5, name: "HTML5" },
      { si: siCss, name: "CSS3" },
      { si: siJavascript, name: "JavaScript" },
      { si: siTypescript, name: "TypeScript" },
      { si: siReact, name: "React" },
      { si: siNextdotjs, name: "Next.js", adaptiveColor: true },
      { si: siTailwindcss, name: "Tailwind" },
      { si: siWordpress, name: "WordPress" },
    ],
  },
  {
    Icon: Layers,
    title: "Full Stack Development",
    subtitle: "Scalable systems from database layer to polished UI",
    accentClass: "bg-orange-400",
    iconBgClass: "bg-orange-400/10",
    iconColorClass: "text-orange-400",
    glowClass: "bg-orange-400",
    techs: [
      { si: siPhp, name: "PHP" },
      { si: siLaravel, name: "Laravel" },
      { si: siCodeigniter, name: "CodeIgniter" },
      { si: siDotnet, name: ".NET" },
      { si: siNodedotjs, name: "Node.js" },
      { si: siExpress, name: "Express", adaptiveColor: true },
      { si: siAngular, name: "Angular", overrideHex: "DD0031" },
      { si: siMongodb, name: "MongoDB" },
      { si: siMysql, name: "MySQL" },
    ],
  },
  {
    Icon: Smartphone,
    title: "Mobile Development",
    subtitle: "Native & cross-platform apps for any device or OS",
    accentClass: "bg-emerald-400",
    iconBgClass: "bg-emerald-400/10",
    iconColorClass: "text-emerald-400",
    glowClass: "bg-emerald-400",
    techs: [
      { si: siAndroid, name: "Android" },
      { si: siIos, name: "iOS", adaptiveColor: true },
      { si: siSwift, name: "Swift" },
      { si: siKotlin, name: "Kotlin" },
      { si: siFlutter, name: "Flutter" },
      { si: siReact, name: "React Native" },
    ],
  },
];

export function AboutSection() {
  const expertiseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = expertiseRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      // Cards slide + fade in with stagger
      gsap.fromTo(
        ".expertise-card",
        { opacity: 0, y: 64, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            once: true,
          },
        }
      );

      // Tech badges pop in after cards appear
      gsap.fromTo(
        ".tech-badge",
        { opacity: 0, scale: 0.4, y: 8 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.35,
          stagger: 0.022,
          ease: "back.out(2)",
          delay: 0.5,
          scrollTrigger: {
            trigger: el,
            start: "top 78%",
            once: true,
          },
        }
      );

      // Subtle float on category icons
      gsap.to(".expertise-cat-icon", {
        y: -6,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.7,
      });
    }, el);

    // Hover lift effect
    const cards = Array.from(el.querySelectorAll(".expertise-card"));
    const cleanups: (() => void)[] = [];
    cards.forEach((card) => {
      const enter = () => gsap.to(card, { y: -10, duration: 0.25, ease: "power2.out" });
      const leave = () => gsap.to(card, { y: 0, duration: 0.3, ease: "power2.out" });
      card.addEventListener("mouseenter", enter);
      card.addEventListener("mouseleave", leave);
      cleanups.push(() => {
        card.removeEventListener("mouseenter", enter);
        card.removeEventListener("mouseleave", leave);
      });
    });

    return () => {
      ctx.revert();
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <section id="about" className="relative py-16 sm:py-24">
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-[400px] w-[600px] rounded-full bg-[var(--brand)]/[0.03] blur-[140px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* About content */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left — text */}
          <ScrollAnimation variant="fade-right">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)] mb-4">
                About WTMSI
              </p>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl leading-tight">
                Building software
                <br />
                <span className="text-muted-foreground">
                  for real businesses since 2009.
                </span>
              </h2>
              <p className="mt-6 text-base text-muted-foreground leading-relaxed">
                WT Migremo Systems, Inc. is a Philippine-based software
                development company providing software solutions for businesses
                and organizations. We build scalable web and mobile
                applications, SaaS products, and business systems designed to
                streamline operations, improve efficiency, and support digital
                transformation.
              </p>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                More than just developers, we serve as technology
                partners—working closely with clients to understand their
                processes and deliver solutions that truly fit their needs.
                Through our digital marketing arm,{" "}
                <span className="text-foreground font-medium">
                  Social Leverage Creates
                </span>
                , we also offer branding, content creation, and marketing
                support, giving organizations end-to-end capabilities to grow
                and thrive in the digital space.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact">
                  <Button className="bg-[var(--brand)] text-[var(--brand-foreground)] hover:bg-[var(--brand-hover)] gap-2 shadow-lg shadow-red-500/20">
                    Work With Us
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/products">
                  <Button
                    variant="outline"
                    className="border-border/70 !text-[var(--brand)] hover:bg-accent/60 hover:text-foreground"
                  >
                    See Our Products
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollAnimation>

          {/* Right — Watatrip spotlight card */}
          <ScrollAnimation variant="fade-left">
            <div className="rounded-2xl border border-border/80 bg-card/40 p-8 sm:p-10">
              <span className="inline-block rounded-full bg-[var(--brand)]/20 border border-[var(--brand)]/20 px-3 py-1 text-xs font-medium text-[var(--brand)] mb-6">
                Featured Product
              </span>
              <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
                Watatrip
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Our flagship travel platform — designed to be the go-to app to
                discover the rich culture, places, and events across the
                Philippines and soon, Southeast Asia.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <a
                  href="https://www.watatrip.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--brand)] hover:text-[var(--brand-hover)] transition-colors"
                >
                  Visit Watatrip
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
              {/* Phone Mockup */}
              <div className="mt-8 flex items-center justify-center">
                <div className="relative mx-auto w-[200px]">
                  {/* Phone frame */}
                  <div className="relative rounded-[2rem] border-[3px] border-zinc-800/90 bg-black p-2 shadow-2xl shadow-[#c60000]/10">
                    {/* Notch */}
                    <div className="absolute left-1/2 top-0 z-10 h-5 w-20 -translate-x-1/2 rounded-b-2xl bg-black" />
                    {/* Screen */}
                    <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-b from-[#1a1a2e] to-[#16213e]">
                      <img
                        src="/watatrip-app.png"
                        alt="Watatrip App Interface"
                        className="h-[360px] w-full object-cover object-top"
                      />
                    </div>
                    {/* Home indicator */}
                    <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-muted/60" />
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Expertise subsection */}
        <div ref={expertiseRef} className="mt-20 sm:mt-28">
          <GridLine className="mb-12" />

          {/* Section header */}
          <ScrollAnimation variant="fade-up">
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)] mb-4">
                Our Expertise
              </p>
              <h3 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
                Full-spectrum digital capabilities.
              </h3>
              <p className="mt-3 text-sm text-muted-foreground max-w-2xl">
                Covering the full development lifecycle — from pixel-perfect web UIs to enterprise
                backends and cross-platform mobile experiences.
              </p>
            </div>
          </ScrollAnimation>

          {/* Expertise cards */}
          <div className="grid gap-6 lg:grid-cols-3">
            {expertiseAreas.map((area) => {
              const CategoryIcon = area.Icon;
              return (
                <div
                  key={area.title}
                  className="expertise-card group relative rounded-2xl border border-border/60 bg-card/50 p-6 sm:p-8 overflow-hidden opacity-0"
                >
                  {/* Top accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-0.5 ${area.accentClass}`} />

                  {/* Hover glow */}
                  <div
                    className={`pointer-events-none absolute -top-28 -right-28 h-56 w-56 rounded-full ${area.glowClass}/15 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                  />

                  {/* Category icon */}
                  <div
                    className={`expertise-cat-icon inline-flex items-center justify-center w-12 h-12 rounded-xl ${area.iconBgClass} mb-5`}
                  >
                    <CategoryIcon className={`h-6 w-6 ${area.iconColorClass}`} />
                  </div>

                  {/* Title & subtitle */}
                  <h4 className="text-base font-bold text-foreground mb-1">{area.title}</h4>
                  <p className="text-xs text-muted-foreground mb-5 leading-relaxed">{area.subtitle}</p>

                  {/* Divider */}
                  <div className="h-px bg-border/60 mb-5" />

                  {/* Tech icon grid */}
                  <div className="flex flex-wrap gap-1.5">
                    {area.techs.map((tech) => {
                      const hexColor = tech.overrideHex ?? tech.si.hex;
                      const label = tech.name ?? tech.si.title;
                      return (
                        <div
                          key={label}
                          title={label}
                          className="tech-badge flex flex-col items-center gap-1 p-2 rounded-xl cursor-default opacity-0 transition-all duration-200 hover:bg-accent/60"
                        >
                          <div
                            className={tech.adaptiveColor
                              ? "w-9 h-9 rounded-xl flex items-center justify-center bg-zinc-200 dark:bg-zinc-700"
                              : "w-9 h-9 rounded-xl flex items-center justify-center"}
                            style={tech.adaptiveColor ? undefined : { backgroundColor: `#${hexColor}1A` }}
                          >
                            <svg
                              role="img"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-label={label}
                              width={20}
                              height={20}
                              className={tech.adaptiveColor ? "text-zinc-900 dark:text-white" : undefined}
                              style={tech.adaptiveColor ? { fill: "currentColor" } : { fill: `#${hexColor}` }}
                            >
                              <path d={tech.si.path} />
                            </svg>
                          </div>
                          <span
                            className="text-[9px] font-medium text-muted-foreground text-center leading-tight"
                            style={{ maxWidth: 52 }}
                          >
                            {label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <GridLine className="mt-12" />
        </div>
      </div>
    </section>
  );
}
