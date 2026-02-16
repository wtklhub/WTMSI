"use client";

import { useRef, useEffect, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimationVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left"
  | "fade-right"
  | "zoom-in"
  | "stagger-children"
  | "reveal"
  | "counter";

interface ScrollAnimationProps {
  children: ReactNode;
  variant?: AnimationVariant;
  className?: string;
  delay?: number;
  duration?: number;
  staggerAmount?: number;
  /** For counter animation — target number */
  counterTarget?: number;
  /** Suffix for counter (e.g. "+" or "%") */
  counterSuffix?: string;
  once?: boolean;
}

export function ScrollAnimation({
  children,
  variant = "fade-up",
  className,
  delay = 0,
  duration = 0.8,
  staggerAmount = 0.15,
  once = true,
}: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const trigger: ScrollTrigger.Vars = {
        trigger: el,
        start: "top 85%",
        end: "bottom 20%",
        toggleActions: once
          ? "play none none none"
          : "play none none reverse",
      };

      switch (variant) {
        case "fade-up":
          gsap.fromTo(
            el,
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              duration,
              delay,
              ease: "power3.out",
              scrollTrigger: trigger,
            }
          );
          break;

        case "fade-down":
          gsap.fromTo(
            el,
            { opacity: 0, y: -60 },
            {
              opacity: 1,
              y: 0,
              duration,
              delay,
              ease: "power3.out",
              scrollTrigger: trigger,
            }
          );
          break;

        case "fade-left":
          gsap.fromTo(
            el,
            { opacity: 0, x: -80 },
            {
              opacity: 1,
              x: 0,
              duration,
              delay,
              ease: "power3.out",
              scrollTrigger: trigger,
            }
          );
          break;

        case "fade-right":
          gsap.fromTo(
            el,
            { opacity: 0, x: 80 },
            {
              opacity: 1,
              x: 0,
              duration,
              delay,
              ease: "power3.out",
              scrollTrigger: trigger,
            }
          );
          break;

        case "zoom-in":
          gsap.fromTo(
            el,
            { opacity: 0, scale: 0.85 },
            {
              opacity: 1,
              scale: 1,
              duration,
              delay,
              ease: "power3.out",
              scrollTrigger: trigger,
            }
          );
          break;

        case "stagger-children":
          gsap.fromTo(
            el.children,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration,
              delay,
              stagger: staggerAmount,
              ease: "power3.out",
              scrollTrigger: trigger,
            }
          );
          break;

        case "reveal":
          gsap.fromTo(
            el,
            { opacity: 0, y: 30, clipPath: "inset(10% 0% 10% 0%)" },
            {
              opacity: 1,
              y: 0,
              clipPath: "inset(0% 0% 0% 0%)",
              duration: duration * 1.2,
              delay,
              ease: "power4.out",
              scrollTrigger: trigger,
            }
          );
          break;
      }
    }, el);

    return () => ctx.revert();
  }, [variant, delay, duration, staggerAmount, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/**
 * Animate a number counting up from 0 to the target value on scroll.
 * Used for stats / counters.
 */
export function CounterAnimation({
  target,
  suffix = "",
  className,
  duration = 2,
}: {
  target: number;
  suffix?: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obj = { val: 0 };

    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: target,
        duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          if (el) el.textContent = Math.round(obj.val) + suffix;
        },
      });
    }, el);

    return () => ctx.revert();
  }, [target, suffix, duration]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}

/**
 * Parallax background effect on scroll.
 */
export function ParallaxSection({
  children,
  className,
  speed = 0.3,
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        yPercent: speed * 100,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
