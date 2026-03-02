"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code2, Rocket } from "lucide-react";
import { GridLine } from "./grid-background";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-20">
      {/* Background gradient effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[700px] w-[1000px] rounded-full bg-[#ee2312]/[0.06] blur-[150px]" />
        <div className="absolute right-1/4 top-1/4 h-[300px] w-[400px] rounded-full bg-red-500/[0.04] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center">
          <Badge
            variant="outline"
            className="border-[#ee2312]/20 bg-[#ee2312]/5 text-red-200 backdrop-blur-sm gap-2 px-4 py-1.5"
          >
            <Code2 className="h-3.5 w-3.5 text-[#ee2312]" />
            15+ Years of Software Excellence
          </Badge>
        </div>

        {/* Headline */}
        <div className="mt-8 text-center">
          <h1 className="mx-auto max-w-5xl text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1]">
            Software Solutions:{" "}
            <span className="bg-gradient-to-r from-[#ee2312] via-red-400 to-orange-400 bg-clip-text text-transparent">
              Your Vision,
            </span>{" "}
            Our Code
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base text-neutral-400 sm:text-xl">
            We are WT Migremo Systems Inc., a software development company that
            specializes in web development, web applications, and mobile
            solutions. We don&apos;t just create applications — we ensure our tools
            resolve your problems and add value to your processes.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="bg-[#ee2312] px-8 text-white hover:bg-[#d41f10] gap-2 shadow-lg shadow-[#ee2312]/25"
          >
            Start Your Project
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-neutral-700 bg-transparent px-8 text-neutral-300 hover:bg-neutral-900 hover:text-white"
          >
            View Our Work
          </Button>
        </div>

        {/* Stats bar */}
        <GridLine className="mt-16 sm:mt-20" />
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
              <p className="text-2xl font-bold text-[#ee2312] sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-[10px] sm:text-xs text-neutral-500 uppercase tracking-wider text-center">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <GridLine />

        {/* Social proof */}
        <div className="mt-12 text-center">
          <p className="text-sm text-neutral-500">
            Trusted by{" "}
            <span className="text-neutral-300">government agencies</span>,{" "}
            <span className="text-neutral-300">enterprises</span>, and{" "}
            <span className="text-neutral-300">startups</span> across the
            Philippines
          </p>
        </div>
      </div>
    </section>
  );
}
