import { describe, expect, it } from "vitest";
import { isPopupWindowOpened, validateBookingIntentPayload } from "../services/bookingService";

describe("BookingForm popup behavior", () => {
  it("returns false when popup is blocked (null)", () => {
    expect(isPopupWindowOpened(null)).toBe(false);
  });

  it("returns false when popup is already closed", () => {
    expect(isPopupWindowOpened({ closed: true })).toBe(false);
  });

  it("returns true when popup opens successfully", () => {
    expect(isPopupWindowOpened({ closed: false })).toBe(true);
  });
});

describe("Booking intent payload validation", () => {
  it("returns invalid for empty payload", () => {
    const result = validateBookingIntentPayload({});

    expect(result.ok).toBe(false);
    expect(result.code).toBe("missing-package");
  });

  it("returns invalid for malformed payload", () => {
    const result = validateBookingIntentPayload({
      packageName: "Bali Escape",
      packagePrice: "Rp 3.500.000",
      departureDate: "not-a-date",
      participants: "0",
      fullName: "A",
    });

    expect(result.ok).toBe(false);
    expect(result.code).toBe("invalid-name");
  });

  it("returns valid for complete payload", () => {
    const result = validateBookingIntentPayload({
      packageName: "Bali Escape",
      packagePrice: "Rp 3.500.000",
      departureDate: "2026-04-12",
      participants: "2",
      fullName: "Rina Putri",
    });

    expect(result.ok).toBe(true);
    expect(result.payload).toEqual({
      packageName: "Bali Escape",
      packagePrice: "Rp 3.500.000",
      departureDate: "2026-04-12",
      participants: "2",
      fullName: "Rina Putri",
    });
  });
});
