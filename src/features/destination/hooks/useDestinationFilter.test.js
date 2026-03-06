import { describe, expect, it } from "vitest";
import { filterDestinations } from "./useDestinationFilter";

const items = [
  {
    id: 1,
    name: "Bali Escape",
    location: "Bali, Indonesia",
    category: "Alam & Budaya",
    priceNumeric: 3000000,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Tokyo Winter",
    location: "Tokyo, Jepang",
    category: "Internasional",
    priceNumeric: 9000000,
    rating: 4.9,
  },
  {
    id: 3,
    name: "Raja Ampat Dive",
    location: "Papua, Indonesia",
    category: "Bahari",
    priceNumeric: 7000000,
    rating: 4.7,
  },
];

describe("filterDestinations", () => {
  it("filters by category", () => {
    const result = filterDestinations(items, {
      activeCategory: "Internasional",
      searchQuery: "",
      sortBy: "default",
    });

    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(2);
  });

  it("filters by search query across name/location/category", () => {
    const result = filterDestinations(items, {
      activeCategory: "all",
      searchQuery: "papua",
      sortBy: "default",
    });

    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(3);
  });

  it("sorts by ascending price", () => {
    const result = filterDestinations(items, {
      activeCategory: "all",
      searchQuery: "",
      sortBy: "price-asc",
    });

    expect(result.map((item) => item.id)).toEqual([1, 3, 2]);
  });

  it("sorts by highest rating", () => {
    const result = filterDestinations(items, {
      activeCategory: "all",
      searchQuery: "",
      sortBy: "rating",
    });

    expect(result.map((item) => item.id)).toEqual([2, 1, 3]);
  });
});
