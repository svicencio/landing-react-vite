import "./App.css";
import Container from "./components/Container";
import Header from "./components/Header";
import Section from "./components/Section";
import { useState } from "react";
import AddButton from "./components/AddButton";
import ItemList from "./components/ItemList";
import Filter from "./components/Filter";
import { useContext } from "react";
import { ItemsContext } from "./context/ItemsContext";

function App() {
  const { addItem } = useContext(ItemsContext);

  // Categoria
  const [newCategory, setNewCategory] = useState("tech");

  // Nombre
  const [newName, setNewName] = useState("");

  // Borrar item
  const [message, setMessage] = useState("");

  const handleAdd = () => {
    if (!newName.trim()) return;

    addItem(newName, newCategory);

    setMessage(`"${newName}" agregado en ${newCategory}`);

    setNewName("");

    setTimeout(() => setMessage(""), 2000);
  };

  return (
      <Container>
        <Header dollar={dollar} loading={loading} error={error} />

        <Section>
          <Filter />
        </Section>

        <Section>
          <AddButton
            onAdd={handleAdd}
            newCategory={newCategory}
            setNewCategory={setNewCategory}
            newName={newName}
            setNewName={setNewName}
          />
        </Section>

        <Section>{message && <p className="feedback">{message}</p>}</Section>

        <Section>
          <ItemList />
        </Section>
      </Container>
  );
}
export default App;
