import type { Metadata } from "next";
import {
  Navbar,
  Footer,
  GridLayout,
  GridSection,
  GridLine,
} from "@/components/landing";
import { MapPin, Clock, Mail, Phone, Send } from "lucide-react";
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
              <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-[#ee2312]/[0.05] blur-[150px]" />
            </div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ee2312] mb-4">
                Get In Touch
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Let&apos;s talk about{" "}
                <span className="text-neutral-500">your project.</span>
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-neutral-400">
                Whether you need a web application, mobile app, AI integration,
                or a complete digital transformation — our team is ready to
                bring your vision to life.
              </p>
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
                  <h2 className="text-2xl font-bold text-white mb-8">
                    Send us a message
                  </h2>
                  <form className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-neutral-400 mb-2"
                        >
                          Your Name <span className="text-[#ee2312]">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="John Doe"
                          className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:border-[#ee2312]/50 focus:outline-none focus:ring-1 focus:ring-[#ee2312]/50 transition-colors"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-neutral-400 mb-2"
                        >
                          Your Email <span className="text-[#ee2312]">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="john@example.com"
                          className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:border-[#ee2312]/50 focus:outline-none focus:ring-1 focus:ring-[#ee2312]/50 transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-neutral-400 mb-2"
                      >
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="Project inquiry"
                        className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:border-[#ee2312]/50 focus:outline-none focus:ring-1 focus:ring-[#ee2312]/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-neutral-400 mb-2"
                      >
                        Message <span className="text-[#ee2312]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        placeholder="Tell us about your project..."
                        className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:border-[#ee2312]/50 focus:outline-none focus:ring-1 focus:ring-[#ee2312]/50 transition-colors resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="bg-[#ee2312] text-white hover:bg-[#d41f10] gap-2 shadow-lg shadow-[#ee2312]/20 px-8"
                    >
                      <Send className="h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </div>

                {/* Contact info sidebar */}
                <div className="space-y-2">
                  {contactInfo.map((info) => {
                    const Icon = info.icon;
                    return (
                      <div
                        key={info.title}
                        className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 transition-colors hover:bg-white/[0.04]"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#ee2312]">
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-sm font-semibold text-white mb-1">
                              {info.title}
                            </h3>
                            {info.lines.map((line) =>
                              info.href ? (
                                <a
                                  key={line}
                                  href={info.href}
                                  className="block text-sm text-[#ee2312] hover:underline"
                                >
                                  {line}
                                </a>
                              ) : (
                                <p
                                  key={line}
                                  className="text-sm text-neutral-400"
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
              </div>
            </div>
          </section>
        </GridSection>

        {/* Map / Location visual */}
        <GridSection>
          <section className="py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <GridLine className="mb-12" />
              <div className="grid gap-8 sm:grid-cols-3">
                {[
                  {
                    value: "24hr",
                    label: "Average response time",
                    color: "text-[#ee2312]",
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
                    className="flex flex-col items-center py-8 border-r border-white/[0.08] last:border-r-0 max-sm:border-r-0 max-sm:border-b max-sm:last:border-b-0"
                  >
                    <p
                      className={`text-3xl font-bold sm:text-4xl ${stat.color}`}
                    >
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-neutral-500 uppercase tracking-wider text-center">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              <GridLine className="mt-12" />
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
