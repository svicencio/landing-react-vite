import { useDollarContext } from "./context/DollarContext";

function Header() {
  const { dollar, loading, error } = useDollarContext();
  return (
    <>
      <h1>Productos</h1>

      <h2>
        {loading && "Cargando dólar..."}
        {error && error}
        {!loading && !error && `$${dollar}`}
      </h2>
    </>
  );
}

export default Header;
