import { describe, expect, it } from "vitest";
import { normalizeEmail, subscribeNewsletter, validateNewsletterEmail } from "./newsletterService";

describe("newsletterService", () => {
  it("normalizes email by trimming and lowercasing", () => {
    expect(normalizeEmail("  User.Name@Example.COM ")).toBe("user.name@example.com");
  });

  it("rejects invalid email", () => {
    const result = validateNewsletterEmail("invalid-email");

    expect(result.ok).toBe(false);
    expect(result.message).toBe("Email tidak valid. Silakan periksa kembali.");
  });

  it("accepts valid email", () => {
    const result = validateNewsletterEmail("valid@example.com");

    expect(result.ok).toBe(true);
    expect(result.email).toBe("valid@example.com");
  });

  it("subscribe returns success payload for valid email", async () => {
    const result = await subscribeNewsletter("member@example.com");

    expect(result.ok).toBe(true);
    expect(result.email).toBe("member@example.com");
    expect(result.message).toContain("berhasil terdaftar");
  });
});
