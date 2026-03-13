/**
 * Structural grid layout inspired by tailwindcss.com.
 *
 * 3-column CSS Grid: [gutter | content | gutter]
 * Gutters have diagonal crosshatch + border-x.
 * GridSection adds top/bottom horizontal lines via pseudo-elements.
 * GridLine adds inner horizontal lines anywhere within a section.
 */

import { cn } from "@/lib/utils";

/** Page wrapper — 3-column structural grid. */
export function GridLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "grid min-h-dvh grid-cols-1 justify-center bg-background text-foreground",
        "[--gutter-width:2.5rem] [--pattern-fg:rgba(255,255,255,0.08)]",
        "md:grid-cols-[var(--gutter-width)_minmax(0,80rem)_var(--gutter-width)]"
      )}
    >
      {/* Left gutter */}
      <div
        className={cn(
          "col-start-1 row-span-full row-start-1 hidden md:block",
          "border-x border-x-[var(--pattern-fg)]",
          "bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)]",
          "bg-[size:10px_10px] bg-fixed"
        )}
      />
      {/* Right gutter */}
      <div
        className={cn(
          "col-start-3 row-span-full row-start-1 hidden md:block",
          "border-x border-x-[var(--pattern-fg)]",
          "bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)]",
          "bg-[size:10px_10px] bg-fixed"
        )}
      />
      {/* Content column */}
      <div className="min-w-0">{children}</div>
    </div>
  );
}

/** Section wrapper with full-viewport-width horizontal lines at top / bottom. */
export function GridSection({
  children,
  className,
  id,
  as: Tag = "div",
  topLine = true,
  bottomLine = false,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "div" | "section" | "footer" | "main";
  topLine?: boolean;
  bottomLine?: boolean;
}) {
  return (
    <Tag
      id={id}
      className={cn(
        "relative",
        topLine &&
          "before:absolute before:top-0 before:-left-[100vw] before:h-px before:w-[200vw] before:bg-border/80",
        bottomLine &&
          "after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw] after:bg-border/80",
        className
      )}
    >
      {children}
    </Tag>
  );
}

/**
 * Inner horizontal grid line — drop anywhere inside a section to create
 * a full-viewport-width 1px line, just like the rows between sponsor logos
 * on tailwindcss.com.
 */
export function GridLine({ className }: { className?: string }) {
  return (
    <div className={cn("relative h-px", className)}>
      <div className="absolute inset-y-0 -left-[100vw] w-[200vw] bg-border/80" />
    </div>
  );
}

