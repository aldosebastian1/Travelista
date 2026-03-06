import { testimonials } from "../constants";
import { assertTravelRepositoryContract } from "./travelRepository";
import { createTravelRepositoryFromSource } from "./travelRepositoryFactory";

const TRAVEL_DATA_SOURCE = process.env.NEXT_PUBLIC_TRAVEL_DATA_SOURCE || "constants";

const defaultTravelRepository = assertTravelRepositoryContract(
  createTravelRepositoryFromSource(TRAVEL_DATA_SOURCE),
);

let activeTravelRepository = defaultTravelRepository;

export function setTravelRepository(repository) {
  activeTravelRepository = assertTravelRepositoryContract(repository);
}

export function getTravelRepository() {
  return activeTravelRepository;
}

export function getTravelPackages() {
  return activeTravelRepository.getList();
}

export function getTravelPackageById(id) {
  return activeTravelRepository.getById(id);
}

export function getCategories() {
  return activeTravelRepository.getCategories();
}

export function getTestimonials() {
  return testimonials;
}
