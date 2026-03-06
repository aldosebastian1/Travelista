import { describe, expect, it } from "vitest";
import { assertTravelRepositoryContract } from "./travelRepository";

describe("travelRepository contract", () => {
  it("accepts repository with required methods", () => {
    const repository = {
      getList: () => [],
      getById: () => null,
      getCategories: () => [],
    };

    expect(assertTravelRepositoryContract(repository)).toBe(repository);
  });

  it("throws when required method is missing", () => {
    const repository = {
      getList: () => [],
      getById: () => null,
    };

    expect(() => assertTravelRepositoryContract(repository)).toThrow(/getCategories/);
  });
});
