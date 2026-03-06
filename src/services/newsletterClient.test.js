import { describe, expect, it, vi } from "vitest";
import { submitNewsletterEmail } from "./newsletterClient";

describe("newsletterClient submit flow", () => {
  it("returns success when API responds ok", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ ok: true, message: "Berhasil" }),
    });

    const result = await submitNewsletterEmail("member@example.com", fetchMock);

    expect(result.ok).toBe(true);
    expect(result.message).toBe("Berhasil");
    expect(fetchMock).toHaveBeenCalledWith(
      "/api/newsletter",
      expect.objectContaining({ method: "POST" }),
    );
  });

  it("returns API error message when response is not ok", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: false,
      json: async () => ({ ok: false, message: "Email sudah terdaftar." }),
    });

    const result = await submitNewsletterEmail("member@example.com", fetchMock);

    expect(result.ok).toBe(false);
    expect(result.code).toBe("request-failed");
    expect(result.message).toBe("Email sudah terdaftar.");
  });

  it("returns invalid-input error and skips API call", async () => {
    const fetchMock = vi.fn();

    const result = await submitNewsletterEmail("invalid-email", fetchMock);

    expect(result.ok).toBe(false);
    expect(result.code).toBe("invalid-email");
    expect(result.message).toContain("Email tidak valid");
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
