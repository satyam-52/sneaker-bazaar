/**@jsxRuntime classic*/
/**@jsx jsx*/

import { jsx, css } from "@emotion/react";
import Order from "./Order";
import { OrdersContext } from "./contexts/OrdersContext";
import { useContext, useEffect } from "react";

function Orders() {
  // eslint-disable-next-line
  const [orders, setOrders] = useContext(OrdersContext);
  useEffect(() => window.scrollTo(0, 0), [])



  return (
    <div className="body" css={CSS}>
      <h1>{orders[0] !== undefined ? "Your Orders" : "No Orders yet.."}</h1>
      <div className="orders">
        {/* <!-- Component from here --> */}
        {orders.map((order, i) => (
          <Order order={order} key={i} />
        ))}
        {/* <!-- Component END --> */}
      </div>
    </div>
  );
}

const CSS = css`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  margin-top: 8.8rem;
  font-family: "Work Sans", sans-serif;

  h1 {
    font-size: 2rem;
    width: fit-content;
  }

  h1::after {
    content: "";
    width: 50%;
    height: 4px;
    background-color: rgba(239, 71, 111, 0.5);
    display: block;
    margin-left: 3px;
  }

  .order__tile {
    background-color: rgba(6, 214, 160, 0.2);
    border: 1px solid lightgray;
    border-radius: 4px;
    padding: 25px;
    margin: 15px 0;
  }

  .order__container {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (max-width: 750px) {
    .order__container {
      flex-direction: column;
    }
  }

  .order__details {
    width: 70%;
  }

  @media screen and (max-width: 750px) {
    .order__details {
      width: 100%;
    }
  }

  .order__id {
    display: flex;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 750px) {
    .order__id {
      overflow: scroll;
    }
  }

  .order__id > p {
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: uppercase;
    width: fit-content;
  }

  .order__id > p::after {
    content: "";
    height: 3px;
    width: 50%;
    background-color: rgba(6, 214, 160, 0.5);
    display: block;
    margin-left: 2px;
  }

  .order__id > span {
    font-weight: 400;
    font-size: 1.1rem;
    margin-top: 2px;
  }

  .product {
    display: flex;
    margin: 10px 0 0 0;
    padding-bottom: 10px;
    border-bottom: 1px solid lightgray;
  }

  .img__container {
    background-color: white;
    border: 1px solid rgba(6, 214, 160, 0.5);
    height: 180px;
    width: 180px;
    overflow: hidden;
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
  }

  img {
    height: 170px;
  }

  @media screen and (max-width: 750px) {
    .img__container {
      height: 100px;
      width: 100px;
    }

    img {
      height: 90px;
    }
  }

  .header {
    width: 100%;
    max-width: 550px;

    @media screen and (max-width: 1140px) {
      max-width: 450px;
    }

    @media screen and (max-width: 1007px) {
      max-width: 350px;
    }

    @media screen and (max-width: 860px) {
      max-width: 290px;
    }

    @media screen and (max-width: 750px) {
      max-width: 500px;
    }

    @media screen and (max-width: 690px) {
      max-width: 400px;
    }

    @media screen and (max-width: 690px) {
      max-width: 350px;
    }

    @media screen and (max-width: 550px) {
      max-width: 250px;
    }

    @media screen and (max-width: 450px) {
      max-width: 150px;
    }
  }

  .header > p {
    font-size: 1.3rem;
    font-weight: 600;
    color: #073b4c;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .header > p:hover {
    color: #118ab2;
  }

  .price > p {
    font-size: 1.1rem;
    margin-top: 5px;
  }

  .amount-cancel {
    /* border: 1px solid black; */
    width: 29%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    background-color: rgba(239, 71, 111, 0.2);
  }

  @media screen and (max-width: 750px) {
    .amount-cancel {
      width: 100%;
    }
  }

  .total__amount > h3 {
    font-size: 1.8rem;
    width: fit-content;
  }

  .total__amount > h3::after {
    content: "";
    width: 50%;
    height: 3px;
    background-color: rgba(6, 214, 160, 0.5);
    display: block;
    margin-left: 3px;
  }

  .total__amount > p {
    font-size: 1.4rem;
    margin-top: 10px;
  }

  .cancel__order > button {
    font-size: 1.1rem;
    padding: 10px 10px;
    width: 100%;
    text-transform: uppercase;
    border: none;
    cursor: pointer;
    background-color: rgba(6, 214, 160, 0.5);
    transition: all 0.3s ease;
  }

  .cancel__order > button:focus {
    outline: none;
  }

  .cancel__order > button:hover {
    background-color: rgba(239, 71, 111, 0.5);
  }

  @media screen and (max-width: 750px) {
    .cancel__order > button {
      margin-top: 15px;
    }
  }

  .payment__type-timestamp {
    display: flex;
    justify-content: space-between;
    padding: 10px 0 0 0;
  }

  .payment__mode,
  .timestamp {
    display: flex;
  }

  .payment,
  .time {
    padding-top: 3px;
  }

  @media screen and (max-width: 750px) {
    .payment__type-timestamp {
      flex-direction: column;
      margin-top: 10px;
      border-top: 1px solid lightgray;
    }

    .timestamp {
      margin-top: 10px;
    }
  }
`;

export default Orders;
