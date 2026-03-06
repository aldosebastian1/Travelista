import { describe, expect, it } from "vitest";
import { createConstantsTravelRepository } from "./constantsTravelRepository";

describe("constantsTravelRepository adapter", () => {
  it("returns list and categories from constants source", () => {
    const repository = createConstantsTravelRepository();

    expect(Array.isArray(repository.getList())).toBe(true);
    expect(Array.isArray(repository.getCategories())).toBe(true);
    expect(repository.getList().length).toBeGreaterThan(0);
    expect(repository.getCategories().length).toBeGreaterThan(0);
  });

  it("resolves item by id for string and number inputs", () => {
    const repository = createConstantsTravelRepository();
    const firstItem = repository.getList()[0];

    expect(repository.getById(firstItem.id)?.id).toBe(firstItem.id);
    expect(repository.getById(String(firstItem.id))?.id).toBe(firstItem.id);
  });
});
