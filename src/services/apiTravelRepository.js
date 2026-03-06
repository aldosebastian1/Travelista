import { createConstantsTravelRepository } from "./constantsTravelRepository";
import {
  mapApiPackageToTravelPackage,
  validateCatalogCategoriesResponse,
  validateCatalogDetailResponse,
  validateCatalogListResponse,
} from "./catalogContract";

/**
 * API repository skeleton.
 *
 * Current behavior intentionally delegates to fallback repository so
 * source switching can be tested safely before real backend integration.
 */
export function createApiTravelRepository(options = {}) {
  const fallbackRepository = options.fallbackRepository || createConstantsTravelRepository();
  const apiClient = options.apiClient;

  const resolvePackagesFromApi = () => {
    if (typeof apiClient?.getPackages !== "function") return null;

    const response = apiClient.getPackages();
    const validation = validateCatalogListResponse(response);

    if (!validation.ok) return null;
    return validation.data.map(mapApiPackageToTravelPackage);
  };

  const resolvePackageByIdFromApi = (id) => {
    if (typeof apiClient?.getPackageById !== "function") return null;

    const response = apiClient.getPackageById(id);
    const validation = validateCatalogDetailResponse(response);

    if (!validation.ok) return null;
    return mapApiPackageToTravelPackage(validation.data);
  };

  const resolveCategoriesFromApi = () => {
    if (typeof apiClient?.getCategories !== "function") return null;

    const response = apiClient.getCategories();
    const validation = validateCatalogCategoriesResponse(response);

    if (!validation.ok) return null;
    return validation.data;
  };

  return {
    getList: () => resolvePackagesFromApi() || fallbackRepository.getList(),
    getById: (id) => resolvePackageByIdFromApi(id) || fallbackRepository.getById(id),
    getCategories: () => resolveCategoriesFromApi() || fallbackRepository.getCategories(),
  };
}
