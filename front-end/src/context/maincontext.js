import { createContext, useState, useEffect } from "react";

export const MainContext = createContext();

    const BASE_URL = 'http://localhost:3000'


export function MainContextProvider({ children }) {
  const [tipoConta, setTipoConta] = useState(null);
  const [eventos, setEventos] = useState([])

   useEffect(() => {
        fetchEventos();
    }, []);

    const fetchEventos = async () => {
        try {
            const response = await fetch(`${BASE_URL}/eventos`);
            if (!response.ok) {
                throw new Error('Erro fetching eventos');
            }
            const data = await response.json();
            setEventos(data.eventos);
        }
        catch (error) {
            console.error('Erro fetching eventos');
        }
    };

  return (
    <MainContext.Provider value={[tipoConta, setTipoConta]}>
      {children}
    </MainContext.Provider>
  );
}
