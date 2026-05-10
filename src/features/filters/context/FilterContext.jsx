import { createContext, useContext } from "react";
import { useFilter } from "../hooks/useFilter";
import { ItemsContext } from "../../items/context/ItemsContext";

const FilterContext = createContext();

export function FilterProvider({ children }) {
  // 🔹 1. Obtener items desde ItemsContext
  const { items } = useContext(ItemsContext);

  // 🔹 2. Ejecutar lógica de filtro con esos items
  const filterData = useFilter(items);

  return (
    <FilterContext.Provider value={filterData}>
      {children}
    </FilterContext.Provider>
  );
}

// Hook para consumirlo fácil
export function useFilterContext() {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error("useFilterContext debe usarse dentro de FilterProvider");
  }

  return context;
}
