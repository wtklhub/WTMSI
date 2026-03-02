"use client";

import { useState } from "react";
import {
  Navbar,
  Footer,
  GridLayout,
  GridSection,
  GridLine,
  ScrollAnimation,
} from "@/components/landing";
import {
  Megaphone,
  Palette,
  Video,
  Target,
  PenTool,
  Users,
  Phone,
  ChevronDown,
  Send,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ──── Services ──── */
const doneForYouServices = [
  {
    icon: Megaphone,
    title: "Social Media Management",
    description:
      "End-to-end management of your social media presence — strategy, scheduling, posting, and community engagement.",
  },
  {
    icon: Palette,
    title: "Content Creation",
    description:
      "Eye-catching visuals, carousel posts, static graphics, and branded templates tailored to your audience.",
  },
  {
    icon: Video,
    title: "Video & Reels Production",
    description:
      "Short-form video content for Instagram Reels, TikTok, and Facebook — from concept to editing.",
  },
  {
    icon: Target,
    title: "FB, Instagram & TikTok Ads",
    description:
      "Paid advertising campaigns with targeting, A/B testing, and performance reporting across all major platforms.",
  },
  {
    icon: PenTool,
    title: "Branding & Visual Identity",
    description:
      "Logo design, brand guidelines, color palettes, and cohesive visual identity systems for your business.",
  },
  {
    icon: Users,
    title: "Content Writing & Copywriting",
    description:
      "Compelling captions, blog posts, website copy, and marketing materials that convert.",
  },
];

const mentoringServices = [
  "1-on-1 social media coaching",
  "Content strategy workshops",
  "Brand identity consultation",
  "Ads management training",
  "Analytics & reporting guidance",
];

/* ──── Sample work types ──── */
const sampleWorkCategories = [
  {
    title: "Carousel Posts",
    description:
      "Multi-slide educational and promotional content designed for maximum engagement.",
  },
  {
    title: "Static / Text Posts",
    description:
      "Clean, branded single-image posts with impactful typography and messaging.",
  },
  {
    title: "Reels & Short-Form Video",
    description:
      "Dynamic video content optimized for Instagram Reels, TikTok, and Facebook Stories.",
  },
];

/* ──── Work Process ──── */
const workProcess = [
  {
    step: "01",
    title: "Book an Assessment Call",
    description:
      "Let's discuss your brand, goals, and current social media presence in a free discovery call.",
    color: "text-[#c60000]",
  },
  {
    step: "02",
    title: "Wait for Quotation",
    description:
      "We'll prepare a custom proposal based on your needs, complete with pricing and timeline.",
    color: "text-orange-400",
  },
  {
    step: "03",
    title: "Sign Onboarding Form",
    description:
      "Fill out our onboarding questionnaire so we can understand your brand voice and preferences.",
    color: "text-emerald-400",
  },
  {
    step: "04",
    title: "Initial Meeting",
    description:
      "We align on strategy, content calendar, and key deliverables in a kickoff meeting.",
    color: "text-purple-400",
  },
  {
    step: "05",
    title: "Project Kickoff",
    description:
      "We start creating, posting, and managing — with regular check-ins and performance reports.",
    color: "text-blue-400",
  },
];

/* ──── FAQs ──── */
const faqs = [
  {
    question: "What platforms do you manage?",
    answer:
      "We manage Facebook, Instagram, TikTok, and LinkedIn. We can also advise on YouTube and Twitter/X strategies.",
  },
  {
    question: "How long before I see results?",
    answer:
      "Most clients see improved engagement within the first 30 days. Significant growth in reach and followers typically happens within 2-3 months of consistent effort.",
  },
  {
    question: "Do you create the content or do I need to provide it?",
    answer:
      "Our Done For You service handles everything — from concept to design to copywriting. You just approve and we post. For Mentoring, we teach you how to create effective content yourself.",
  },
  {
    question: "Can I choose just one service instead of a full package?",
    answer:
      "Absolutely! We offer à la carte services so you can pick exactly what you need — whether it's just content creation, ad management, or branding.",
  },
  {
    question: "What's the difference between Done For You and Mentoring?",
    answer:
      "Done For You means we handle everything on your behalf. Mentoring means we teach you and your team the skills, strategies, and tools to do it yourselves.",
  },
];

export default function DigitalPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <GridLayout>
      <Navbar />
      <main>
        {/* Hero header */}
        <GridSection topLine={false}>
          <section className="relative pt-32 pb-16 overflow-hidden">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-[#c60000]/[0.06] blur-[180px]" />
            </div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <ScrollAnimation variant="fade-up">
                <div>
                  <span className="inline-block rounded-full bg-[#c60000]/10 border border-[#c60000]/20 px-4 py-1.5 text-xs font-semibold text-[#c60000] mb-6 uppercase tracking-wider">
                    Digital Marketing by WTMSI
                  </span>
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-7xl">
                    Social Leverage
                    <br />
                    <span className="bg-gradient-to-r from-[#c60000] to-[#ff3333] bg-clip-text text-transparent">
                      Creates
                    </span>
                  </h1>
                  <p className="mt-6 max-w-2xl text-lg text-[#c7c8bd] leading-relaxed">
                    We help brands grow their online presence through strategic
                    social media management, content creation, paid advertising, and
                    brand development.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a href="#contact-form">
                      <Button className="bg-[#c60000] text-white hover:bg-[#a50000] gap-2 shadow-lg shadow-[#c60000]/20">
                        Book a Free Call
                        <Phone className="h-4 w-4" />
                      </Button>
                    </a>
                    <a href="#services">
                      <Button
                        variant="outline"
                        className="border-white/20 text-[#F1F4F9] hover:bg-white/10 hover:text-white"
                      >
                        View Services
                      </Button>
                    </a>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </section>
        </GridSection>

        {/* ──── About ──── */}
        <GridSection>
          <section className="py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <ScrollAnimation variant="fade-right">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c60000] mb-4">
                      About Social Leverage Creates
                    </p>
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">
                      Your brand deserves to be seen.
                    </h2>
                    <p className="mt-4 text-[#c7c8bd] leading-relaxed">
                      Social Leverage Creates is the digital marketing arm of WT
                      Migremo Systems, Inc. We combine creative storytelling with
                      data-driven strategies to help businesses build their brand,
                      grow their audience, and convert followers into customers.
                    </p>
                    <p className="mt-3 text-[#c7c8bd] leading-relaxed">
                      Whether you&apos;re a startup finding your voice or an established
                      business ready to scale your digital presence — we&apos;ve got
                      you covered.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation variant="fade-left">
                  <div className="flex items-center justify-center">
                    <div className="relative h-64 w-full max-w-sm rounded-2xl bg-gradient-to-br from-[#c60000]/15 via-pink-500/10 to-transparent border border-white/[0.08] flex items-center justify-center">
                      <div className="text-center">
                        <span className="text-3xl font-black text-white/20 tracking-tight block">
                          SOCIAL LEVERAGE
                        </span>
                        <span className="text-lg font-bold text-[#c60000]/40 tracking-widest uppercase">
                          Creates
                        </span>
                      </div>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </section>
        </GridSection>

        {/* ──── Services ──── */}
        <GridSection>
          <section id="services" className="py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <GridLine className="mb-12" />

              {/* Done For You */}
              <div className="mb-16">
                <ScrollAnimation variant="fade-up">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c60000] mb-4">
                      Done For You
                    </p>
                    <h2 className="text-2xl font-bold text-white sm:text-3xl mb-8">
                      We handle everything.
                    </h2>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation variant="stagger-children" staggerAmount={0.12}>
                  <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3 bg-white/[0.08] rounded-xl overflow-hidden">
                    {doneForYouServices.map((service) => {
                      const Icon = service.icon;
                      return (
                        <div
                          key={service.title}
                          className="bg-[#282828] p-6 sm:p-8 transition-colors hover:bg-white/[0.02]"
                        >
                          <Icon className="h-7 w-7 text-[#c60000] mb-4" />
                          <h3 className="text-base font-bold text-white mb-2">
                            {service.title}
                          </h3>
                          <p className="text-sm text-[#c7c8bd] leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </ScrollAnimation>
              </div>

              {/* Mentoring */}
              <div>
                <ScrollAnimation variant="fade-up">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c60000] mb-4">
                      Mentoring
                    </p>
                    <h2 className="text-2xl font-bold text-white sm:text-3xl mb-8">
                      Learn to do it yourself.
                    </h2>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation variant="reveal">
                  <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8">
                    <p className="text-[#c7c8bd] mb-6 leading-relaxed">
                      Not ready to outsource? Our mentoring program teaches you
                      and your team the fundamentals of social media marketing,
                      content creation, and paid advertising.
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {mentoringServices.map((item) => (
                        <div key={item} className="flex items-center gap-2.5">
                          <CheckCircle2 className="h-4 w-4 text-[#c60000] flex-shrink-0" />
                          <span className="text-sm text-[#F1F4F9]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollAnimation>
              </div>

              <GridLine className="mt-12" />
            </div>
          </section>
        </GridSection>

        {/* ──── Sample Works ──── */}
        <GridSection>
          <section className="py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <ScrollAnimation variant="fade-up">
                <div className="mb-12">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c60000] mb-4">
                    Sample Works
                  </p>
                  <h2 className="text-2xl font-bold text-white sm:text-3xl">
                    A glimpse of what we create.
                  </h2>
                </div>
              </ScrollAnimation>

              <ScrollAnimation variant="stagger-children" staggerAmount={0.12}>
                <div className="grid gap-px sm:grid-cols-3 bg-white/[0.08] rounded-xl overflow-hidden">
                  {sampleWorkCategories.map((cat, i) => (
                    <div
                      key={cat.title}
                      className="bg-[#282828] transition-colors hover:bg-white/[0.02]"
                    >
                      {/* Placeholder for actual work samples */}
                      <div className="aspect-[4/3] bg-gradient-to-br from-white/[0.04] to-transparent flex items-center justify-center border-b border-white/[0.08]">
                        <span className="text-sm text-white/20 uppercase tracking-widest">
                          Sample {i + 1}
                        </span>
                      </div>
                      <div className="p-6">
                        <h3 className="text-base font-bold text-white mb-2">
                          {cat.title}
                        </h3>
                        <p className="text-sm text-[#c7c8bd] leading-relaxed">
                          {cat.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollAnimation>
            </div>
          </section>
        </GridSection>

        {/* ──── Work Process ──── */}
        <GridSection>
          <section className="py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <GridLine className="mb-12" />
              <ScrollAnimation variant="fade-up">
                <div className="mb-12">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c60000] mb-4">
                    Work Process
                  </p>
                  <h2 className="text-2xl font-bold text-white sm:text-3xl">
                    How we get started.
                  </h2>
                </div>
              </ScrollAnimation>

              <ScrollAnimation variant="stagger-children" staggerAmount={0.08}>
                <div className="grid gap-px sm:grid-cols-5 bg-white/[0.08] rounded-xl overflow-hidden">
                  {workProcess.map((step) => (
                    <div
                      key={step.step}
                      className="bg-[#282828] p-6 transition-colors hover:bg-white/[0.02]"
                    >
                      <span
                        className={`text-3xl font-bold ${step.color} opacity-30`}
                      >
                        {step.step}
                      </span>
                      <h3 className="mt-3 text-sm font-bold text-white leading-tight">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-xs text-[#c7c8bd] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollAnimation>
              <GridLine className="mt-12" />
            </div>
          </section>
        </GridSection>

        {/* ──── FAQs ──── */}
        <GridSection>
          <section className="py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <ScrollAnimation variant="fade-up">
                <div className="mb-12">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c60000] mb-4">
                    FAQs
                  </p>
                  <h2 className="text-2xl font-bold text-white sm:text-3xl">
                    Frequently asked questions.
                  </h2>
                </div>
              </ScrollAnimation>

              <ScrollAnimation variant="stagger-children" staggerAmount={0.08}>
                <div className="max-w-3xl space-y-2">
                  {faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-white/[0.08] bg-white/[0.02] overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="flex w-full items-center justify-between p-5 text-left"
                      >
                        <span className="text-sm font-semibold text-white pr-4">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`h-4 w-4 text-[#c7c8bd] flex-shrink-0 transition-transform ${
                            openFaq === i ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openFaq === i && (
                        <div className="px-5 pb-5 -mt-1">
                          <p className="text-sm text-[#c7c8bd] leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollAnimation>
            </div>
          </section>
        </GridSection>

        {/* ──── Contact Form ──── */}
        <GridSection bottomLine>
          <section id="contact-form" className="py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <GridLine className="mb-12" />
              <div className="mx-auto max-w-2xl">
                <ScrollAnimation variant="fade-up">
                  <div className="text-center mb-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c60000] mb-4">
                      Get in Touch
                    </p>
                    <h2 className="text-2xl font-bold text-white sm:text-3xl">
                      Let&apos;s grow your brand.
                    </h2>
                    <p className="mt-3 text-[#c7c8bd]">
                      Send us a message or book a free assessment call to discuss
                      your digital marketing needs.
                    </p>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation variant="reveal">
                  <form className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="digital-name"
                        className="block text-sm font-medium text-[#c7c8bd] mb-2"
                      >
                        Name <span className="text-[#c60000]">*</span>
                      </label>
                      <input
                        id="digital-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#c60000]/50 focus:outline-none focus:ring-1 focus:ring-[#c60000]/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="digital-email"
                        className="block text-sm font-medium text-[#c7c8bd] mb-2"
                      >
                        Email <span className="text-[#c60000]">*</span>
                      </label>
                      <input
                        id="digital-email"
                        name="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#c60000]/50 focus:outline-none focus:ring-1 focus:ring-[#c60000]/50 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="digital-service"
                      className="block text-sm font-medium text-[#c7c8bd] mb-2"
                    >
                      Interested In
                    </label>
                    <select
                      id="digital-service"
                      name="service"
                      className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white focus:border-[#c60000]/50 focus:outline-none focus:ring-1 focus:ring-[#c60000]/50 transition-colors"
                    >
                      <option value="" className="bg-[#282828]">
                        Select a service
                      </option>
                      <option value="social-media" className="bg-[#282828]">
                        Social Media Management
                      </option>
                      <option value="content" className="bg-[#282828]">
                        Content Creation
                      </option>
                      <option value="ads" className="bg-[#282828]">
                        Paid Advertising
                      </option>
                      <option value="branding" className="bg-[#282828]">
                        Branding
                      </option>
                      <option value="mentoring" className="bg-[#282828]">
                        Mentoring
                      </option>
                      <option value="full-package" className="bg-[#282828]">
                        Full Package
                      </option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="digital-message"
                      className="block text-sm font-medium text-[#c7c8bd] mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="digital-message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your brand and goals..."
                      className="w-full rounded-lg border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#c60000]/50 focus:outline-none focus:ring-1 focus:ring-[#c60000]/50 transition-colors resize-none"
                    />
                  </div>
                  <div className="text-center">
                    <Button
                      type="submit"
                      className="bg-[#c60000] text-white hover:bg-[#a50000] gap-2 shadow-lg shadow-[#c60000]/20 px-8"
                    >
                      <Send className="h-4 w-4" />
                      Send Message
                    </Button>
                  </div>
                  </form>
                </ScrollAnimation>
              </div>
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
