import { NextResponse } from "next/server";
import { subscribeNewsletter } from "../../../services/newsletterService";
import { captureError } from "../../../lib/errorMonitoring";

export async function POST(request) {
  try {
    const body = await request.json();
    const result = await subscribeNewsletter(body?.email);

    if (!result.ok) {
      return NextResponse.json({ ok: false, message: result.message }, { status: 400 });
    }

    return NextResponse.json(
      {
        ok: result.ok,
        message: result.message,
      },
      { status: 200 },
    );
  } catch (error) {
    captureError(error, { route: "/api/newsletter", method: "POST" });

    return NextResponse.json(
      { ok: false, message: "Terjadi kesalahan server. Coba beberapa saat lagi." },
      { status: 500 },
    );
  }
}
