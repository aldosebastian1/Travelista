export function isPopupWindowOpened(openedWindow) {
  return Boolean(
    openedWindow && !openedWindow.closed && typeof openedWindow.closed !== "undefined",
  );
}

function isValidDateString(value) {
  if (!value) return false;
  const parsed = new Date(value);
  return !Number.isNaN(parsed.getTime());
}

function isValidParticipantCount(value) {
  const count = Number(value);
  return Number.isInteger(count) && count > 0;
}

export function validateBookingIntentPayload(payload) {
  const normalized = {
    packageName: String(payload?.packageName || "").trim(),
    packagePrice: String(payload?.packagePrice || "").trim(),
    departureDate: String(payload?.departureDate || "").trim(),
    participants: String(payload?.participants || "").trim(),
    fullName: String(payload?.fullName || "").trim(),
  };

  if (!normalized.packageName) {
    return { ok: false, code: "missing-package", message: "Paket perjalanan belum valid." };
  }

  if (!normalized.packagePrice) {
    return { ok: false, code: "missing-price", message: "Harga paket belum valid." };
  }

  if (normalized.fullName.length < 2) {
    return { ok: false, code: "invalid-name", message: "Nama lengkap minimal 2 karakter." };
  }

  if (!isValidDateString(normalized.departureDate)) {
    return {
      ok: false,
      code: "invalid-departure-date",
      message: "Tanggal keberangkatan tidak valid.",
    };
  }

  if (!isValidParticipantCount(normalized.participants)) {
    return { ok: false, code: "invalid-participants", message: "Jumlah peserta tidak valid." };
  }

  return {
    ok: true,
    payload: normalized,
  };
}
