import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Facebook, Linkedin, Twitter, Mail } from "lucide-react";
import Image from "next/image";

const footerSections = [
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "/#services" },
      { label: "Full Stack Development", href: "/#services" },
      { label: "Mobile App Development", href: "/#services" },
      { label: "Artificial Intelligence", href: "/#services" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "e-Commerce / Retail", href: "/#industries" },
      { label: "Enterprise", href: "/#industries" },
      { label: "Government", href: "/#industries" },
      { label: "Education", href: "/#industries" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Our Team", href: "#" },
      { label: "Partners", href: "/#partners" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/stories" },
      { label: "Case Studies", href: "/stories" },
      { label: "Watatrip", href: "http://www.watatrip.com/" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "X (Twitter)" },
  { icon: Mail, href: "mailto:info@wtmigremo.com", label: "Email" },
];

export function Footer() {
  return (
    <div className="bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="grid grid-cols-2 gap-6 py-10 sm:gap-8 sm:py-16 md:grid-cols-4">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h5 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-4">
                {section.title}
              </h5>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-500 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-white/[0.08]" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            {/* <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#ee2312]">
              <span className="text-xs font-bold text-white">W</span>
            </div> */}
            <Image
              src="/watatrip.png"
              alt="WTMSI Logo"
              width={28}
              height={28}
              className="rounded-md"
            />
            <span className="text-sm font-semibold text-white">
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
                  className="text-neutral-500 transition-colors hover:text-white"
                  aria-label={social.label}
                >
                  <Icon className="h-4 w-4" />
                </Link>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-xs text-neutral-600">
            © {new Date().getFullYear()} WT Migremo Systems, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
