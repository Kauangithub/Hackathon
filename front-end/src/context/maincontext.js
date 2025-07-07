import { createContext, useState } from "react";

export const MainContext = createContext();

export function MainContextProvider({ children }) {
  const [tipoConta, setTipoConta] = useState(null);

  return (
    <MainContext.Provider value={[tipoConta, setTipoConta]}>
      {children}
    </MainContext.Provider>
  );
}
