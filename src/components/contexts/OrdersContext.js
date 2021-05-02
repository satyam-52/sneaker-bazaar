import React, { createContext, useState } from "react";

export const OrdersContext = createContext();

export function OrdersProvider(props) {
  const [orders, setOrders] = useState([]);

  return (
    <OrdersContext.Provider value={[orders, setOrders]}>
      {props.children}
    </OrdersContext.Provider>
  );
}
