import { describe, expect, it } from "vitest";
import {
  mapApiPackageToTravelPackage,
  validateCatalogCategoriesResponse,
  validateCatalogDetailResponse,
  validateCatalogListResponse,
} from "./catalogContract";

describe("catalogContract validators", () => {
  it("validates list response", () => {
    const valid = validateCatalogListResponse([{ id: 1, name: "Bali" }]);
    const invalid = validateCatalogListResponse({ id: 1 });

    expect(valid.ok).toBe(true);
    expect(invalid.ok).toBe(false);
  });

  it("validates detail response", () => {
    const valid = validateCatalogDetailResponse({ id: 1, name: "Bali" });
    const invalid = validateCatalogDetailResponse({ id: 1 });

    expect(valid.ok).toBe(true);
    expect(invalid.ok).toBe(false);
  });

  it("validates categories response", () => {
    const valid = validateCatalogCategoriesResponse([{ id: "all", label: "Semua" }]);
    const invalid = validateCatalogCategoriesResponse([{ id: "all" }]);

    expect(valid.ok).toBe(true);
    expect(invalid.ok).toBe(false);
  });
});

describe("catalogContract mapper", () => {
  it("maps API package to internal package model with safe defaults", () => {
    const mapped = mapApiPackageToTravelPackage({
      id: 1,
      name: "Bali",
      price: "Rp 100",
      category: "Alam",
      priceNumeric: "100",
      rating: "4.8",
      highlights: ["Pantai"],
    });

    expect(mapped.id).toBe(1);
    expect(mapped.priceNumeric).toBe(100);
    expect(mapped.rating).toBe(4.8);
    expect(mapped.highlights).toEqual(["Pantai"]);
    expect(Array.isArray(mapped.included)).toBe(true);
  });
});
