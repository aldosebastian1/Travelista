"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { submitNewsletterEmail } from "../services/newsletterClient";

/**
 * NewsletterForm
 * Extracted as a "use client" component so Footer.js stays a Server Component.
 * Handles submit client-side with a success confirmation state.
 */
export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const result = await submitNewsletterEmail(email);

      if (!result.ok) {
        setErrorMessage(result.message);
        return;
      }

      setSubmitted(true);
      setEmail("");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex items-center gap-3 py-3" role="status" aria-live="polite">
        <div className="w-6 h-6 surface-info-soft flex items-center justify-center shrink-0">
          <Check size={14} className="text-blue" aria-hidden="true" />
        </div>
        <span className="text-[0.85rem] text-slate-300 font-light">
          Terima kasih — kami akan menghubungi Anda.
        </span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="relative" aria-label="Registrasi Jurnal Perjalanan">
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Alamat email Anda"
        required
        className="input-luxury pr-10"
        aria-label="Alamat email untuk jurnal"
        aria-invalid={errorMessage ? "true" : "false"}
      />
      <button
        type="submit"
        aria-label="Kirim"
        disabled={isSubmitting}
        className="absolute right-0 bottom-3 text-slate-300 hover:text-blue transition-colors duration-500 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <ArrowRight size={16} strokeWidth={1.5} />
      </button>

      {errorMessage && (
        <p className="text-xs text-red-300 mt-2" role="alert">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
