import { NextRequest, NextResponse } from "next/server";

const WP_BASE = process.env.NEXT_PUBLIC_WP_API_URL;

export async function GET(req: NextRequest) {
  if (!WP_BASE) {
    return NextResponse.json({ error: "WP API not configured" }, { status: 500 });
  }

  const { searchParams } = req.nextUrl;

  // Only allow known safe query params
  const allowed = ["_embed", "per_page", "page", "categories", "_fields"];
  const query = new URLSearchParams();
  for (const key of allowed) {
    const val = searchParams.get(key);
    if (val !== null) query.set(key, val);
  }

  try {
    const upstream = await fetch(`${WP_BASE}/posts?${query}`, {
      next: { revalidate: 300 },
    });

    if (!upstream.ok) {
      return NextResponse.json({ error: "Upstream error" }, { status: upstream.status });
    }

    const data = await upstream.json();

    return NextResponse.json(data, {
      headers: {
        "X-WP-Total": upstream.headers.get("X-WP-Total") ?? "0",
        "X-WP-TotalPages": upstream.headers.get("X-WP-TotalPages") ?? "0",
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=60",
      },
    });
  } catch {
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}
