import {createContext, useState} from "react"

export const FavoriteContext = createContext();

export function FavoriteProvider(props) {
  const [favorites, setFavorites] = useState({});

  return (
    <FavoriteContext.Provider value={[favorites, setFavorites]}>
      {props.children}
    </FavoriteContext.Provider>
  )
}