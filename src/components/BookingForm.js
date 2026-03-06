"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { isPopupWindowOpened, validateBookingIntentPayload } from "../services/bookingService";

const WHATSAPP_NUMBER = "6283839350200"; // +62 838-3935-0200

export default function BookingForm({ packageName, packagePrice }) {
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setErrorMessage("");

    const date = e.target["departure-date"].value;
    const participants = e.target["participants"].value;
    const name = e.target["full-name"].value;

    const validation = validateBookingIntentPayload({
      packageName,
      packagePrice,
      departureDate: date,
      participants,
      fullName: name,
    });

    if (!validation.ok) {
      setErrorMessage(validation.message);
      return;
    }

    // Format pesan WhatsApp
    const message = encodeURIComponent(
      `Halo Travelista! 👋\n\nSaya ingin memesan paket wisata berikut:\n\n` +
        `📦 *Paket:* ${packageName}\n` +
        `💰 *Harga:* ${packagePrice} / orang\n` +
        `📅 *Tanggal Keberangkatan:* ${date}\n` +
        `👥 *Jumlah Peserta:* ${participants} orang\n` +
        `👤 *Nama:* ${name}\n\n` +
        `Mohon informasi lebih lanjut. Terima kasih!`,
    );

    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    const openedWindow = window.open(waUrl, "_blank", "noopener,noreferrer");

    if (!isPopupWindowOpened(openedWindow)) {
      setErrorMessage("Gagal membuka WhatsApp. Izinkan pop-up browser lalu coba lagi.");
      return;
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center text-center py-6 gap-4">
        <div className="w-16 h-16 surface-info-soft flex items-center justify-center">
          <CheckCircle size={32} />
        </div>
        <div>
          <p className="font-semibold text-slate-900 mb-1">WhatsApp telah dibuka!</p>
          <p className="text-slate-500 text-sm">
            Lanjutkan percakapan dengan tim kami di WhatsApp untuk konfirmasi pemesanan Anda.
          </p>
        </div>
        <button
          onClick={() => setSubmitted(false)}
          className="text-blue hover:underline text-sm font-medium"
        >
          Pesan lagi
        </button>
      </div>
    );
  }

  return (
    <form
      aria-label={`Formulir pemesanan paket ${packageName}`}
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      {/* Nama */}
      <div>
        <label htmlFor="full-name" className="block text-sm font-medium text-slate-700 mb-2">
          Nama Lengkap
        </label>
        <input
          id="full-name"
          name="full-name"
          type="text"
          required
          placeholder="Masukkan nama lengkap Anda"
          className="input-primary"
        />
      </div>

      {/* Tanggal */}
      <div>
        <label htmlFor="departure-date" className="block text-sm font-medium text-slate-700 mb-2">
          Tanggal Keberangkatan
        </label>
        <input
          id="departure-date"
          name="departure-date"
          type="date"
          required
          min={new Date().toISOString().split("T")[0]}
          className="input-primary"
          aria-describedby="departure-hint"
        />
        <p id="departure-hint" className="text-xs text-slate-500 mt-1">
          Pilih tanggal mulai perjalanan.
        </p>
      </div>

      {/* Peserta */}
      <div>
        <label htmlFor="participants" className="block text-sm font-medium text-slate-700 mb-2">
          Jumlah Peserta
        </label>
        <select id="participants" name="participants" className="select-primary">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <option key={num} value={num}>
              {num} Orang
            </option>
          ))}
        </select>
      </div>

      {/* Submit → WhatsApp */}
      <button type="submit" className="button-whatsapp flex items-center justify-center gap-2">
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Pesan via WhatsApp
      </button>

      {errorMessage && (
        <p className="text-xs feedback-error" role="alert">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
