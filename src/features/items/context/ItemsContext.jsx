import { createContext, useContext } from "react";

export const ItemsContext = createContext(null);

export function useItemsContext() {
  const context = useContext(ItemsContext);

  if (!context) {
    throw new Error("useItemsContext debe usarse dentro de ItemsProvider");
  }

  return context;
}