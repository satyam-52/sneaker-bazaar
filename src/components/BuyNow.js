/**@jsxRuntime classic*/
/**@jsx jsx*/

import { jsx, css } from "@emotion/react";
import { useContext, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { SAuthContext } from "./SuccessAuthContext";
import { useHistory } from "react-router";
import { OrdersContext } from "./OrdersContext";
import sha1 from "crypto-js/sha1";
import { BuyNowContext } from "./BuyNowContext";

function BuyNow() {
  const history = useHistory();
  // eslint-disable-next-line
  const [currentUser, setCurrentUser] = useContext(SAuthContext);
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const [expDate, setExpDate] = useState("");
  // eslint-disable-next-line
  const [payment, setPayment] = useState({});
  const [upiId, setUpiId] = useState("");
  const [cod, setCod] = useState("Standard Delivery");
  const [orders, setOrders] = useContext(OrdersContext);
  const [product, setProduct] = useContext(BuyNowContext);

  const generateRandomID = () => {
    var current_date = new Date().valueOf().toString();
    var random = Math.random().toString();
    // console.log(sha1(current_date, random).toString());
    return sha1(current_date, random).toString().toUpperCase();
  };

  const getTimestamp = () => {
    let newDate = new Date();
    let seconds = newDate.getSeconds();
    let minutes = newDate.getMinutes();
    let hours = newDate.getHours();
    let day = newDate.getDate();
    let month = newDate.getMonth();
    let year = newDate.getFullYear();
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (hours < 10) {
      hours = `0${hours}`;
    }
    if (day < 10) {
      day = `0${day}`;
    }
    if (month < 10) {
      month = `0${month + 1}`;
    }
    let formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    // console.log(formattedDate);
    return formattedDate;
  };

  const addToOrders = (type) => {
    setOrders([
      ...orders,
      {
        type: type,
        order_id: generateRandomID(),
        timestamp: getTimestamp(),
        products: [{...product}],
      },
    ]);
  };

  const debitCardSubmit = (e) => {
    e.preventDefault();
    setPayment({
      type: "Debit Card",
      props: {
        cardNumber: cardNumber,
        cvv: cvv,
        expDate: expDate,
      },
    });
    addToOrders("Debit Card");
    // setBasket([]);
    setProduct({});
    history.replace("/sneaker-bazaar/orders");
  };

  const upiSubmit = (e) => {
    e.preventDefault();
    setPayment({
      type: "BHIM UPI",
      props: {
        upiId: upiId,
      },
    });
    addToOrders("BHIM UPI");
    // setBasket([]);
    setProduct({});
    history.replace("/sneaker-bazaar/orders");
  };

  const codSubmit = (e) => {
    e.preventDefault();
    setPayment({
      type: "Cash on Delivery",
      props: {
        cod: cod,
      },
    });
    addToOrders("Cash on Delivery");
    // setBasket([]);
    setProduct({})
    history.replace("/sneaker-bazaar/orders");
  };

  const getCurrentDate = () => {
    let newDate = new Date();
    let month = newDate.getMonth();
    let year = newDate.getFullYear();

    if (month + 1 < 10) {
      month = String(month + 1);
      month = `0${month}`;
    } else {
      month = month + 1;
    }
    return `${year}-${month}`;
  };

  return (
    <div className="checkout" css={CSS}>
      <h2>Checkout</h2>
      <div className="checkout">
        <div className="order">
          <h3>My Products</h3>
          <div className="order__product">
            <div className="img__cont">
              <img src={product.img} alt={product.header} />
            </div>
            <div className="product__detail">
              <p className="header">{product.header}</p>
              <div className="rating">
                {Array(5)
                  .fill()
                  .map((_, i) =>
                    i < product.rating ? (
                      <i key={i} className="fa fa-star"></i>
                    ) : (
                      <i key={i} className="far fa-star"></i>
                    )
                  )}
              </div>
              <p className="price">
                <CurrencyFormat
                  thousandSeparator={true}
                  allowNegative={false}
                  prefix="₹"
                  value={product.price}
                  displayType="text"
                />
              </p>
            </div>
          </div>
        </div>
        <div className="total__payment-bundle">
          <div className="personal__details">
            <h3>Personal Details</h3>
            <div className="amount__address-bundle">
              <p className="total__header">
                Total Amount <span>:</span>
              </p>
              <p className="amount">
                <CurrencyFormat
                  thousandSeparator={true}
                  allowNegative={false}
                  prefix="₹"
                  suffix="/-"
                  value={product.price}
                  displayType="text"
                />
              </p>
              <p className="address__header">
                Address <span>:</span>
              </p>
              <p className="address">{currentUser.address}</p>
            </div>
          </div>

          <div className="col">
            <h3>Payment Mode</h3>
            <div className="tabs">
              <div className="tab">
                <input type="radio" id="rd1" name="rd" />
                <label className="tab-label" htmlFor="rd1">
                  Debit Card
                </label>
                <form onSubmit={debitCardSubmit} className="tab-content">
                  <label htmlFor="card__number">Enter Card Number</label>
                  <input
                    id="ccn"
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9\s]{16}"
                    autoComplete="cc-number"
                    maxLength="16"
                    placeholder="xxxx xxxx xxxx xxxx"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required={true}
                  />
                  <label htmlFor="cvv">Enter CVV</label>
                  <input
                    type="password"
                    inputMode="numeric"
                    name="cvv"
                    pattern="[0-9]{3,4}"
                    maxLength="4"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                  />
                  <label htmlFor="exp__date">Enter Expiry Date</label>
                  <input
                    type="month"
                    name="exp__date"
                    min={getCurrentDate()}
                    value={expDate}
                    onChange={(e) => setExpDate(e.target.value)}
                  />
                  <button onClick={debitCardSubmit} type="submit">
                    Confirm Order
                  </button>
                </form>
              </div>
              <div className="tab">
                <input type="radio" id="rd2" name="rd" />
                <label className="tab-label" htmlFor="rd2">
                  BHIM UPI
                </label>
                <form onSubmit={upiSubmit} className="tab-content">
                  <label htmlFor="upiid">UPI ID</label>
                  <input
                    type="text"
                    pattern="^[a-zA-Z\.]{3,}[@]{1}[a-zA-Z]{3,}$"
                    name="upiid"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                  />
                  <button onClick={upiSubmit} type="submit">
                    Confirm Order
                  </button>
                </form>
              </div>
              <div className="tab">
                <input type="radio" id="rd3" name="rd" />
                <label className="tab-label" htmlFor="rd3">
                  Cash On Delivery
                </label>
                <form onSubmit={codSubmit} className="tab-content">
                  <div className="form__group">
                    <input
                      type="radio"
                      name="sd"
                      value="One Day Delivery"
                      onChange={(e) => setCod(e.target.value)}
                    />
                    <label htmlFor="od">One Day Delivery</label>
                  </div>
                  <div className="form__group">
                    <input
                      type="radio"
                      name="sd"
                      value="Standard Delivery"
                      onChange={(e) => setCod(e.target.value)}
                    />
                    <label htmlFor="sd">Standard Delivery</label>
                  </div>
                  <button onClick={codSubmit} type="submit">
                    Confirm Order
                  </button>
                </form>
              </div>
              <div className="tab">
                <input type="radio" id="rd4" name="rd" />
                <label htmlFor="rd4" className="tab-close">
                  Close others &times;
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CSS = css`
  font-family: "Work Sans", sans-serif;
  padding: 0 1em 1em;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 8.5rem;

  h2 {
    font-size: 1.8rem;
    font-weight: 700;
    width: fit-content;
    margin: 15px 0;
  }

  h2::after {
    content: "";
    height: 3px;
    width: 50%;
    display: block;
    background-color: rgb(6, 214, 160);
  }

  .checkout {
    display: flex;
    justify-content: center;
    /* align-items: center; */
  }

  .order {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 25px 0;
  }

  h3 {
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 400;
    width: fit-content;
    margin: 15px 0;
  }

  h3::after {
    content: "";
    height: 3px;
    width: 50%;
    background-color: #ef476f;
    display: block;
  }

  .order__product {
    display: flex;
    padding: 20px 0;
    width: calc(100% - 30px);
    border-bottom: 1px solid lightgray;
  }

  .img__cont {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(6, 214, 160, 0.2);

    height: 180px;
    width: 180px;
    margin-right: 10px;
    border-radius: 2px;
    cursor: pointer;
  }

  img {
    min-width: 177px;
    height: 170px;
  }

  .product__details {
    padding: 20px;
  }

  .header {
    font-size: 20px;
    font-weight: 700;
    color: #073b4c;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .header:hover {
    color: #118ab2;
  }

  .rating {
    display: flex;
  }

  i.fa-star {
    color: rgb(6, 214, 160);
    margin: 10px 0;
  }

  i.fa-star:before {
    font-size: 1.1rem;
  }

  .price {
    font-size: 18px;
  }

  .amount__address-bundle {
    background-color: rgba(6, 214, 160, 0.2);
    border: 1px solid black;
    padding: 20px 10px;
    border-radius: 2px;
  }

  .total__header,
  .address__header {
    text-transform: uppercase;
    width: fit-content;
    margin: 5px 0;
    font-size: 18px;
  }

  .total__header::after {
    content: "";
    height: 1.5px;
    width: 50%;
    background-color: #ef476f;
    display: block;
  }

  .address__header::after {
    content: "";
    height: 1.5px;
    width: 50%;
    background-color: #ef476f;
    display: block;
  }

  p > span {
    color: #ef476f;
    font-weight: 700;
  }

  .amount {
    font-weight: 700;
  }

  #rd1,
  #rd2,
  #rd3,
  #rd4 {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }
  .row {
    display: flex;
  }
  .row .col {
    flex: 1;
  }
  .row .col:last-child {
    margin-left: 1em;
  }
  /* Accordion styles */
  .tabs {
    border-radius: 2px;
    overflow: hidden;
    border: 1px solid black;
    /* box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5); */
  }
  .tab {
    width: 100%;
    color: #073b4c;
    overflow: hidden;
  }
  .tab-label {
    display: flex;
    justify-content: space-between;
    padding: 1em;
    background: rgba(6, 214, 160, 0.2);
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    /* Icon */
  }
  .tab-label:hover {
    background: rgba(6, 214, 160, 0.5);
  }
  .tab-label::after {
    content: "\\276F";
    width: 1em;
    height: 1em;
    text-align: center;
    transition: all 0.35s;
  }
  .tab-content {
    max-height: 0;
    padding: 0 1em;
    color: #073b4c;
    background: white;
    transition: all 0.35s;
    display: flex;
    flex-direction: column;
    width: 350px;
  }

  .tab-content > input {
    padding: 5px;
    border: 1px solid #073b4c;
    transition: all 0.3s ease;
  }

  .tab-content > input:hover {
    border: 1px solid #ef476f;
  }

  .tab-content > input:focus {
    outline: none;
    border: 1px solid #ef476f;
  }

  .tab-content > input[type="date"] {
    background-color: white;
  }

  .form__group > input[type="radio"]:checked + label {
    color: #ef476f;
  }

  .tab-close {
    display: flex;
    justify-content: flex-end;
    padding: 1em;
    font-size: 0.75em;
    background: rgba(6, 214, 160, 0.2);
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .tab-close:hover {
    background: rgba(6, 214, 160, 0.5);
  }

  input:checked + .tab-label {
    background: rgba(6, 214, 160, 0.5);
  }
  input:checked + .tab-label::after {
    transform: rotate(90deg);
  }
  input:checked ~ .tab-content {
    max-height: 100vh;
    padding: 1em;
  }

  button {
    font-family: "Work Sans", sans-serif;
    font-size: 1.2rem;
    margin-top: 15px;
    padding: 5px 5px;
    cursor: pointer;
    border: none;
    background-color: rgba(6, 214, 160, 0.5);
    text-transform: uppercase;
    transition: all 0.3s ease;
  }

  button:hover {
    background-color: rgba(239, 71, 111, 0.5);
  }

  button:focus {
    outline: none;
  }

  @media screen and (max-width: 1000px) {
    .checkout {
      flex-direction: column;
    }

    .total__payment-bundle {
      display: flex;
      width: 100%;
      justify-content: space-around;
    }

    .amount__address-bundle {
      width: 350px;
      height: 194px;
      display: flex;
      flex-direction: column;
    }
  }

  @media screen and (max-width: 760px) {
    .total__payment-bundle {
      flex-direction: column;
    }

    .amount__address-bundle {
      width: 100%;
    }

    .tab-content {
      width: 100%;
      input {
        width: 100%;
      }

      input[type="radio"] {
        width: unset;
      }

      button {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 500px) {
    .img__cont {
      width: 100px;
      height: 120px;
    }

    img {
      min-width: 97px;
      height: 100px;
    }

    button {
      margin-bottom: 15px;
      padding: 5px 15px;
    }
  }
`;

export default BuyNow;
