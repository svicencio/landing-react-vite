import { useFilterContext } from "../context/FilterContext";

function Filter() {
  const { category, setCategory, search, setSearch } = useFilterContext();
  return (
    <div>
      {/* Filtros por categoría */}
      <div className="filters">
        <button
          className={category === "all" ? "active" : ""}
          onClick={() => setCategory("all")}
        >
          Todos
        </button>
        <button
          className={category === "tech" ? "active" : ""}
          onClick={() => setCategory("tech")}
        >
          Tech
        </button>
        <button
          className={category === "ropa" ? "active" : ""}
          onClick={() => setCategory("ropa")}
        >
          Ropa
        </button>
      </div>

      {/* Búsqueda */}
      <input
        type="text"
        placeholder="Buscar..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
export default Filter;
