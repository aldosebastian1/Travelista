import { describe, expect, it } from "vitest";
import {
  createTravelRepositoryFromSource,
  normalizeTravelDataSource,
} from "./travelRepositoryFactory";

describe("travelRepositoryFactory", () => {
  it("defaults unknown source to constants", () => {
    expect(normalizeTravelDataSource("unknown")).toBe("constants");
    expect(normalizeTravelDataSource("")).toBe("constants");
  });

  it("supports api source", () => {
    expect(normalizeTravelDataSource("api")).toBe("api");
  });

  it("returns repository with contract methods for constants source", () => {
    const repository = createTravelRepositoryFromSource("constants");

    expect(typeof repository.getList).toBe("function");
    expect(typeof repository.getById).toBe("function");
    expect(typeof repository.getCategories).toBe("function");
  });

  it("returns repository with contract methods for api source", () => {
    const repository = createTravelRepositoryFromSource("api");

    expect(typeof repository.getList).toBe("function");
    expect(typeof repository.getById).toBe("function");
    expect(typeof repository.getCategories).toBe("function");
  });
});
