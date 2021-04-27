import React, { createContext, useState } from "react"

export const BasketContext = createContext();

export function BasketProvider(props) {
  const [basket, setBasket] = useState([]);

  return (
    <BasketContext.Provider value={[basket, setBasket]}>
      {props.children}
    </BasketContext.Provider>
  )
}