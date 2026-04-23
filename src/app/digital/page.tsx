"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useThemeContext } from "@/providers/theme-provider";
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
  ChevronLeft,
  ChevronRight,
  ArrowRight,
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
    type: "image",
    featured: "/sample works/Sample Works (Carousel Posts)/Sample_Carousels_001.png",
    items: [
      "/sample works/Sample Works (Carousel Posts)/Sample_Carousels_001.png",
      "/sample works/Sample Works (Carousel Posts)/Sample_Carousels_002.png",
      "/sample works/Sample Works (Carousel Posts)/Sample_Carousels_003.png",
      "/sample works/Sample Works (Carousel Posts)/Sample_Carousels_004.png",
      "/sample works/Sample Works (Carousel Posts)/Sample_Carousels_005.png",
      "/sample works/Sample Works (Carousel Posts)/Sample_Carousels_006.png",
      "/sample works/Sample Works (Carousel Posts)/Sample_Carousels_007.png",
    ],
  },
  {
    title: "Static / Text Posts",
    description:
      "Clean, branded single-image posts with impactful typography and messaging.",
    type: "video",
    featured: "/sample works/Sample Works (Video)/I just want you to know....mp4",
    items: [
      "/sample works/Sample Works (Video)/I just want you to know....mp4"
    ],
  },
  {
    title: "Reels & Short-Form Video",
    description:
      "Dynamic video content optimized for Instagram Reels, TikTok, and Facebook Stories.",
    type: "video",
    featured: "/sample works/Sample Works (Video)/YT - 120-187 languages in PH (Trivia Video).mp4",
    items: [
      /*"/sample works/Sample Works (Reels-Short Form)/Nissan Kicks Test Drive Video 01 .mp4",
      "/sample works/Sample Works (Reels-Short Form)/WTMSI_If This Is You… It's Time to Break Up with Excel_ (Reel post)_w TTS.mp4",*/
      "/sample works/Sample Works (Video)/YT - 120-187 languages in PH (Trivia Video).mp4",
    ],
  },
];

/* ──── Work Process ──── */
const workProcess = [
  {
    step: "01",
    imageDark: "/lineart/line-icons/2.png",
    imageLight: "/lineart/line-icons/1.png",
    title: "Book an Assessment Call",
    description:
      "Let's discuss your brand, goals, and current social media presence in a free discovery call.",
    color: "text-[var(--brand)]",
    glowColor: "bg-[var(--brand)]",
    accentBg: "bg-[var(--brand)]/10 border-[var(--brand)]/20",
  },
  {
    step: "02",
    imageDark: "/lineart/line-icons/4.png",
    imageLight: "/lineart/line-icons/3.png",
    title: "Wait for Quotation",
    description:
      "We'll prepare a custom proposal based on your needs, complete with pricing and timeline.",
    color: "text-orange-400",
    glowColor: "bg-orange-400",
    accentBg: "bg-orange-500/10 border-orange-500/20",
  },
  {
    step: "03",
    imageDark: "/lineart/line-icons/6.png",
    imageLight: "/lineart/line-icons/5.png",
    title: "Sign Onboarding Form",
    description:
      "Fill out our onboarding questionnaire so we can understand your brand voice and preferences.",
    color: "text-emerald-400",
    glowColor: "bg-emerald-400",
    accentBg: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    step: "04",
    imageDark: "/lineart/line-icons/8.png",
    imageLight: "/lineart/line-icons/7.png",
    title: "Initial Meeting",
    description:
      "We align on strategy, content calendar, and key deliverables in a kickoff meeting.",
    color: "text-violet-400",
    glowColor: "bg-violet-400",
    accentBg: "bg-violet-500/10 border-violet-500/20",
  },
  {
    step: "05",
    imageDark: "/lineart/line-icons/10.png",
    imageLight: "/lineart/line-icons/9.png",
    title: "Project Kickoff",
    description:
      "We start creating, posting, and managing — with regular check-ins and performance reports.",
    color: "text-cyan-400",
    glowColor: "bg-cyan-400",
    accentBg: "bg-cyan-500/10 border-cyan-500/20",
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
      "Results may vary. There’s no one-size-fits-all formula for social media growth and success. What works for one brand may not work for another. Success requires a continuous cycle of testing, learning, and consistency.",
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

/* ──── Theme-Aware Lineart Component ──── */
function ThemeAwareLineart() {
  const { theme } = useThemeContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <img
        src="/lineart/1.png"
        alt="illustration"
        className="h-80 w-auto max-w-xl"
        draggable={false}
      />
    );
  }

  return (
    <img
      src={theme === "dark" ? "/lineart/2.png" : "/lineart/1.png"}
      alt="illustration"
      className="h-80 w-auto max-w-xl transition-opacity duration-300"
      draggable={false}
    />
  );
}

export default function DigitalPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeWorkIndex, setActiveWorkIndex] = useState<{ [key: string]: number }>(
    sampleWorkCategories.reduce((acc, cat) => ({ ...acc, [cat.title]: 0 }), {})
  );

  return (
    <GridLayout>
      <Navbar />
      <main>
        {/* Hero header */}
        <GridSection topLine={false}>
          <section className="relative pt-32 pb-16 overflow-hidden">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-[var(--brand)]/[0.06] blur-[180px]" />
            </div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <ScrollAnimation variant="fade-up">
                <div>
                  <span className="inline-block rounded-full bg-[var(--brand)]/10 border border-[var(--brand)]/20 px-4 py-1.5 text-xs font-semibold text-[var(--brand)] mb-6 uppercase tracking-wider">
                    Digital Marketing by WTMSI
                  </span>
                  <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-7xl">
                    Social Leverage
                    <br />
                    <span className="bg-gradient-to-r from-[#c60000] to-[#ff3333] bg-clip-text text-transparent">
                      Creates
                    </span>
                  </h1>
                  <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
                    We help brands grow their online presence through strategic
                    social media management, content creation, paid advertising, and
                    brand development.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a href="#contact-form">
                      <Button className="bg-[var(--brand)] text-[var(--brand-foreground)] hover:bg-[var(--brand-hover)] gap-2 shadow-lg shadow-red-500/20">
                        Let's talk!
                        <Phone className="h-4 w-4" />
                      </Button>
                    </a>
                    <a href="#services">
                      <Button
                        variant="outline"
                        className="border-border/70 text-foreground hover:bg-accent/60 hover:text-foreground"
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
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)] mb-4">
                      About Social Leverage Creates
                    </p>
                    <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                      Your brand deserves to be seen.
                    </h2>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      Social Leverage Creates is the digital marketing arm of WT
                      Migremo Systems, Inc. We combine creative storytelling with
                      data-driven strategies to help businesses build their brand,
                      grow their audience, and convert followers into customers.
                    </p>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      Whether you&apos;re a startup finding your voice or an established
                      business ready to scale your digital presence — we&apos;ve got
                      you covered.
                    </p>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation variant="fade-left">
                  <div className="flex items-center justify-center">
                      <div className="text-center">
                        <ThemeAwareLineart />
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
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)] mb-4">
                      Done For You
                    </p>
                    <h2 className="text-2xl font-bold text-foreground sm:text-3xl mb-8">
                      We handle everything.
                    </h2>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation variant="stagger-children" staggerAmount={0.12}>
                  <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3 bg-border/80 rounded-xl overflow-hidden">
                    {doneForYouServices.map((service) => {
                      const Icon = service.icon;
                      return (
                        <div
                          key={service.title}
                          className="bg-background p-6 sm:p-8 transition-colors hover:bg-accent/60"
                        >
                          <Icon className="h-7 w-7 text-[var(--brand)] mb-4" />
                          <h3 className="text-base font-bold text-foreground mb-2">
                            {service.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </ScrollAnimation>
                <ScrollAnimation variant="zoom-in" delay={0.1}>
                  <div className="mt-10 text-center">
                    <a href="#contact-form">
                      <Button className="bg-[var(--brand)] text-[var(--brand-foreground)] hover:bg-[var(--brand-hover)] gap-2 shadow-lg shadow-red-500/20">
                        Request for Rates
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </a>
                  </div>
              </ScrollAnimation>
              </div>

              {/* Mentoring */}
              <div>
                <ScrollAnimation variant="fade-up">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)] mb-4">
                      Mentoring
                    </p>
                    <h2 className="text-2xl font-bold text-foreground sm:text-3xl mb-8">
                      Learn to do it yourself.
                    </h2>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation variant="reveal">
                  <div className="rounded-xl border border-border/80 bg-card/60 p-6 sm:p-8">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Not ready to outsource? Our mentoring program teaches you
                      and your team the fundamentals of social media marketing,
                      content creation, and paid advertising.
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {mentoringServices.map((item) => (
                        <div key={item} className="flex items-center gap-2.5">
                          <CheckCircle2 className="h-4 w-4 text-[var(--brand)] flex-shrink-0" />
                          <span className="text-sm text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollAnimation>
                <ScrollAnimation variant="zoom-in" delay={0.1}>
                  <div className="mt-10 text-center">
                    <a href="#contact-form">
                      <Button className="bg-[var(--brand)] text-[var(--brand-foreground)] hover:bg-[var(--brand-hover)] gap-2 shadow-lg shadow-red-500/20">
                        Book a Call with Us
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </a>
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
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)] mb-4">
                    Sample Works
                  </p>
                  <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                    A glimpse of what we create.
                  </h2>
                </div>
              </ScrollAnimation>

              <ScrollAnimation variant="stagger-children" staggerAmount={0.12}>
                <div className="grid gap-px sm:grid-cols-3 bg-border/80 rounded-xl overflow-hidden">
                  {sampleWorkCategories.map((cat) => {
                    const currentIndex = activeWorkIndex[cat.title] || 0;
                    const currentItem = cat.items[currentIndex];
                    const itemCount = cat.items.length;
                    const hasMultiple = itemCount > 1;

                    return (
                      <div
                        key={cat.title}
                        className="bg-background transition-colors hover:bg-accent/60 group flex flex-col"
                      >
                        {/* Media Carousel - Optimized for Performance */}
                        <div className="relative aspect-[4/3] bg-gradient-to-br from-white/[0.04] to-transparent flex items-center justify-center border-b border-border/80 overflow-hidden">
                          {cat.type === "image" ? (
                            <Image
                              src={currentItem}
                              alt={`${cat.title} - Sample ${currentIndex + 1}`}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              quality={75}
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              key={currentItem}
                            />
                          ) : (
                            <video
                              key={currentItem}
                              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                              autoPlay
                              muted
                              loop
                              playsInline
                              preload="none"
                            >
                              <source src={currentItem} type="video/mp4" />
                            </video>
                          )}

                          {/* Navigation Controls */}
                          {hasMultiple && (
                            <>
                              <button
                                onClick={() =>
                                  setActiveWorkIndex((prev) => ({
                                    ...prev,
                                    [cat.title]:
                                      prev[cat.title] === 0
                                        ? itemCount - 1
                                        : prev[cat.title] - 1,
                                  }))
                                }
                                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors opacity-0 group-hover:opacity-100"
                                aria-label="Previous sample"
                              >
                                <ChevronLeft className="h-4 w-4" />
                              </button>
                              <button
                                onClick={() =>
                                  setActiveWorkIndex((prev) => ({
                                    ...prev,
                                    [cat.title]:
                                      prev[cat.title] === itemCount - 1
                                        ? 0
                                        : prev[cat.title] + 1,
                                  }))
                                }
                                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors opacity-0 group-hover:opacity-100"
                                aria-label="Next sample"
                              >
                                <ChevronRight className="h-4 w-4" />
                              </button>
                              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                                {cat.items.map((_, idx) => (
                                  <button
                                    key={idx}
                                    onClick={() =>
                                      setActiveWorkIndex((prev) => ({
                                        ...prev,
                                        [cat.title]: idx,
                                      }))
                                    }
                                    className={`h-1.5 rounded-full transition-all ${
                                      idx === currentIndex
                                        ? "w-6 bg-white"
                                        : "w-1.5 bg-white/50 hover:bg-white/70"
                                    }`}
                                    aria-label={`Go to sample ${idx + 1}`}
                                  />
                                ))}
                              </div>
                            </>
                          )}

                          {/* Item Counter */}
                          {hasMultiple && (
                            <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                              {currentIndex + 1} / {itemCount}
                            </div>
                          )}
                        </div>

                        <div className="p-6 flex-1">
                          <h3 className="text-base font-bold text-foreground mb-2">
                            {cat.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {cat.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
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
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)] mb-4">
                    Work Process
                  </p>
                  <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                    How we get started.
                  </h2>
                </div>
              </ScrollAnimation>

              <ScrollAnimation variant="stagger-children" staggerAmount={0.08}>
                <div className="relative px-4">
                  <div className="grid gap-6 sm:gap-8 sm:grid-cols-5">
                    {workProcess.map((step, idx) => {
                      const { theme } = useThemeContext();
                      const imageSrc = theme === "dark" ? step.imageLight: step.imageDark ;
                      return (
                        <div
                          key={step.step}
                          className="relative flex flex-col items-center text-center group"
                        >
                          {/* Icon Background Circle */}
                          <div className="relative mb-6 transition-all duration-300 group-hover:scale-110">
                            <div className={`absolute inset-0 rounded-full blur-xl opacity-10 group-hover:opacity-30 transition-opacity duration-300 ${step.glowColor}`} />
                            <div className={`relative h-20 w-20 rounded-full ${step.accentBg} border flex items-center justify-center transition-all duration-300 hover:shadow-lg`} style={{ boxShadow: `0 0 20px ${step.glowColor.replace('bg-', '')}40` }}>
                              <Image
                                src={imageSrc}
                                alt={step.title}
                                width={55}
                                height={55}
                                className="h-17 w-17 object-contain"
                              />
                            </div>
                          </div>

                          <span className={`text-2xl sm:text-3xl font-bold ${step.color} opacity-70 mb-3`}>
                            {step.step}
                          </span>

                          <div className="flex-1">
                            <h3 className="text-sm font-bold text-foreground leading-tight mb-2">
                              {step.title}
                            </h3>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                          
                          {idx < workProcess.length - 1 && (
                            <div className={`hidden sm:flex absolute left-full top-10 -translate-y-1/2 transition-all duration-300 ${step.color} opacity-30 group-hover:opacity-100 group-hover:drop-shadow-lg`} style={{ marginLeft: '8px' }}>
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6" />
                              </svg>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
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
                <div className="mb-12 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)] mb-4">
                    FAQs
                  </p>
                  <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                    Frequently asked questions.
                  </h2>
                </div>
              </ScrollAnimation>

              <ScrollAnimation variant="stagger-children" staggerAmount={0.08}>
                <div className="mx-auto max-w-3xl space-y-2">
                  {faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-border/80 bg-card/60 overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="flex w-full items-center justify-between p-5 text-left"
                      >
                        <span className="text-sm font-semibold text-foreground pr-4">
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`h-4 w-4 text-muted-foreground flex-shrink-0 transition-transform ${
                            openFaq === i ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openFaq === i && (
                        <div className="px-5 pb-5 -mt-1">
                          <p className="text-sm text-muted-foreground leading-relaxed">
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
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand)] mb-4">
                      Get in Touch
                    </p>
                    <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                      Let&apos;s grow your brand.
                    </h2>
                    <p className="mt-3 text-muted-foreground">
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
                        className="block text-sm font-medium text-muted-foreground mb-2"
                      >
                        Name <span className="text-[var(--brand)]">*</span>
                      </label>
                      <input
                        id="digital-name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full rounded-lg border border-border/80 bg-card/70 px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:border-[var(--brand)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--brand)]/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="digital-email"
                        className="block text-sm font-medium text-muted-foreground mb-2"
                      >
                        Email <span className="text-[var(--brand)]">*</span>
                      </label>
                      <input
                        id="digital-email"
                        name="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="w-full rounded-lg border border-border/80 bg-card/70 px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:border-[var(--brand)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--brand)]/50 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="digital-service"
                      className="block text-sm font-medium text-muted-foreground mb-2"
                    >
                      Interested In
                    </label>
                    <select
                      id="digital-service"
                      name="service"
                      className="w-full rounded-lg border border-border/80 bg-card/70 px-4 py-3 text-sm text-foreground focus:border-[var(--brand)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--brand)]/50 transition-colors"
                    >
                      <option value="" className="bg-background">
                        Select a service
                      </option>
                      <option value="social-media" className="bg-background">
                        Social Media Management
                      </option>
                      <option value="content" className="bg-background">
                        Content Creation
                      </option>
                      <option value="ads" className="bg-background">
                        Paid Advertising
                      </option>
                      <option value="branding" className="bg-background">
                        Branding
                      </option>
                      <option value="mentoring" className="bg-background">
                        Mentoring
                      </option>
                      <option value="full-package" className="bg-background">
                        Full Package
                      </option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="digital-message"
                      className="block text-sm font-medium text-muted-foreground mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="digital-message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your brand and goals..."
                      className="w-full rounded-lg border border-border/80 bg-card/70 px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:border-[var(--brand)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--brand)]/50 transition-colors resize-none"
                    />
                  </div>
                  <div className="text-center">
                    <Button
                      type="submit"
                      className="bg-[var(--brand)] text-[var(--brand-foreground)] hover:bg-[var(--brand-hover)] gap-2 shadow-lg shadow-red-500/20 px-8"
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
