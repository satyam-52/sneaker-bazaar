/**@jsxRuntime classic*/
/**@jsx jsx*/

import { jsx } from "@emotion/react";
import { useContext, useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import OrderProduct from "./OrderProduct";
import { OrdersContext } from "./OrdersContext";

function Order(order) {
  const [orders, setOrders] = useContext(OrdersContext);
  useEffect(() => window.scrollTo(0, 0), [])

  const cancelOrder = (e) => {
    e.preventDefault();
    let check = orders.filter((cur) => cur.order_id === order.order.order_id);
    // console.log(check);
    if (check !== {}) {
      setOrders([
        ...orders.filter((cur) => cur.order_id !== order.order.order_id),
      ]);
    } else {
      alert("Error occured!");
    }
  };

  return (
    // CSS in Orders.js
    <div className="order__tile">
      <div className="order__container">
        <div className="order__details">
          <div className="order__id">
            <p>Order ID: </p>
            <span>{order.order.order_id}</span>
          </div>
          <div className="product__container">
            {order.order.products.map((product, i) => (
              <OrderProduct product={product} key={i} />
            ))}
          </div>
        </div>
        <div className="amount-cancel">
          <div className="total__amount">
            <h3>Total Amount :</h3>
            <p>
              <CurrencyFormat
                thousandSeparator={true}
                allowNegative={false}
                prefix="₹"
                suffix="/-"
                value={order.order.products.reduce(
                  (sum, cur) => sum + cur.price,
                  0
                )}
                displayType="text"
              />
            </p>
          </div>
          <div className="cancel__order">
            <button onClick={cancelOrder}>Cancel Order</button>
          </div>
        </div>
      </div>
      <div className="payment__type-timestamp">
        <div className="payment__mode">
          <h3>Payment Mode: </h3>
          <p className="payment">{order.order.type}</p>
        </div>
        <div className="timestamp">
          <h3>Order Timestamp: </h3>
          <p className="time">{order.order.timestamp}</p>
        </div>
      </div>
    </div>
  );
}

export default Order;
