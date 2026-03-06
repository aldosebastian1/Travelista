export function assertTravelRepositoryContract(repository) {
  const requiredMethods = ["getList", "getById", "getCategories"];

  for (const methodName of requiredMethods) {
    if (typeof repository?.[methodName] !== "function") {
      throw new Error(`travelRepository contract violation: method \"${methodName}\" is required.`);
    }
  }

  return repository;
}
