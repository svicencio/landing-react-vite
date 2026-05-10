import { memo } from "react"; // es parte de la librería React
import { useItemsContext } from "../context/ItemsContext";

function Item({ item }) {
  const { deleteItem } = useItemsContext();

  return (
    <div>
      {item.name}
      <button onClick={() => deleteItem(item.id)}>Eliminar</button>
    </div>
  );
}

export default memo(Item);