import { useMemo, useState } from "react";

export function filterDestinations(items, { activeCategory, searchQuery, sortBy }) {
  let result = items;

  if (activeCategory !== "all") {
    result = result.filter((item) => item.category === activeCategory);
  }

  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    result = result.filter(
      (item) =>
        item.name.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q),
    );
  }

  if (sortBy === "price-asc") {
    result = [...result].sort((a, b) => a.priceNumeric - b.priceNumeric);
  }

  if (sortBy === "price-desc") {
    result = [...result].sort((a, b) => b.priceNumeric - a.priceNumeric);
  }

  if (sortBy === "rating") {
    result = [...result].sort((a, b) => b.rating - a.rating);
  }

  return result;
}

export default function useDestinationFilter(items) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const filtered = useMemo(
    () => filterDestinations(items, { activeCategory, searchQuery, sortBy }),
    [items, activeCategory, searchQuery, sortBy],
  );

  return {
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    filtered,
  };
}
