import { createContext, useState } from "react";

export const CarContext = createContext();

export function CarProvider({ children }) {
  const [search, setSearch] = useState([]);  
  const [favourites, setFavourites] = useState([]); 

  const toggleFavourite = (car) => {
    setFavourites((prev) => {
      const exists = prev.find((item) => item.id === car.id);
      if (exists) {
        return prev.filter((item) => item.id !== car.id); 
      } else {
        return [...prev, car]; 
      }
    });
  };

  return (
    <CarContext.Provider value={{ search, setSearch, favourites, setFavourites, toggleFavourite }}>
      {children}
    </CarContext.Provider>
  );
}
