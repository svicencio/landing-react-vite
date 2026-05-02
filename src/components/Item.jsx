import { useState } from "react";

function Item({ item, onDelete }) {

  const [removing, setRemoving] = useState(false);

  const handleDelete = () => {
    setRemoving(true);

    setTimeout(() => {
      onDelete(item.id);
    }, 300);
  };

  return (
    <li className={`card item-row ${removing ? "fade-out" : "fade-in"}`}>

      <span className="item-text">
        {item.name} - {item.category}
      </span>

      <button className="delete-btn" onClick={handleDelete}>
        ✕
      </button>

    </li>
  );
}

export default Item;