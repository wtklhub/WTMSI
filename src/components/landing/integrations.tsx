"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Search,
  Users,
  Rocket,
} from "lucide-react";
import { GridLine } from "./grid-background";
import { ScrollAnimation } from "./scroll-animations";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Analyze",
    description:
      "We ask the right questions and help analyze your current business processes. We drill down to the very root of the problem and present you with solutions that address them. We make sure to tailor-fit the application according to your needs.",
    color: "text-[#c60000]",
    accentBg: "bg-[#c60000]/10 border-[#c60000]/20",
  },
  {
    number: "02",
    icon: Users,
    title: "Collaborate",
    description:
      "Our business analysts, product managers, and project managers work closely with you and our expert team of developers to ensure that your requirements are of utmost priority. Our team turns your concept into working solutions.",
    color: "text-orange-400",
    accentBg: "bg-orange-500/10 border-orange-500/20",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Deliver",
    description:
      "Before implementation, we ensure that user testing is done on the system and get validation of all required functionalities. We also implement the proper knowledge transfer to system managers and end-users.",
    color: "text-emerald-400",
    accentBg: "bg-emerald-500/10 border-emerald-500/20",
  },
];

export function IntegrationsSection() {
  return (
    <section id="process" className="relative py-16 sm:py-24">
      {/* Section glow */}
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-[350px] w-[500px] rounded-full bg-[#c60000]/[0.03] blur-[130px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollAnimation variant="fade-up">
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c60000] mb-4">
              How We Work
            </p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              A proven process
              <br />
              <span className="text-[#c7c8bd/80]">from concept to launch.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-base text-[#c7c8bd]">
              We consult with you every step of the way to ensure the software we
              build actually resolves your problems and adds value to your
              processes.
            </p>
          </div>
        </ScrollAnimation>

        {/* Steps — horizontal with inner grid lines */}
        <ScrollAnimation variant="stagger-children" staggerAmount={0.25}>
          <div className="grid md:grid-cols-3">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className={`relative p-6 sm:p-10 ${
                  idx < steps.length - 1
                    ? "border-b border-white/[0.08] md:border-b-0 md:border-r md:border-white/[0.08]"
                    : ""
                }`}
              >
                {/* Step number */}
                <span className={`text-5xl font-bold ${step.color} opacity-20`}>
                  {step.number}
                </span>

                <div
                  className={`mt-4 flex h-12 w-12 items-center justify-center rounded-xl border ${step.accentBg}`}
                >
                  <Icon className={`h-6 w-6 ${step.color}`} />
                </div>

                <h3 className="mt-5 text-xl font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-[#c7c8bd] leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
          </div>
        </ScrollAnimation>
        <GridLine />

        {/* Bottom CTA */}
        <ScrollAnimation variant="fade-up" delay={0.1}>
          <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to get started?
          </h3>
          <p className="mt-3 text-[#c7c8bd]">
            Let&apos;s discuss how we can bring your vision to life.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Button className="bg-[#c60000] text-white hover:bg-[#a50000] gap-2 shadow-lg shadow-[#c60000]/20">
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="border-[#c7c8bd]/30 bg-transparent text-[#F1F4F9] hover:bg-white/10 hover:text-white"
            >
              Schedule a Call
            </Button>
          </div>
        </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
