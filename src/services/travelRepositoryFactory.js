import { assertTravelRepositoryContract } from "./travelRepository";
import { createConstantsTravelRepository } from "./constantsTravelRepository";
import { createApiTravelRepository } from "./apiTravelRepository";

export function normalizeTravelDataSource(source) {
  const normalized = String(source || "constants")
    .trim()
    .toLowerCase();

  if (normalized === "api") return "api";
  return "constants";
}

export function createTravelRepositoryFromSource(source, options = {}) {
  const normalizedSource = normalizeTravelDataSource(source);

  if (normalizedSource === "api") {
    const apiOptions = {
      fallbackRepository: createConstantsTravelRepository(),
      ...options.apiOptions,
    };

    return assertTravelRepositoryContract(createApiTravelRepository(apiOptions));
  }

  return assertTravelRepositoryContract(createConstantsTravelRepository());
}
