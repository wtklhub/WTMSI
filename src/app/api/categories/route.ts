import { NextResponse } from "next/server";

const WP_BASE = process.env.NEXT_PUBLIC_WP_API_URL;

export async function GET() {
  if (!WP_BASE) {
    return NextResponse.json({ error: "WP API not configured" }, { status: 500 });
  }

  try {
    const upstream = await fetch(`${WP_BASE}/categories?per_page=100`, {
      next: { revalidate: 3600 },
    });

    if (!upstream.ok) {
      return NextResponse.json({ error: "Upstream error" }, { status: upstream.status });
    }

    const data = await upstream.json();

    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=300",
      },
    });
  } catch {
    return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 });
  }
}
