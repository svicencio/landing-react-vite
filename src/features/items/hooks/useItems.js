import { useState, useEffect } from "react";

export function useItems() {

  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("items");
    return saved
      ? JSON.parse(saved)
      : [
          { id: 1, name: "Laptop", category: "tech" },
          { id: 2, name: "Polera", category: "ropa" },
          { id: 3, name: "Mouse", category: "tech" },
        ];
  });

  const addItem = (name, category) => {
    if (!name.trim()) return;

    const newItem = {
      id: Date.now(),
      name,
      category,
    };

    setItems(prev => [newItem, ...prev]);
  };

  const deleteItem = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return {
    items,
    addItem,
    deleteItem
  };
}