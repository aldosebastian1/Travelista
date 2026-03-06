import { describe, expect, it } from "vitest";
import { createApiTravelRepository } from "./apiTravelRepository";

describe("apiTravelRepository skeleton", () => {
  it("delegates to fallback repository for safe behavior", () => {
    const fallbackRepository = {
      getList: () => [{ id: 1 }],
      getById: () => ({ id: 1 }),
      getCategories: () => [{ id: "all", label: "Semua" }],
    };

    const repository = createApiTravelRepository({ fallbackRepository });

    expect(repository.getList()).toEqual([{ id: 1 }]);
    expect(repository.getById(1)).toEqual({ id: 1 });
    expect(repository.getCategories()).toEqual([{ id: "all", label: "Semua" }]);
  });

  it("maps valid API client response into internal model", () => {
    const fallbackRepository = {
      getList: () => [{ id: 1 }],
      getById: () => ({ id: 1 }),
      getCategories: () => [{ id: "all", label: "Semua" }],
    };

    const apiClient = {
      getPackages: () => [
        {
          id: 100,
          name: "API Package",
          price: "Rp 5.000.000",
          priceNumeric: 5000000,
          location: "Bali",
          category: "Alam & Budaya",
          duration: "4 Hari",
          rating: 4.8,
          reviewCount: 20,
          updatedAt: "2026-03-06",
          image: "https://example.com/image.jpg",
          description: "API item",
          highlights: ["Beach"],
          included: ["Hotel"],
        },
      ],
      getPackageById: () => ({ id: 100, name: "API Package" }),
      getCategories: () => [{ id: "all", label: "Semua" }],
    };

    const repository = createApiTravelRepository({ fallbackRepository, apiClient });

    expect(repository.getList()[0].id).toBe(100);
    expect(repository.getById(100)?.id).toBe(100);
    expect(repository.getCategories()).toEqual([{ id: "all", label: "Semua" }]);
  });

  it("falls back when API response is invalid", () => {
    const fallbackRepository = {
      getList: () => [{ id: 1 }],
      getById: () => ({ id: 1 }),
      getCategories: () => [{ id: "all", label: "Semua" }],
    };

    const apiClient = {
      getPackages: () => ({ broken: true }),
      getPackageById: () => null,
      getCategories: () => ({ broken: true }),
    };

    const repository = createApiTravelRepository({ fallbackRepository, apiClient });

    expect(repository.getList()).toEqual([{ id: 1 }]);
    expect(repository.getById(1)).toEqual({ id: 1 });
    expect(repository.getCategories()).toEqual([{ id: "all", label: "Semua" }]);
  });
});
