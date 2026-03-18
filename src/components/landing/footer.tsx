import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Facebook, Linkedin, Twitter, Mail, Instagram } from "lucide-react";
import Image from "next/image";

const footerSections = [
  {
    title: "Products",
    links: [
      { label: "SaaS Products", href: "/products" },
      { label: "Custom Development", href: "/products#custom" },
      { label: "Watatrip", href: "https://www.watatrip.com/" },
      { label: "Digital Marketing", href: "/digital" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/#about" },
      { label: "Clients", href: "/clients" },
      { label: "Partners", href: "/#partners" },
      { label: "Privacy Policy", href: "/policy" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/stories" },
      { label: "Case Studies", href: "/clients" },
      { label: "Contact Us", href: "/contact" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Facebook", href: "https://www.facebook.com/wtmigremo" },
      { label: "Instagram", href: "https://www.instagram.com/wtmigremo" },
      { label: "LinkedIn", href: "#" },
      { label: "inquiry@wtmigremo.com", href: "mailto:inquiry@wtmigremo.com" },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/wtmigremo", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/wtmigremo", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "X (Twitter)" },
  { icon: Mail, href: "mailto:inquiry@wtmigremo.com", label: "Email" },
];

export function Footer() {
  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="grid grid-cols-2 gap-6 py-10 sm:gap-8 sm:py-16 md:grid-cols-4">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h5 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                {section.title}
              </h5>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground/80 transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-border/80" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            {/* <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[var(--brand)]">
              <span className="text-xs font-bold text-foreground">W</span>
            </div> */}
            <Image
              src="/watatrip.png"
              alt="WTMSI Logo"
              width={28}
              height={28}
              className="rounded-md"
            />
            <span className="text-sm font-semibold text-foreground">
              WT Migremo Systems, Inc.
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground/80 transition-colors hover:text-foreground"
                  aria-label={social.label}
                >
                  <Icon className="h-4 w-4" />
                </Link>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} WT Migremo Systems, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
