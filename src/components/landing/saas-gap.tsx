"use client";

import { Quote } from "lucide-react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ParticlesBackground } from "./particles-background";

const industryStats = [
  {
    value: "99.5%",
    label: (
      <>
        businesses are <span className="font-bold">MSMEs</span>
      </>
    ),
  },
  {
    value: "86%",
    label: (
      <>
        SMEs say digital technology is essential{" "}
        <span className="font-bold">
          but cost and complexity remain major barriers
        </span>
      </>
    ),
  },
  {
    value: "10%",
    label: (
      <>
        <span className="font-bold">are digitally advanced</span>
      </>
    ),
  },
];

function DottedTriangle() {
  const dot =
    "w-1.5 h-1.5 rounded-full bg-gray-500 dark:bg-gray-300 opacity-70";

  return (
    <div className="flex flex-col items-start gap-1 leading-none">
      <div className="flex gap-2">
        <span className={dot} />
      </div>

      <div className="flex gap-2">
        <span className={dot} />
        <span className={dot} />
      </div>

      <div className="flex gap-2">
        <span className={dot} />
        <span className={dot} />
        <span className={dot} />
      </div>

      <div className="flex gap-2">
        <span className={dot} />
        <span className={dot} />
      </div>

      <div className="flex gap-2">
        <span className={dot} />
      </div>
    </div>
  );
}

export function SaaSGapSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(".saas-glow-1", {
        y: -20,
        x: 10,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".saas-glow-2", {
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

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden isolate py-16 sm:py-24"
    >
      {/* PARTICLES */}
      <ParticlesBackground id="saas-particles" />

      {/* GLOW */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div className="saas-glow-1 absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-[var(--brand)]/[0.06] blur-[160px]" />
        <div className="saas-glow-2 absolute right-1/4 top-1/3 h-[350px] w-[450px] rounded-full bg-red-500/[0.05] blur-[120px]" />
        <div className="absolute left-1/4 bottom-1/4 h-[250px] w-[350px] rounded-full bg-[var(--brand)]/[0.04] blur-[100px]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-[2] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* TITLE ROW + ICON */}
     <div className="flex items-start justify-between mb-10 gap-10">

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
          The SaaS Gap in the <br /> Philippines
        </h2>

        <div className="mt-1 flex items-end space-x-5 mr-40">
          <DottedTriangle />
          <DottedTriangle />
          <DottedTriangle />
        </div>

      </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div className="flex justify-center">
            <div className="flex flex-col gap-6 items-center text-center">

              {industryStats.map((stat) => {
                const percent = parseFloat(stat.value);
                const size = 60 + percent * 0.8;

                return (
                  <div
                    key={stat.value}
                    className="flex items-center gap-4 justify-center"
                  >
                    <div
                      className="flex items-center justify-center rounded-full bg-red-600 shrink-0"
                      style={{
                        width: `${size}px`,
                        height: `${size}px`,
                      }}
                    >
                      <p className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl">
                        {stat.value}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-gray-800 dark:text-white max-w-xs text-left">
                      {stat.label}
                    </p>
                  </div>
                );
              })}

            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex items-center justify-center text-center">

            <Quote className="absolute top-0 left-[15%] -translate-y-1/2 w-20 h-20 text-gray-300/20 dark:text-white/10 rotate-180" />

            <Quote className="absolute bottom-0 right-[27%] translate-y-1/2 w-20 h-20 text-gray-300/20 dark:text-white/10" />

            <h3 className="relative text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug">
              <span>Demand is clear.</span>
              <br />
              <span className="underline text-red-600">
                The right solution
              </span>
              <br />
              <span>is missing.</span>
            </h3>

          </div>
        </div>

      </div>
    </section>
  );
}