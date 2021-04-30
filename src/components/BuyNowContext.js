import { createContext, useState } from "react"

export const BuyNowContext = createContext();

export function BuyNowProvider(props) {
  const [product, setProduct] = useState({});



  return (
    <BuyNowContext.Provider value={[product, setProduct]}>
      {props.children}
    </BuyNowContext.Provider>
  )
}