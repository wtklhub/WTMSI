"use client";

import { Button } from "@/components/ui/button";
import {
  Globe,
  Layers,
  Smartphone,
  Brain,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { GridLine } from "./grid-background";

const services = [
  {
    icon: Globe,
    badge: "WEB DEVELOPMENT",
    color: "text-[#ee2312]",
    badgeBg: "bg-[#ee2312]/10 border-[#ee2312]/20",
    title: "Beautiful, performant websites",
    subtitle: "that drive results",
    description:
      "From marketing sites to complex web applications, we build digital experiences that engage your audience and grow your business.",
    capabilities: [
      "Website Development",
      "Web App Development",
      "Digital Branding",
      "Web Hosting",
      "Internet Security",
    ],
  },
  {
    icon: Layers,
    badge: "FULL STACK DEVELOPMENT",
    color: "text-orange-400",
    badgeBg: "bg-orange-500/10 border-orange-500/20",
    title: "End-to-end engineering",
    subtitle: "across modern stacks",
    description:
      "Our full-stack engineers work across PHP (Laravel, CodeIgniter), Microsoft (.NET, C#), and the MEAN stack to deliver robust, scalable systems.",
    capabilities: [
      "PHP – Laravel, CodeIgniter",
      "Microsoft – .NET, C#, VB",
      "MEAN Stack – MongoDB, Express, Angular, Node",
      "REST API Design",
      "Database Architecture",
    ],
  },
  {
    icon: Smartphone,
    badge: "MOBILE APP DEVELOPMENT",
    color: "text-emerald-400",
    badgeBg: "bg-emerald-500/10 border-emerald-500/20",
    title: "Native & cross-platform",
    subtitle: "mobile experiences",
    description:
      "We build mobile apps that users love — whether native Android/iOS or cross-platform with Flutter and Xamarin.",
    capabilities: [
      "Android (Java / Kotlin)",
      "iOS (Swift)",
      "Flutter",
      "Xamarin",
      "React Native",
    ],
  },
  {
    icon: Brain,
    badge: "ARTIFICIAL INTELLIGENCE",
    color: "text-purple-400",
    badgeBg: "bg-purple-500/10 border-purple-500/20",
    title: "Intelligent systems",
    subtitle: "that learn and adapt",
    description:
      "We integrate AI and machine learning into your products — from computer vision to intelligent geographic information systems.",
    capabilities: [
      "Video Analytics",
      "Intelligent GIS",
      "Computer Vision",
      "Machine Learning",
      "Predictive Modeling",
    ],
  },
];

export function ProductSections() {
  return (
    <section id="services" className="relative py-16 sm:py-24">
      {/* Section glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-[#ee2312]/[0.03] blur-[150px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 sm:mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ee2312] mb-4">
            Our Capabilities
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Needs-based software design
            <br />
            <span className="text-neutral-500">and development services.</span>
          </h2>
        </div>

        {/* Services — 2-column grid with inner lines */}
        <div className="grid md:grid-cols-2">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={service.badge}
                className={`relative p-6 sm:p-10 ${
                  idx % 2 === 0 ? "md:border-r md:border-white/[0.08]" : ""
                } ${
                  idx < services.length - 1
                    ? "border-b border-white/[0.08] md:border-b-0"
                    : ""
                } ${idx < 2 ? "md:border-b md:border-white/[0.08]" : ""}`}
              >
                {/* Badge */}
                <div className="flex items-center gap-2 mb-6">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold tracking-wider ${service.badgeBg} ${service.color}`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  {service.title}
                  <br />
                  <span className="text-neutral-500">{service.subtitle}</span>
                </h3>

                <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Capabilities */}
                <div className="mt-6 space-y-2.5">
                  {service.capabilities.map((cap) => (
                    <div key={cap} className="flex items-center gap-2.5">
                      <CheckCircle2
                        className={`h-3.5 w-3.5 flex-shrink-0 ${service.color}`}
                      />
                      <span className="text-sm text-neutral-300">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <GridLine />

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Button className="bg-[#ee2312] text-white hover:bg-[#d41f10] gap-2 shadow-lg shadow-[#ee2312]/20">
            Discuss Your Project
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
