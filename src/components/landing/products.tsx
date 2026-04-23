"use client";

import { Button } from "@/components/ui/button";
import {
  Package,
  Headphones,
  CalendarCheck,
  ArrowRight,
} from "lucide-react";
import { GridLine } from "./grid-background";
import { ScrollAnimation } from "./scroll-animations";
import Link from "next/link";
import { useState, useEffect } from "react";

const saasProducts = [
  {
    icon: Package,
    name: "Inventory Management System",
    tagline: "Track, manage, and optimize your inventory in real time.",
    color: "text-[var(--brand)]",
    accentBg: "bg-[var(--brand)]/10 border-[var(--brand)]/20",
  },
  {
    icon: Headphones,
    name: "Help Desk",
    tagline: "Streamline support tickets and customer service workflows.",
    color: "text-orange-400",
    accentBg: "bg-orange-500/10 border-orange-500/20",
  },
  {
    icon: CalendarCheck,
    name: "Booking Platform",
    tagline: "Simplify reservations and appointment scheduling.",
    color: "text-emerald-400",
    accentBg: "bg-emerald-500/10 border-emerald-500/20",
  },
];

const demoScreens = [
  ...Array.from({ length: 3 }, (_, i) => `/images/booking-${i + 1}.png`),
  ...Array.from({ length: 3 }, (_, i) => `/images/helpdesk-${i + 1}.png`),
  ...Array.from({ length: 3 }, (_, i) => `/images/inventory-${i + 1}.png`),
];

export function ProductSections() {
  const [currentScreen, setCurrentScreen] = useState(0);

  // Auto-rotate screens
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % demoScreens.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="products" className="relative py-16 sm:py-24">
      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-[var(--brand)]/[0.03] blur-[150px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollAnimation variant="fade-up">
          <div className="mb-12 sm:mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)] mb-4">
              Our Products
            </p>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              SaaS solutions
              <br />
              <span className="text-muted-foreground">
                built for real operations.
              </span>
            </h2>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground">
              Ready-to-deploy platforms designed to solve the most common
              business challenges — customizable to your exact workflow.
            </p>
          </div>
        </ScrollAnimation>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* LEFT */}
          <div className="flex-1 space-y-6 w-full">
            {saasProducts.map((product) => {
              const Icon = product.icon;
              return (
                <Link
                  key={product.name}
                  href="/products"
                  className="group flex flex-col bg-background p-6 sm:p-8 transition-colors hover:bg-accent/60 rounded-xl"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border ${product.accentBg} mb-3`}
                  >
                    <Icon className={`h-6 w-6 ${product.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-[var(--brand)] transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                    {product.tagline}
                  </p>
                </Link>
              );
            })}
          </div>

          {/* RIGHT - CODE LAPTOP MOCKUP */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative mx-auto max-w-2xl w-full px-4 sm:px-10">

              {/* Screen */}
              <div className="relative overflow-hidden rounded-t-3xl bg-zinc-950 p-3 shadow-2xl">
                
                {/* Notch */}
                <div className="absolute inset-x-0 top-0 flex items-center justify-center z-20">
                  <div className="relative flex h-6 w-24 items-center justify-center">
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 h-6 w-22 rounded-b-2xl bg-zinc-900 border-b border-zinc-800" />
                    <div className="relative z-10 flex items-center justify-center w-full">
                      <div className="mx-auto h-1.5 w-1.5 rounded-full bg-zinc-700 border border-zinc-600" />
                    </div>
                  </div>
                </div>

                {/* Reflections */}
                <div className="pointer-events-none absolute top-2 left-0 h-8 w-16 bg-gradient-to-r from-white/30 to-transparent blur-md opacity-40" />
                <div className="pointer-events-none absolute top-2 right-0 h-8 w-16 bg-gradient-to-l from-white/30 to-transparent blur-md opacity-40" />

                {/* SCREEN CONTENT */}
                <div className="aspect-[16/10] w-full overflow-hidden rounded-t-2xl relative">
                  {demoScreens.map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt={`Demo ${i + 1}`}
                      loading={i === 0 ? "eager" : "lazy"}
                      className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-1000 ease-in-out ${
                        i === currentScreen
                          ? "opacity-100 translate-x-0 z-10"
                          : "opacity-0 -translate-x-10 z-0"
                      }`}
                    />
                  ))}
                </div>

                {/* Glow */}
                <div className="absolute inset-x-10 bottom-0 h-2 bg-white blur-xl" />
              </div>

              {/* Base */}
              <div className="-mx-10 pb-1">
                <div className="relative h-4 w-full rounded-b-2xl bg-gradient-to-r from-zinc-800 via-zinc-950 to-zinc-800">
                  <div className="absolute inset-0 flex items-start justify-center">
                    <div className="h-2 w-20 rounded-b-md border-x border-b border-zinc-600/25 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 opacity-75" />
                  </div>
                  <div className="absolute -bottom-1 left-8 h-1 w-10 rounded-b-full bg-zinc-900" />
                  <div className="absolute right-8 -bottom-1 h-1 w-10 rounded-b-full bg-zinc-900" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <GridLine className="mt-12" />

        {/* CTA */}
        <ScrollAnimation variant="zoom-in" delay={0.2}>
          <div className="mt-12 text-center">
            <Link href="/products">
              <Button className="bg-[var(--brand)] text-[var(--brand-foreground)] hover:bg-[var(--brand-hover)] gap-2 shadow-lg shadow-red-500/20">
                View All Products & Services
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}