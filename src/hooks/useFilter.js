import { useState } from "react";

export function useFilter(items) {
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filteredItems = items.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());

    const matchCategory = category === "all" || item.category === category;

    return matchSearch && matchCategory;
  });

  return {
    category,
    setCategory,
    search,
    setSearch,
    filteredItems,
  };
}
