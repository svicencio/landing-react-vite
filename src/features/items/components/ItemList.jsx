import Item from "./Item";
import { useFilterContext } from "../../filters/context/FilterContext";

export function ItemList() {
  const { filteredItems } = useFilterContext();

  return (
    <>
      {filteredItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </>
  );
}

export default ItemList;
