import { createContext, useContext } from "react";
import { useDollar } from "../hooks/useDollar";

const DollarContext = createContext();

export function DollarProvider({ children }) {
  const dollarData = useDollar();

  return (
    <DollarContext.Provider value={dollarData}>
      {children}
    </DollarContext.Provider>
  );
}

export function useDollarContext() {
  const context = useContext(DollarContext);

  if (!context) {
    throw new Error("useDollarContext debe usarse dentro de DollarProvider");
  }

  return context;
}