import { ReactNode, useContext, useState, createContext } from "react";

interface MainContextData {
  selectedGenreId: number;
  handleClickButton(id: number): void;
}
interface MainProviderProps {
  children: ReactNode;
}
const MainContext = createContext<MainContextData>({} as MainContextData);

export function MainProvider({ children }: MainProviderProps) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }
  return (
    <MainContext.Provider value={{ selectedGenreId, handleClickButton }}>
      {children}
    </MainContext.Provider>
  );
}
export function useMain() {
  const context = useContext(MainContext);
  return context;
}
