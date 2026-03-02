"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { ScrollAnimation } from "./scroll-animations";

export function CTASection() {
  return (
    <section id="contact" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-[#c60000]/[0.06] blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimation variant="zoom-in">
          <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c60000] mb-4">
            Let&apos;s Build Together
          </p>
          <h2 className="text-2xl font-bold text-white sm:text-4xl lg:text-5xl">
            Let&apos;s talk about{" "}
            <span className="text-[#c7c8bd/80]">your project?</span>
          </h2>
          <p className="mt-6 text-lg text-[#c7c8bd]">
            Whether you need a web application, mobile app, AI integration, or a
            complete digital transformation — our team is ready to bring your
            vision to life.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-[#c60000] px-8 text-white hover:bg-[#a50000] gap-2 shadow-lg shadow-[#c60000]/25"
            >
              <Mail className="h-4 w-4" />
              Get in Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 bg-transparent px-8 text-white hover:bg-white/10"
            >
              View Our Work
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
