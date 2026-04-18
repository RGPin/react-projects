import { createContext } from "react";

export const GlobalContext = createContext(null);

export default function ExpenseState({ children }) {
  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
}
