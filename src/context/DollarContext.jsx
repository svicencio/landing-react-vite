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
  return useContext(DollarContext);
}