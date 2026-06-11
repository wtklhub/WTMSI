"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun, X } from "lucide-react";
import Image from "next/image";
import { useTheme } from "@/hooks/use-theme";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Clients", href: "/clients" },
  { label: "Products", href: "/products" },
  { label: "Digital", href: "/digital" },
  { label: "Blog", href: "/stories" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDarkTheme = theme === "dark";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          {/* <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--brand)]">
            <span className="text-sm font-bold text-foreground">W</span>
          </div> */}
          <Image
            src="/watatrip.png"
            alt="WTMSI Logo"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="text-lg font-semibold text-foreground">WTMSI</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          {/* <Link
            href="/contact"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact Us
          </Link> */}
          <Link
            href="/contact"
          >
            <Button className="bg-[var(--brand)] text-[var(--brand-foreground)] hover:bg-[var(--brand-hover)] shadow-lg shadow-red-500/20">
              Partner With Us
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="transition-all hover:bg-accent/70"
            onClick={toggleTheme}
          >
            {isDarkTheme ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="transition-all hover:bg-accent/70"
            onClick={toggleTheme}
          >
            {isDarkTheme ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <button
            className="text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-border/70 bg-background px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))} 
            <div className="mt-4 flex flex-col gap-2">
              {/* <Button
                variant="outline"
                className="w-full border-border/70"
              >
                Contact Us
              </Button> */}
              <Link
                href="/contact"
              >
                <Button className="w-full bg-[var(--brand)] text-[var(--brand-foreground)] hover:bg-[var(--brand-hover)] shadow-lg shadow-red-500/20">
                  Partner With Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
