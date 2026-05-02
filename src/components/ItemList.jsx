import { useContext } from "react";
import { ItemsContext } from "../context/ItemsContext";
import { useFilterContext } from "../context/FilterContext";

export function ItemList() {
  const { deleteItem } = useContext(ItemsContext);
  const { filteredItems } = useFilterContext();

  return (
    <>
      {filteredItems.map((item) => (
        <div key={item.id}>
          {item.name}
          <button onClick={() => deleteItem(item.id)}>Eliminar</button>
        </div>
      ))}
    </>
  );
}

export default ItemList;
