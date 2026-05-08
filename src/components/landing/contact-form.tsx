"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value.trim(),
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setErrorMsg(json.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-lg border border-border/80 bg-card/70 px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:border-[var(--brand)]/50 focus:outline-none focus:ring-1 focus:ring-[var(--brand)]/50 transition-colors disabled:opacity-50";

  const isLoading = status === "loading";

  return (
    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-muted-foreground mb-2"
          >
            Your Name <span className="text-(--brand)">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            disabled={isLoading}
            placeholder="John Doe"
            className={inputClass}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-muted-foreground mb-2"
          >
            Your Email <span className="text-(--brand)">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            disabled={isLoading}
            placeholder="john@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-muted-foreground mb-2"
        >
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          disabled={isLoading}
          placeholder="Project inquiry"
          className={inputClass}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-muted-foreground mb-2"
        >
          Message <span className="text-(--brand)">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          disabled={isLoading}
          placeholder="Tell us about your project..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === "success" && (
        <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400">
          Message sent! We&apos;ll get back to you within 24 hours.
        </div>
      )}

      {status === "error" && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {errorMsg}
        </div>
      )}

      <Button
        type="submit"
        disabled={isLoading}
        className="bg-(--brand) text-(--brand-foreground) hover:bg-(--brand-hover) gap-2 shadow-lg shadow-red-500/20 px-8 disabled:opacity-60"
      >
        <Send className="h-4 w-4" />
        {isLoading ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
