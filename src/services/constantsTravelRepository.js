import { categories, travelPackages } from "../constants";

export function createConstantsTravelRepository() {
  return {
    getList: () => travelPackages,
    getById: (id) => travelPackages.find((pkg) => String(pkg.id) === String(id)),
    getCategories: () => categories,
  };
}
