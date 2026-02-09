import {
  ShoppingCart,
  Building2,
  Landmark,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { GridLine } from "./grid-background";

const industries = [
  {
    icon: ShoppingCart,
    title: "e-Commerce / Retail",
    description:
      "We deliver integrated solutions for both e-commerce and retail businesses — from inventory management to checkout experiences.",
    color: "text-[#ee2312]",
    bg: "border-white/[0.08]",
  },
  {
    icon: Building2,
    title: "Enterprise",
    description:
      "We build business solutions that improve processes with focus on speed, efficiency, and data-driven decision making.",
    color: "text-orange-400",
    bg: "border-white/[0.08]",
  },
  {
    icon: Landmark,
    title: "Government",
    description:
      "We have been partnering with government agencies for software that helps serve the citizens more effectively.",
    color: "text-emerald-400",
    bg: "border-white/[0.08]",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "We create platforms that enable a seamless experience for both educators and students, from LMS to enrollment systems.",
    color: "text-purple-400",
    bg: "border-white/[0.08]",
  },
];

export function UseCasesSection() {
  return (
    <section id="industries" className="relative py-16 sm:py-24">
      {/* Section glow */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-[300px] w-[500px] rounded-full bg-[#ee2312]/[0.03] blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ee2312] mb-4">
            Industries We Serve
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Solutions tailored to
            <br />
            <span className="text-neutral-500">your industry.</span>
          </h2>
        </div>

        {/* Industry cards — grid with inner lines */}
        <div className="grid sm:grid-cols-2">
          {industries.map((industry, idx) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.title}
                className={`group relative p-6 sm:p-10 transition-colors hover:bg-white/[0.02] ${
                  idx % 2 === 0 ? "sm:border-r sm:border-white/[0.08]" : ""
                } ${
                  idx < industries.length - 1
                    ? "border-b border-white/[0.08] sm:border-b-0"
                    : ""
                } ${idx < 2 ? "sm:border-b sm:border-white/[0.08]" : ""}`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.04] border border-white/[0.08] mb-5`}
                >
                  <Icon className={`h-6 w-6 ${industry.color}`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {industry.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {industry.description}
                </p>
                <div className="mt-4">
                  <ArrowRight
                    className={`h-4 w-4 ${industry.color} opacity-0 transition-opacity group-hover:opacity-100`}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <GridLine />
      </div>
    </section>
  );
}
