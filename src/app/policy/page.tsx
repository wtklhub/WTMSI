import type { Metadata } from "next";
import {
  Navbar,
  Footer,
  GridLayout,
  GridSection,
  GridLine,
  ScrollAnimation,
} from "@/components/landing";

export const metadata: Metadata = {
  title: "Privacy Policy — WT Migremo Systems, Inc.",
  description:
    "Read about how WT Migremo Systems, Inc. collects, uses, and protects your personal information.",
};

const sections = [
  {
    title: "Information We Collect",
    content: [
      "We may collect personal information that you voluntarily provide when you contact us, submit a form, or use our services. This includes your name, email address, phone number, company name, and any other information you choose to share.",
      "We also automatically collect certain technical information when you visit our website, including your IP address, browser type, device information, and browsing behavior through cookies and similar technologies.",
    ],
  },
  {
    title: "How We Use Your Information",
    content: [
      "We use the information we collect to respond to your inquiries, provide and improve our services, send you relevant communications (with your consent), and maintain the security of our platforms.",
      "We do not sell, rent, or share your personal information with third parties for their marketing purposes without your explicit consent.",
    ],
  },
  {
    title: "Data Security",
    content: [
      "We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.",
      "We regularly review our security practices and update them as needed to ensure the highest level of protection for your data.",
    ],
  },
  {
    title: "Cookies",
    content: [
      "Our website uses cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings.",
      "We use essential cookies for site functionality and analytics cookies to understand how visitors interact with our website.",
    ],
  },
  {
    title: "Third-Party Services",
    content: [
      "Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party services you interact with.",
    ],
  },
  {
    title: "Your Rights",
    content: [
      "Under the Philippine Data Privacy Act of 2012 (Republic Act No. 10173), you have the right to access, correct, and delete your personal data. You may also object to the processing of your personal information under certain conditions.",
      "To exercise any of these rights, please contact us using the information provided below.",
    ],
  },
  {
    title: "Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The updated policy will be posted on this page with a revised effective date.",
    ],
  },
  {
    title: "Contact Us",
    content: [
      "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:",
      "Email: inquiry@wtmigremo.com\nAddress: Twin Oaks Place West, Mandaluyong, Philippines 1554",
    ],
  },
];

export default function PolicyPage() {
  return (
    <GridLayout>
      <Navbar />
      <main>
        {/* Hero header */}
        <GridSection topLine={false}>
          <section className="relative pt-32 pb-16">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-[#c60000]/[0.04] blur-[150px]" />
            </div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <ScrollAnimation variant="fade-up">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c60000] mb-4">
                    Legal
                  </p>
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    Privacy Policy
                  </h1>
                  <p className="mt-4 text-[#c7c8bd]">
                    Last updated: January 2026
                  </p>
                </div>
              </ScrollAnimation>
            </div>
          </section>
        </GridSection>

        {/* Policy content */}
        <GridSection bottomLine>
          <section className="py-16">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <ScrollAnimation variant="fade-up">
                <div className="mb-8">
                  <p className="text-[#c7c8bd] leading-relaxed">
                    WT Migremo Systems, Inc. (&quot;WTMSI,&quot; &quot;we,&quot;
                    &quot;us,&quot; or &quot;our&quot;) is committed to protecting
                    your privacy. This Privacy Policy explains how we collect,
                    use, disclose, and safeguard your information when you visit
                    our website or use our services.
                  </p>
                </div>
              </ScrollAnimation>

              <div className="space-y-10">
                {sections.map((section, i) => (
                  <ScrollAnimation key={i} variant="reveal">
                    <div>
                      {i > 0 && <GridLine className="mb-10" />}
                      <h2 className="text-xl font-bold text-white mb-4">
                        {i + 1}. {section.title}
                      </h2>
                      {section.content.map((paragraph, j) => (
                        <p
                          key={j}
                          className="text-sm text-[#c7c8bd] leading-relaxed mb-3 whitespace-pre-line"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </ScrollAnimation>
                ))}
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
