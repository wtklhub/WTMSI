import type { Metadata } from "next";
import {
  Navbar,
  Footer,
  GridLayout,
  GridSection,
  GridLine,
  ScrollAnimation,
} from "@/components/landing";
import { MapPin, Clock, Mail, Phone, Send, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact Us — WT Migremo Systems, Inc.",
  description:
    "Get in touch with WTMSI. Let's talk about your next software project — web, mobile, AI, or full-stack solutions.",
};

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Address",
    lines: [
      "Twin Oaks Place West",
      "Mandaluyong, Philippines, 1554",
    ],
  },
  {
    icon: Clock,
    title: "Office Hours",
    lines: ["MON – FRI: 8 AM to 5 PM"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["inquiry@wtmigremo.com"],
    href: "mailto:inquiry@wtmigremo.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+63 (2) 8123 4567"],
    href: "tel:+6328123456",
  },
];

export default function ContactPage() {
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
                    Get In Touch
                  </p>
                  <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                    Let&apos;s talk about{" "}
                    <span className="text-muted-foreground">your project.</span>
                  </h1>
                  <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                    Whether you need a web application, mobile app, AI integration,
                    or a complete digital transformation — our team is ready to
                    bring your vision to life.
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </section>
        </GridSection>

        {/* Contact form + info */}
        <GridSection>
          <section className="py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-12 lg:grid-cols-[1fr_380px]">
                {/* Form */}
                <div>
                  <ScrollAnimation variant="fade-up">
                    <h2 className="text-2xl font-bold text-foreground mb-8">
                      Send us a message
                    </h2>
                  </ScrollAnimation>
                  <ScrollAnimation variant="reveal">
                    <form className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-muted-foreground mb-2"
                        >
                          Your Name <span className="text-[var(--brand)]">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="John Doe"
                          className="w-full rounded-lg border border-border/80 bg-card/70 px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:border-[var(--brand)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--brand)]/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-muted-foreground mb-2"
                        >
                          Your Email <span className="text-[var(--brand)]">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="john@example.com"
                          className="w-full rounded-lg border border-border/80 bg-card/70 px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:border-[var(--brand)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--brand)]/50 transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-muted-foreground mb-2"
                      >
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="Project inquiry"
                        className="w-full rounded-lg border border-border/80 bg-card/70 px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:border-[var(--brand)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--brand)]/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-muted-foreground mb-2"
                      >
                        Message <span className="text-[var(--brand)]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        placeholder="Tell us about your project..."
                        className="w-full rounded-lg border border-border/80 bg-card/70 px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:border-[var(--brand)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--brand)]/50 transition-colors resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="bg-[var(--brand)] text-[var(--brand-foreground)] hover:bg-[var(--brand-hover)] gap-2 shadow-lg shadow-red-500/20 px-8"
                    >
                      <Send className="h-4 w-4" />
                      Send Message
                    </Button>
                    </form>
                  </ScrollAnimation>
                </div>

                {/* Contact info sidebar */}
                <ScrollAnimation variant="stagger-children" staggerAmount={0.1}>
                  <div className="space-y-2">
                    {contactInfo.map((info) => {
                      const Icon = info.icon;
                      return (
                        <div
                          key={info.title}
                          className="rounded-xl border border-border/80 bg-card/60 p-6 transition-colors hover:bg-accent/60"
                        >
                          <div className="flex items-start gap-4">
                            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[var(--brand)]">
                              <Icon className="h-5 w-5 text-foreground" />
                            </div>
                            <div>
                              <h3 className="text-sm font-semibold text-foreground mb-1">
                                {info.title}
                              </h3>
                              {info.lines.map((line) =>
                                info.href ? (
                                  <a
                                    key={line}
                                    href={info.href}
                                    className="block text-sm text-[var(--brand)] hover:underline"
                                  >
                                    {line}
                                  </a>
                                ) : (
                                  <p
                                    key={line}
                                    className="text-sm text-muted-foreground"
                                  >
                                    {line}
                                  </p>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </section>
        </GridSection>

        {/* Map / Location visual */}
        <GridSection>
          <section className="py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <GridLine className="mb-12" />
              <ScrollAnimation variant="stagger-children" staggerAmount={0.1}>
                <div className="grid gap-8 sm:grid-cols-3">
                  {[
                    {
                      value: "24hr",
                      label: "Average response time",
                      color: "text-[var(--brand)]",
                    },
                    {
                      value: "15+",
                      label: "Years delivering solutions",
                      color: "text-orange-400",
                    },
                    {
                      value: "200+",
                      label: "Projects completed",
                      color: "text-emerald-400",
                    },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col items-center py-8 border-r border-border/80 last:border-r-0 max-sm:border-r-0 max-sm:border-b max-sm:last:border-b-0"
                    >
                      <p
                        className={`text-3xl font-bold sm:text-4xl ${stat.color}`}
                      >
                        {stat.value}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider text-center">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollAnimation>
              <GridLine className="mt-12" />
            </div>
          </section>
        </GridSection>

        {/* Social media */}
        <GridSection bottomLine>
          <section className="py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <ScrollAnimation variant="fade-up">
                <div className="text-center mb-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)] mb-4">
                    Follow Us
                  </p>
                  <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                    Connect with us on social media.
                  </h2>
                </div>
              </ScrollAnimation>
              <ScrollAnimation variant="stagger-children" staggerAmount={0.1}>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-3xl mx-auto">
                  {[
                    {
                      icon: Facebook,
                      label: "Facebook",
                      handle: "@wtmigremo",
                      href: "https://www.facebook.com/wtmigremo",
                    },
                    {
                      icon: Instagram,
                      label: "Instagram",
                      handle: "@wtmigremo",
                      href: "https://www.instagram.com/wtmigremo",
                    },
                    {
                      icon: Mail,
                      label: "Email",
                      handle: "inquiry@wtmigremo.com",
                      href: "mailto:inquiry@wtmigremo.com",
                    },
                    {
                      icon: Phone,
                      label: "Phone",
                      handle: "+63 (2) 8123 4567",
                      href: "tel:+6328123456",
                    },
                  ].map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 rounded-xl border border-border/80 bg-card/60 p-4 transition-colors hover:bg-accent/60"
                      >
                        <Icon className="h-5 w-5 text-[var(--brand)]" />
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            {social.label}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {social.handle}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </ScrollAnimation>
            </div>
          </section>
        </GridSection>
      </main>
      <GridSection as="footer" bottomLine>
        <Footer />
      </GridSection>
    </GridLayout>
  );
}
