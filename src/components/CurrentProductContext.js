import React, { createContext, useState } from "react"

export const CurrentProductContext = createContext();

export function CurrentProductProvider(props) {
  const [currentProduct, setCurrentProduct] = useState({});

  return (
    <CurrentProductContext.Provider value={[currentProduct, setCurrentProduct]}>
      {props.children}
    </CurrentProductContext.Provider>
  )
}