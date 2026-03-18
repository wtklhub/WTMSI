import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

export const metadata: Metadata = {
  title: "WT Migremo Systems, Inc. — Software Solutions: Your Vision, Our Code",
  description:
    "WTMSI is a software development company specializing in web development, mobile apps, full-stack engineering, and AI solutions. 15+ years of experience delivering tailor-fit software for enterprises, government, and startups.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
