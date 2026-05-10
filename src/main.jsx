import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ItemsProvider } from "./features/items/context/ItemsProvider";
import { FilterProvider } from "./features/filters/context/FilterContext";
import { DollarProvider } from "./features/dollar/context/DollarContext";

createRoot(document.getElementById("root")).render(
  <ItemsProvider>
    <FilterProvider>
      <DollarProvider>
        <App />
      </DollarProvider>
    </FilterProvider>
  </ItemsProvider>,
);
