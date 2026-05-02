function AddButton({
  onAdd,
  newCategory,
  setNewCategory,
  newName,
  setNewName,
}) {
  return (
    <div>
      <input
        placeholder="Nombre del producto"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />

      <select
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
      >
        <option value="tech">Tech</option>
        <option value="ropa">Ropa</option>
      </select>

      <button onClick={onAdd} disabled={!newName.trim()}>
        Agregar item
      </button>
    </div>
  );
}

export default AddButton;
