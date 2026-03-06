function isObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function toNumber(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

export function mapApiPackageToTravelPackage(rawPackage) {
  return {
    id: rawPackage.id,
    name: String(rawPackage.name || ""),
    price: String(rawPackage.price || "Rp 0"),
    priceNumeric: toNumber(rawPackage.priceNumeric),
    location: String(rawPackage.location || ""),
    category: String(rawPackage.category || "Lainnya"),
    duration: String(rawPackage.duration || "-"),
    rating: toNumber(rawPackage.rating),
    reviewCount: toNumber(rawPackage.reviewCount),
    updatedAt: String(rawPackage.updatedAt || ""),
    image: String(rawPackage.image || ""),
    description: String(rawPackage.description || ""),
    highlights: Array.isArray(rawPackage.highlights) ? rawPackage.highlights : [],
    included: Array.isArray(rawPackage.included) ? rawPackage.included : [],
  };
}

export function validateCatalogListResponse(response) {
  if (!Array.isArray(response)) {
    return { ok: false, error: "Catalog list response must be an array." };
  }

  const invalidItem = response.find(
    (item) => !isObject(item) || (!isNonEmptyString(item.name) && typeof item.id === "undefined"),
  );

  if (invalidItem) {
    return { ok: false, error: "Catalog list item is invalid." };
  }

  return { ok: true, data: response };
}

export function validateCatalogDetailResponse(response) {
  if (!isObject(response)) {
    return { ok: false, error: "Catalog detail response must be an object." };
  }

  if (typeof response.id === "undefined" || !isNonEmptyString(response.name)) {
    return { ok: false, error: "Catalog detail response is missing required fields." };
  }

  return { ok: true, data: response };
}

export function validateCatalogCategoriesResponse(response) {
  if (!Array.isArray(response)) {
    return { ok: false, error: "Catalog categories response must be an array." };
  }

  const invalidCategory = response.find(
    (item) => !isObject(item) || !isNonEmptyString(item.id) || !isNonEmptyString(item.label),
  );

  if (invalidCategory) {
    return { ok: false, error: "Catalog category item is invalid." };
  }

  return { ok: true, data: response };
}
