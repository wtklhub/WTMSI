"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Code2,
  Globe,
  Smartphone,
  Brain,
  Layers,
  ShieldCheck,
} from "lucide-react";
import { GridLine } from "./grid-background";
import { ScrollAnimation } from "./scroll-animations";
import Link from "next/link";

const expertiseAreas = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive websites and full-scale web applications.",
    color: "text-[#c60000]",
  },
  {
    icon: Layers,
    title: "Full Stack Engineering",
    description:
      "PHP (Laravel, CodeIgniter), .NET, MEAN stack — end-to-end.",
    color: "text-orange-400",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native (Android/iOS) and cross-platform (Flutter, React Native).",
    color: "text-emerald-400",
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    description:
      "Computer vision, intelligent GIS, and machine-learning integrations.",
    color: "text-purple-400",
  },
  {
    icon: Code2,
    title: "SaaS Products",
    description:
      "Inventory, Help Desk, Booking, and Events Management platforms.",
    color: "text-blue-400",
  },
  {
    icon: ShieldCheck,
    title: "Digital Services",
    description:
      "Social media management, branding, content, and digital marketing.",
    color: "text-pink-400",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-16 sm:py-24">
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-[400px] w-[600px] rounded-full bg-[#c60000]/[0.03] blur-[140px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* About content */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left — text */}
          <ScrollAnimation variant="fade-right">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c60000] mb-4">
                About WTMSI
              </p>
              <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight">
                Building software
                <br />
                <span className="text-[#c7c8bd]">
                  for real businesses since 2009.
                </span>
              </h2>
              <p className="mt-6 text-base text-[#c7c8bd] leading-relaxed">
                WT Migremo Systems, Inc. is a Philippine-based software
                development company that creates tailored digital solutions for
                businesses, government agencies, and startups. We go beyond just
                code — we partner with our clients to understand their
                operations and deliver systems that truly work.
              </p>
              <p className="mt-4 text-base text-[#c7c8bd] leading-relaxed">
                From custom web and mobile applications to our own SaaS products
                and digital marketing arm,{" "}
                <span className="text-[#F1F4F9] font-medium">
                  Social Leverage Creates
                </span>
                , we offer end-to-end capabilities for organizations of every
                size.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact">
                  <Button className="bg-[#c60000] text-white hover:bg-[#a50000] gap-2 shadow-lg shadow-[#c60000]/20">
                    Work With Us
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/products">
                  <Button
                    variant="outline"
                    className="border-white/20 text-[#c60000]! hover:bg-white/10 hover:text-white!"
                  >
                    See Our Products
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollAnimation>

          {/* Right — Watatrip spotlight card */}
          <ScrollAnimation variant="fade-left">
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 sm:p-10">
              <span className="inline-block rounded-full bg-[#c60000]/10 border border-[#c60000]/20 px-3 py-1 text-xs font-medium text-[#c60000] mb-6">
                Featured Product
              </span>
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Watatrip
              </h3>
              <p className="mt-3 text-[#c7c8bd] leading-relaxed">
                Our flagship travel platform — designed to be the go-to app to
                discover the rich culture, places, and events across the
                Philippines and soon, Southeast Asia.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <a
                  href="https://www.watatrip.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#c60000] hover:text-[#a50000] transition-colors"
                >
                  Visit Watatrip
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
              {/* Decorative */}
              <div className="mt-8 flex items-center justify-center">
                <div className="relative h-32 w-full max-w-xs rounded-xl bg-gradient-to-br from-[#c60000]/20 via-orange-500/10 to-transparent border border-white/[0.08] flex items-center justify-center">
                  <span className="text-5xl font-black text-white/10 tracking-tight">
                    WATATRIP
                  </span>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Expertise subsection */}
        <div className="mt-20 sm:mt-28">
          <GridLine className="mb-12" />
          <ScrollAnimation variant="fade-up">
            <div className="mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c60000] mb-4">
                Our Expertise
              </p>
              <h3 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                Full-spectrum digital capabilities.
              </h3>
            </div>
          </ScrollAnimation>

          <ScrollAnimation variant="stagger-children" staggerAmount={0.1}>
            <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3 bg-white/[0.08] rounded-xl overflow-hidden">
              {expertiseAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <div
                    key={area.title}
                    className="bg-[#282828] p-6 sm:p-8 transition-colors hover:bg-white/[0.02]"
                  >
                    <Icon className={`h-7 w-7 ${area.color} mb-4`} />
                    <h4 className="text-base font-bold text-white mb-2">
                      {area.title}
                    </h4>
                    <p className="text-sm text-[#c7c8bd] leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </ScrollAnimation>
          <GridLine className="mt-12" />
        </div>
      </div>
    </section>
  );
}
