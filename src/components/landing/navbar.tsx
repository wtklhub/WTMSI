"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "How We Work", href: "/#process" },
  { label: "Industries", href: "/#industries" },
  { label: "Partners", href: "/#partners" },
  { label: "Stories", href: "/stories" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.08] bg-[#0A0A0A]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          {/* <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ee2312]">
            <span className="text-sm font-bold text-white">W</span>
          </div> */}
          <Image
            src="/watatrip.png"
            alt="WTMSI Logo"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="text-lg font-semibold text-white">WTMSI</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-neutral-400 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="text-sm text-neutral-400 transition-colors hover:text-white"
          >
            Contact Us
          </Link>
          <Button className="bg-[#ee2312] text-white hover:bg-[#d41f10] shadow-lg shadow-[#ee2312]/20">
            Partner With Us
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-white/[0.08] bg-[#0A0A0A] px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-neutral-400 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <Button
                variant="outline"
                className="w-full border-white/20 text-neutral-900 hover:bg-neutral-900 hover:text-white"
              >
                Contact Us
              </Button>
              <Button className="w-full bg-[#ee2312] text-white hover:bg-[#d41f10] shadow-lg shadow-[#ee2312]/20">
                Partner With Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
