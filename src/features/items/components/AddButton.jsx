import { useState } from "react";
import { useItemsContext } from "../context/ItemsContext";
import { useCallback } from "react";
import { useEffect } from "react";

function AddButton() {
  const { addItem } = useItemsContext();

  const [newCategory, setNewCategory] = useState("tech");
  const [newName, setNewName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => setMessage(""), 2000);

    return () => clearTimeout(timer);
  }, [message]);

  const handleAdd = useCallback(() => {
    if (!newName.trim()) return;

    addItem(newName, newCategory);

    setMessage(`"${newName}" agregado en ${newCategory}`);
    setNewName("");
  }, [newName, newCategory, addItem]);

  return (
    <>
      <input value={newName} onChange={(e) => setNewName(e.target.value)} />

      <select
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
      >
        <option value="tech">Tech</option>
        <option value="ropa">Ropa</option>
      </select>

      <button onClick={handleAdd}>Agregar</button>

      {message && <p>{message}</p>}
    </>
  );
}

export default AddButton;
