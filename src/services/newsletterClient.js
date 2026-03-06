const SIMPLE_EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitNewsletterEmail(email, fetchImpl = fetch) {
  const trimmedEmail = (email || "").trim();

  if (!trimmedEmail || !SIMPLE_EMAIL_REGEX.test(trimmedEmail)) {
    return {
      ok: false,
      code: "invalid-email",
      message: "Email tidak valid. Silakan periksa kembali.",
    };
  }

  try {
    const response = await fetchImpl("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: trimmedEmail }),
    });

    const data = await response.json();

    if (!response.ok || !data?.ok) {
      return {
        ok: false,
        code: "request-failed",
        message: data?.message || "Terjadi kesalahan. Coba beberapa saat lagi.",
      };
    }

    return {
      ok: true,
      message: data?.message || "Email berhasil terdaftar.",
    };
  } catch {
    return {
      ok: false,
      code: "network-error",
      message: "Terjadi kesalahan jaringan. Periksa koneksi Anda.",
    };
  }
}
