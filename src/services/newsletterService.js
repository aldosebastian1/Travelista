const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function normalizeEmail(email) {
  return String(email || "")
    .trim()
    .toLowerCase();
}

export function validateNewsletterEmail(email) {
  const normalizedEmail = normalizeEmail(email);

  if (!normalizedEmail || !emailRegex.test(normalizedEmail)) {
    return {
      ok: false,
      message: "Email tidak valid. Silakan periksa kembali.",
      email: normalizedEmail,
    };
  }

  return {
    ok: true,
    email: normalizedEmail,
  };
}

export async function subscribeNewsletter(email) {
  const validation = validateNewsletterEmail(email);

  if (!validation.ok) {
    return validation;
  }

  // Placeholder persistence: replace with DB/ESP integration (Mailchimp, Resend, etc.)
  return {
    ok: true,
    email: validation.email,
    message: "Terima kasih. Anda berhasil terdaftar di jurnal perjalanan kami.",
  };
}
