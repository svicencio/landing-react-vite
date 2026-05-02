import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ItemsProvider } from "./context/ItemsProvider";
import { FilterProvider } from "./context/FilterContext";
import { DollarProvider } from "./context/DollarContext";

createRoot(document.getElementById("root")).render(
  <ItemsProvider>
    <FilterProvider>
      <DollarProvider>
        <App />
      </DollarProvider>
    </FilterProvider>
  </ItemsProvider>,
);
