"use client";

import { Button } from "@/components/ui/button";
import {
  Package,
  Headphones,
  CalendarCheck,
  PartyPopper,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { GridLine } from "./grid-background";
import { ScrollAnimation } from "./scroll-animations";
import Link from "next/link";

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
  }
];

export function ProductSections() {
  return (
    <section id="products" className="relative py-16 sm:py-24">
      {/* Section glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-[var(--brand)]/[0.03] blur-[150px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollAnimation variant="fade-up">
          <div className="mb-12 sm:mb-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)] mb-4">
              Our Products
            </p>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              SaaS solutions
              <br />
              <span className="text-muted-foreground">built for real operations.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground">
              Ready-to-deploy platforms designed to solve the most common
              business challenges — customizable to your exact workflow.
            </p>
          </div>
        </ScrollAnimation>

        {/* Product cards */}
        <ScrollAnimation variant="stagger-children" staggerAmount={0.15}>
          <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3 bg-border/80 rounded-xl overflow-hidden">
            {saasProducts.map((product) => {
              const Icon = product.icon;
              return (
                <Link
                  key={product.name}
                  href="/products"
                  className="group flex flex-col bg-background p-6 sm:p-8 transition-colors hover:bg-accent/60"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border ${product.accentBg} mb-5`}
                  >
                    <Icon className={`h-6 w-6 ${product.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-[var(--brand)] transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                    {product.tagline}
                  </p>
                  <div className="mt-4">
                    <ArrowRight
                      className={`h-4 w-4 ${product.color} opacity-0 group-hover:opacity-100 transition-opacity`}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </ScrollAnimation>

        <GridLine className="mt-12" />

        {/* Bottom CTA */}
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
