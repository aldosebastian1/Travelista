import { afterEach, describe, expect, it } from "vitest";
import { createTravelRepositoryFromSource } from "./travelRepositoryFactory";
import {
  getCategories,
  getTravelPackageById,
  getTravelPackages,
  getTravelRepository,
  setTravelRepository,
} from "./travelService";

const initialRepository = getTravelRepository();

afterEach(() => {
  setTravelRepository(initialRepository);
});

describe("travelService source switching integration", () => {
  it("keeps service API stable when switching constants -> api source", () => {
    setTravelRepository(createTravelRepositoryFromSource("constants"));

    const constantsList = getTravelPackages();
    const constantsCategories = getCategories();

    setTravelRepository(createTravelRepositoryFromSource("api"));

    const apiList = getTravelPackages();
    const apiCategories = getCategories();

    expect(Array.isArray(constantsList)).toBe(true);
    expect(Array.isArray(apiList)).toBe(true);
    expect(constantsList.length).toBeGreaterThan(0);
    expect(apiList.length).toBeGreaterThan(0);
    expect(constantsCategories.length).toBeGreaterThan(0);
    expect(apiCategories.length).toBeGreaterThan(0);
  });

  it("uses api client data when valid and falls back safely when invalid", () => {
    const validApiClient = {
      getPackages: () => [
        {
          id: 909,
          name: "API Bali",
          price: "Rp 10.000.000",
          priceNumeric: 10000000,
          location: "Bali",
          category: "Alam & Budaya",
          duration: "5 Hari",
          rating: 4.9,
          reviewCount: 10,
          updatedAt: "2026-03-06",
          image: "https://example.com/bali.jpg",
          description: "API catalog item",
          highlights: ["Beach"],
          included: ["Hotel"],
        },
      ],
      getPackageById: () => ({ id: 909, name: "API Bali" }),
      getCategories: () => [{ id: "all", label: "Semua" }],
    };

    setTravelRepository(
      createTravelRepositoryFromSource("api", {
        apiOptions: {
          apiClient: validApiClient,
        },
      }),
    );

    expect(getTravelPackages()[0].id).toBe(909);
    expect(getTravelPackageById(909)?.id).toBe(909);

    const invalidApiClient = {
      getPackages: () => ({ broken: true }),
      getPackageById: () => null,
      getCategories: () => ({ broken: true }),
    };

    setTravelRepository(
      createTravelRepositoryFromSource("api", {
        apiOptions: {
          apiClient: invalidApiClient,
        },
      }),
    );

    expect(getTravelPackages().length).toBeGreaterThan(0);
    expect(getCategories().length).toBeGreaterThan(0);
  });
});
