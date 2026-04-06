"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Navbar,
  Footer,
  GridLayout,
  GridSection,
  GridLine,
  ScrollAnimation,
} from "@/components/landing";
import {
  Package,
  Headphones,
  CalendarCheck,
  PartyPopper,
  Sparkles,
  Globe,
  Smartphone,
  Layers,
  Brain,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Note: Move metadata to layout.tsx if needed for server-side export

/* ──── SaaS Products ──── */
const saasProducts = [
  {
    icon: Package,
    name: "Inventory Management System",
    description:
      "A comprehensive platform to track stock levels, manage warehouses, and automate reorder points. Built for retail, e-commerce, and enterprise supply chains.",
    features: [
      "Real-time stock tracking",
      "Multi-warehouse support",
      "Automated reorder alerts",
      "Barcode/QR integration",
      "Analytics & reporting",
    ],
    images: [
      { src: "/SaaS Products/inventory-1.png", alt: "Inventory dashboard" },
      { src: "/SaaS Products/inventory-2.png", alt: "Stock tracking view" },
      { src: "/SaaS Products/inventory-3.png", alt: "Warehouse management" },
    ],
    color: "text-[var(--brand)]",
    accentBg: "bg-[var(--brand)]/10 border-[var(--brand)]/20",
  },
  {
    icon: Headphones,
    name: "Help Desk",
    description:
      "A ticket management system that organizes customer inquiries, routes support requests, and tracks resolution times for better service delivery.",
    features: [
      "Ticket management & routing",
      "SLA tracking",
      "Knowledge base",
      "Customer portal",
      "Performance analytics",
    ],
    images: [
      { src: "/SaaS Products/helpdesk-1.png", alt: "Helpdesk dashboard" },
      { src: "/SaaS Products/helpdesk-2.png", alt: "Ticket view" },
      { src: "/SaaS Products/helpdesk-3.png", alt: "Customer portal" },
    ],
    color: "text-orange-400",
    accentBg: "bg-orange-500/10 border-orange-500/20",
  },
  {
    icon: CalendarCheck,
    name: "Booking Platform",
    description:
      "An end-to-end reservation and scheduling system for service-based businesses, clinics, salons, co-working spaces, and more.",
    features: [
      "Online booking & scheduling",
      "Calendar management",
      "Payment integration",
      "Automated reminders",
      "Multi-location support",
    ],
    images: [
      { src: "/SaaS Products/booking-1.png", alt: "Booking calendar" },
      { src: "/SaaS Products/booking-2.png", alt: "Bookings View" },
      { src: "/SaaS Products/booking-3.png", alt: "Venues" },
    ],
    color: "text-emerald-400",
    accentBg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    icon: PartyPopper,
    name: "Events Management System",
    description:
      "Plan, organize, and execute events of any scale — from corporate conferences to community gatherings — with registration, scheduling, and analytics.",
    features: [
      "Event registration & ticketing",
      "Schedule builder",
      "Attendee management",
      "Venue coordination",
      "Post-event analytics",
    ],
    images: [
      { src: "/images/saas/events-1.png", alt: "Event dashboard" },
      { src: "/images/saas/events-2.png", alt: "Registration form" },
      { src: "/images/saas/events-3.png", alt: "Attendee management" },
    ],
    color: "text-purple-400",
    accentBg: "bg-purple-500/10 border-purple-500/20",
  },
  {
    icon: Sparkles,
    name: "Coming Soon",
    description:
      "We're currently developing our next SaaS product. Stay tuned for updates — it's going to be something special.",
    features: [],
    images: [],
    color: "text-blue-400",
    accentBg: "bg-blue-500/10 border-blue-500/20",
  },
];

/* ──── Custom Dev Services ──── */
const customServices = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Marketing sites, web apps, admin dashboards, and complex platforms built with modern frameworks.",
    stacks: ["React / Next.js", "Laravel", ".NET", "Node.js"],
    color: "text-[var(--brand)]",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform apps that users love, built for performance and scalability.",
    stacks: ["Flutter", "React Native", "Swift", "Kotlin"],
    color: "text-emerald-400",
  },
  {
    icon: Layers,
    title: "Full Stack Engineering",
    description:
      "End-to-end systems — from database architecture to REST APIs and frontend interfaces.",
    stacks: ["MEAN Stack", "PHP", "C# / .NET", "PostgreSQL"],
    color: "text-orange-400",
  },
  {
    icon: Brain,
    title: "AI & Intelligent Systems",
    description:
      "Computer vision, intelligent GIS, video analytics, and machine learning integrations.",
    stacks: ["Python", "TensorFlow", "OpenCV", "GIS"],
    color: "text-purple-400",
  },
];

interface ZoomedImage {
  productIndex: number;
  imageIndex: number;
}

export default function ProductsPage() {
  const [openProductIndex, setOpenProductIndex] = useState<number | null>(null);
  const [zoomedImage, setZoomedImage] = useState<ZoomedImage | null>(null);

  return (
    <GridLayout>
      <Navbar />
      <main>
        {/* Hero header */}
        <GridSection topLine={false}>
          <section className="relative pt-32 pb-16">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-[var(--brand)]/[0.05] blur-[150px]" />
            </div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <ScrollAnimation variant="fade-up">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)] mb-4">
                    Products & Services
                  </p>
                  <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                    Everything we build,{" "}
                    <span className="text-muted-foreground">all in one place.</span>
                  </h1>
                  <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                    From ready-to-deploy SaaS platforms to fully custom software —
                    explore how we help businesses operate smarter.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </section>
        </GridSection>

        {/* ──── Section 1: SaaS Products ──── */}
        <GridSection>
          <section className="py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <ScrollAnimation variant="fade-up">
                <div className="mb-12">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)] mb-4">
                    SaaS Products
                  </p>
                  <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                    Ready-to-deploy platforms
                  </h2>
                  <p className="mt-3 max-w-xl text-muted-foreground">
                    Subscription-based software tailored for common business
                    operations. Request a demo or inquire about rates.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation variant="stagger-children" staggerAmount={0.15}>
                <div className="space-y-4">
                  {saasProducts.map((product, productIndex) => {
                    const Icon = product.icon;
                    const isExpanded = openProductIndex === productIndex;
                    return (
                      <div
                        key={product.name}
                        className="rounded-xl border border-border/80 bg-card/20 overflow-hidden"
                      >
                        {/* Product Header */}
                        <button
                          onClick={() => setOpenProductIndex(isExpanded ? null : productIndex)}
                          className="w-full"
                        >
                          <div className="p-6 sm:p-8 transition-colors hover:bg-accent/30 flex items-start justify-between gap-6">
                            <div className="grid gap-6 lg:grid-cols-[1fr_280px] lg:items-start flex-1">
                              <div>
                                <div className="flex items-center gap-3 mb-4">
                                  <div
                                    className={`flex h-10 w-10 items-center justify-center rounded-lg border ${product.accentBg}`}
                                  >
                                    <Icon
                                      className={`h-5 w-5 ${product.color}`}
                                    />
                                  </div>
                                  <h3 className="text-xl font-bold text-foreground">
                                    {product.name}
                                  </h3>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                                  {product.description}
                                </p>
                              </div>

                              {product.features.length > 0 && (
                                <div className="space-y-2">
                                  {product.features.map((f) => (
                                    <div
                                      key={f}
                                      className="flex items-center gap-2"
                                    >
                                      <CheckCircle2
                                        className={`h-3.5 w-3.5 flex-shrink-0 ${product.color}`}
                                      />
                                      <span className="text-sm text-foreground">
                                        {f}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                            {product.images.length > 0 && (
                              <ChevronDown
                                className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform mt-1 ${
                                  isExpanded ? "rotate-180" : ""
                                }`}
                              />
                            )}
                          </div>
                        </button>

                        {/* Expanded Gallery Section */}
                        {isExpanded && product.images.length > 0 && (
                          <div className="border-t border-border/80 bg-background/60 p-6 sm:p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-background/50">
                              {product.images.map((image, imageIndex) => (
                                <button
                                  key={imageIndex}
                                  onClick={() => setZoomedImage({ productIndex, imageIndex })}
                                  className="rounded-lg border border-border/80 bg-card overflow-hidden aspect-video flex items-center justify-center cursor-pointer hover:border-border transition-colors group"
                                >
                                  {/* Placeholder for images */}
                                  <div className="w-full h-full bg-gradient-to-br from-muted via-muted to-muted-foreground/20 flex items-center justify-center group-hover:from-muted group-hover:via-muted/80 group-hover:to-muted-foreground/30 transition-colors">
                                    <img
                                      src={image.src}
                                      alt={image.alt}
                                      className="w-full h-full object-cover object-top"
                                    />
                                  </div>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </ScrollAnimation>

              <ScrollAnimation variant="zoom-in" delay={0.1}>
                <div className="mt-10 text-center">
                  <Link href="/contact">
                    <Button className="bg-[var(--brand)] text-[var(--brand-foreground)] hover:bg-[var(--brand-hover)] gap-2 shadow-lg shadow-red-500/20">
                      Request for Rates
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </ScrollAnimation>
            </div>
          </section>
        </GridSection>

        {/* ──── Section 2: Custom Web & Mobile Apps ──── */}
        <GridSection>
          <section className="py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <ScrollAnimation variant="fade-up">
                <div className="mb-12">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)] mb-4">
                    Custom Development
                  </p>
                  <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                    Custom Web & Mobile Apps
                  </h2>
                  <p className="mt-3 max-w-xl text-muted-foreground">
                    Tailor-fit software built from the ground up — designed around
                    your business processes, not the other way around.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation variant="stagger-children" staggerAmount={0.15}>
                <div className="grid gap-px sm:grid-cols-2 bg-border/80 rounded-xl overflow-hidden">
                  {customServices.map((service) => {
                    const Icon = service.icon;
                    return (
                      <div
                        key={service.title}
                        className="bg-background p-6 sm:p-8 transition-colors hover:bg-accent/60"
                      >
                        <Icon className={`h-8 w-8 ${service.color} mb-4`} />
                        <h3 className="text-lg font-bold text-foreground mb-2">
                          {service.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.stacks.map((s) => (
                            <span
                              key={s}
                              className="rounded-full border border-border/80 bg-card/70 px-3 py-1 text-xs text-muted-foreground"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </ScrollAnimation>

              <GridLine className="mt-12" />

              <ScrollAnimation variant="zoom-in" delay={0.1}>
                <div className="mt-10 text-center">
                  <Link href="/contact">
                    <Button className="bg-[var(--brand)] text-[var(--brand-foreground)] hover:bg-[var(--brand-hover)] gap-2 shadow-lg shadow-red-500/20">
                      Book a Call
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </ScrollAnimation>
            </div>
          </section>
        </GridSection>

        {/* ──── Section 3: Watatrip ──── */}
        <GridSection bottomLine>
          <section className="py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <ScrollAnimation variant="reveal">
                <div className="rounded-2xl border border-border/80 bg-card/60 p-8 sm:p-12 lg:p-16">
                  <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                    <div>
                      <span className="inline-block rounded-full bg-[var(--brand)]/10 border border-[var(--brand)]/20 px-3 py-1 text-xs font-medium text-[var(--brand)] mb-6">
                        Our Own Product
                      </span>
                      <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
                        Watatrip
                      </h2>
                      <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        Our flagship travel platform — designed to be the go-to
                        app to discover the rich culture, places, and events of
                        interest in the Philippines and soon, Southeast Asia.
                      </p>
                      <p className="mt-3 text-muted-foreground leading-relaxed">
                        Watatrip connects travelers with local experiences,
                        cultural heritage sites, festivals, and hidden gems — all
                        in one beautifully designed platform.
                      </p>
                      <div className="mt-8">
                        <a
                          href="https://www.watatrip.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="bg-[var(--brand)] text-[var(--brand-foreground)] hover:bg-[var(--brand-hover)] gap-2 shadow-lg shadow-red-500/20">
                            Visit Watatrip
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      {/* Laptop Device Mockup*/}
                      <div className="relative mx-auto max-w-2xl w-full px-4 sm:px-10">
                        {/* Screen */}
                          <div className="relative overflow-hidden rounded-t-3xl bg-zinc-950 p-3 shadow-2xl group">
                          {/*Camera Notch */}
                          <div className="absolute inset-x-0 top-0 flex items-center justify-center z-20">
                            <div className="relative flex h-6 w-24 items-center justify-center">
                              {/* Notch shape */}
                              <div className="absolute left-1/2 -translate-x-1/2 top-0 h-6 w-22 rounded-b-2xl bg-zinc-900 shadow-lg shadow-black/30 border-b border-zinc-800" />
                              {/* Camera */}
                              <div className="relative z-10 flex items-center justify-center w-full">
                                <div className="mx-auto h-1.5 w-1.5 rounded-full bg-zinc-700 border border-zinc-600 shadow-inner shadow-black/40" />
                              </div>
                            </div>
                          </div>
                          {/* Reflective light effects*/}
                          <div className="pointer-events-none absolute top-2 left-0 h-8 w-16 bg-gradient-to-r from-white/30 via-white/0 to-transparent rounded-l-2xl blur-md opacity-40" />
                          <div className="pointer-events-none absolute top-2 right-0 h-8 w-16 bg-gradient-to-l from-white/30 via-white/0 to-transparent rounded-r-2xl blur-md opacity-40" />
                          {/* Keyboard glow */}
                          <div className="absolute inset-x-10 bottom-0 h-2 bg-white blur-xl" />
                          {/* Screen Content */}
                          <div className="aspect-[16/10] w-full overflow-hidden rounded-t-2xl  items-center justify-center">
                              <img
                                src="/watatrip-site.png"
                                alt="Watatrip Website Preview"
                                className="aspect-[16/10] w-full object-cover object-top opacity-0 scale-95 animate-[fadeInScreen_1.2s_ease-out_forwards]"
                              />
                          {/* fadeInScreen animation */}
                          <style jsx global>{`
                          @keyframes fadeInScreen {
                            0% { opacity: 0; transform: scale(0.95); }
                            100% { opacity: 1; transform: scale(1); }
                          }
                          `}</style>
                          </div>
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
                </div>
              </ScrollAnimation>
            </div>
          </section>
        </GridSection>
      </main>
      <GridSection as="footer">
        <Footer />
      </GridSection>

      {/* Image Zoom Modal */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setZoomedImage(null)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setZoomedImage(null);
            const currentProduct = saasProducts[zoomedImage.productIndex];
            if (e.key === "ArrowLeft" && zoomedImage.imageIndex > 0) {
              setZoomedImage({ ...zoomedImage, imageIndex: zoomedImage.imageIndex - 1 });
            }
            if (e.key === "ArrowRight" && zoomedImage.imageIndex < currentProduct.images.length - 1) {
              setZoomedImage({ ...zoomedImage, imageIndex: zoomedImage.imageIndex + 1 });
            }
          }}
          role="dialog"
          aria-modal="true"
        >
          <button
            autoFocus
            onClick={() => setZoomedImage(null)}
            className="fixed top-4 right-4 z-50 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-sm p-2 text-white transition-colors"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Previous Button */}
          {zoomedImage.imageIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setZoomedImage({ ...zoomedImage, imageIndex: zoomedImage.imageIndex - 1 });
              }}
              className="fixed left-4 top-1/2 -translate-y-1/2 z-50 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-sm p-2 text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {/* Next Button */}
          {zoomedImage.imageIndex < saasProducts[zoomedImage.productIndex].images.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setZoomedImage({ ...zoomedImage, imageIndex: zoomedImage.imageIndex + 1 });
              }}
              className="fixed right-4 top-1/2 -translate-y-1/2 z-50 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-sm p-2 text-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}

          <div
            className="relative bg-black rounded-xl overflow-hidden flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex items-center justify-center bg-gradient-to-br from-muted via-muted to-muted-foreground/20 p-4">
              <img
                src={saasProducts[zoomedImage.productIndex].images[zoomedImage.imageIndex].src}
                alt={saasProducts[zoomedImage.productIndex].images[zoomedImage.imageIndex].alt}
                className="max-h-[85vh] max-w-[95vw] w-auto h-auto object-contain"
              />
            </div>
          </div>
          {/* Image Counter */}
          <div className="fixed bottom-4 left-1/2 -translate-x-1/2 text-xs text-white text-center bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
            {zoomedImage.imageIndex + 1} of {saasProducts[zoomedImage.productIndex].images.length}
          </div>
        </div>
      )}
    </GridLayout>
  );
}
