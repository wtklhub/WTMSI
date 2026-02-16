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
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Products & Services — WT Migremo Systems, Inc.",
  description:
    "Explore WTMSI's SaaS products, custom web & mobile app development, and Watatrip — our flagship travel platform.",
};

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
    color: "text-[#c60000]",
    accentBg: "bg-[#c60000]/10 border-[#c60000]/20",
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
    color: "text-purple-400",
    accentBg: "bg-purple-500/10 border-purple-500/20",
  },
  {
    icon: Sparkles,
    name: "Coming Soon",
    description:
      "We're currently developing our next SaaS product. Stay tuned for updates — it's going to be something special.",
    features: [],
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
    color: "text-[#c60000]",
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

export default function ProductsPage() {
  return (
    <GridLayout>
      <Navbar />
      <main>
        {/* Hero header */}
        <GridSection topLine={false}>
          <section className="relative pt-32 pb-16">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-[#c60000]/[0.05] blur-[150px]" />
            </div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <ScrollAnimation variant="fade-up">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c60000] mb-4">
                    Products & Services
                  </p>
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    Everything we build,{" "}
                    <span className="text-[#c7c8bd]">all in one place.</span>
                  </h1>
                  <p className="mt-4 max-w-2xl text-lg text-[#c7c8bd]">
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
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c60000] mb-4">
                    SaaS Products
                  </p>
                  <h2 className="text-3xl font-bold text-white sm:text-4xl">
                    Ready-to-deploy platforms
                  </h2>
                  <p className="mt-3 max-w-xl text-[#c7c8bd]">
                    Subscription-based software tailored for common business
                    operations. Request a demo or inquire about rates.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation variant="stagger-children" staggerAmount={0.15}>
                <div className="space-y-4">
                  {saasProducts.map((product) => {
                    const Icon = product.icon;
                    return (
                      <div
                        key={product.name}
                        className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8 transition-colors hover:bg-white/[0.04]"
                      >
                        <div className="grid gap-6 lg:grid-cols-[1fr_280px] lg:items-start">
                          <div>
                            <div className="flex items-center gap-3 mb-4">
                              <div
                                className={`flex h-10 w-10 items-center justify-center rounded-lg border ${product.accentBg}`}
                              >
                                <Icon
                                  className={`h-5 w-5 ${product.color}`}
                                />
                              </div>
                              <h3 className="text-xl font-bold text-white">
                                {product.name}
                              </h3>
                            </div>
                            <p className="text-sm text-[#c7c8bd] leading-relaxed max-w-2xl">
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
                                  <span className="text-sm text-[#F1F4F9]">
                                    {f}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </ScrollAnimation>

              <ScrollAnimation variant="zoom-in" delay={0.1}>
                <div className="mt-10 text-center">
                  <Link href="/contact">
                    <Button className="bg-[#c60000] text-white hover:bg-[#a50000] gap-2 shadow-lg shadow-[#c60000]/20">
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
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c60000] mb-4">
                    Custom Development
                  </p>
                  <h2 className="text-3xl font-bold text-white sm:text-4xl">
                    Custom Web & Mobile Apps
                  </h2>
                  <p className="mt-3 max-w-xl text-[#c7c8bd]">
                    Tailor-fit software built from the ground up — designed around
                    your business processes, not the other way around.
                  </p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation variant="stagger-children" staggerAmount={0.15}>
                <div className="grid gap-px sm:grid-cols-2 bg-white/[0.08] rounded-xl overflow-hidden">
                  {customServices.map((service) => {
                    const Icon = service.icon;
                    return (
                      <div
                        key={service.title}
                        className="bg-[#282828] p-6 sm:p-8 transition-colors hover:bg-white/[0.02]"
                      >
                        <Icon className={`h-8 w-8 ${service.color} mb-4`} />
                        <h3 className="text-lg font-bold text-white mb-2">
                          {service.title}
                        </h3>
                        <p className="text-sm text-[#c7c8bd] leading-relaxed mb-4">
                          {service.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.stacks.map((s) => (
                            <span
                              key={s}
                              className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-[#c7c8bd]"
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
                    <Button className="bg-[#c60000] text-white hover:bg-[#a50000] gap-2 shadow-lg shadow-[#c60000]/20">
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
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 sm:p-12 lg:p-16">
                  <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                    <div>
                      <span className="inline-block rounded-full bg-[#c60000]/10 border border-[#c60000]/20 px-3 py-1 text-xs font-medium text-[#c60000] mb-6">
                        Our Own Product
                      </span>
                      <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                        Watatrip
                      </h2>
                      <p className="mt-4 text-lg text-[#c7c8bd] leading-relaxed">
                        Our flagship travel platform — designed to be the go-to
                        app to discover the rich culture, places, and events of
                        interest in the Philippines and soon, Southeast Asia.
                      </p>
                      <p className="mt-3 text-[#c7c8bd] leading-relaxed">
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
                          <Button className="bg-[#c60000] text-white hover:bg-[#a50000] gap-2 shadow-lg shadow-[#c60000]/20">
                            Visit Watatrip
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="relative h-64 w-full max-w-sm rounded-2xl bg-gradient-to-br from-[#c60000]/20 via-orange-500/10 to-transparent border border-white/[0.08] flex items-center justify-center">
                        <span className="text-6xl font-black text-white/10 tracking-tighter">
                          WATATRIP
                        </span>
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
    </GridLayout>
  );
}
