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
    description: "Website Development, Web App Development, Digital Branding, Web Hosting, Internet Security.",
    color: "text-[#c60000]",
  },
  {
    icon: Layers,
    title: "Full Stack Development",
    description:
      "PHP (Core PHP, Laravel, CodeIgniter), Microsoft (Visual Studio, .NET, C#, VB), Full stack Mean (MongoDb, Express, Angular, Node.js).",
    color: "text-orange-400",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Android, Swift/IO, Kotlin, Xamarin, Flutter.",
    color: "text-emerald-400",
  }
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
                development company providing software solutions for businesses
                and organizations. We build scalable web and mobile
                applications, SaaS products, and business systems designed to
                streamline operations, improve efficiency, and support digital
                transformation.
              </p>
              <p className="mt-4 text-base text-[#c7c8bd] leading-relaxed">
                More than just developers, we serve as technology
                partners—working closely with clients to understand their
                processes and deliver solutions that truly fit their needs.
                Through our digital marketing arm,{" "}
                <span className="text-[#F1F4F9] font-medium">
                  Social Leverage Creates
                </span>
                , we also offer branding, content creation, and marketing
                support, giving organizations end-to-end capabilities to grow
                and thrive in the digital space.
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
              {/* Phone Mockup */}
              <div className="mt-8 flex items-center justify-center">
                <div className="relative mx-auto w-[200px]">
                  {/* Phone frame */}
                  <div className="relative rounded-[2rem] border-[3px] border-white/20 bg-black p-2 shadow-2xl shadow-[#c60000]/10">
                    {/* Notch */}
                    <div className="absolute left-1/2 top-0 z-10 h-5 w-20 -translate-x-1/2 rounded-b-2xl bg-black" />
                    {/* Screen */}
                    <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-b from-[#1a1a2e] to-[#16213e]">
                      <img
                        src="/watatrip.png"
                        alt="Watatrip App Interface"
                        className="h-[360px] w-full object-cover object-top"
                      />
                    </div>
                    {/* Home indicator */}
                    <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-white/20" />
                  </div>
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
