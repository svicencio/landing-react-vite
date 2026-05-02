import { ItemsContext } from "./ItemsContext";
import { useItems } from "../hooks/useItems";

export function ItemsProvider({ children }) {
  const itemsData = useItems();

  return (
    <ItemsContext.Provider value={itemsData}>
      {children}
    </ItemsContext.Provider>
  );
}