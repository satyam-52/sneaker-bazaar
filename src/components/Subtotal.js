/**@jsxRuntime classic*/
/**@jsx jsx*/

import { jsx, css } from "@emotion/react";
import { useContext } from "react";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";
import { BasketContext } from "./contexts/BasketContext";

function Subtotal() {
  const [basket] = useContext(BasketContext);

  return (
    <div className="subtotal" css={CSS}>
      <div className="top">
        <h2>
          Subtotal <span>(Items: {basket.length})</span>
        </h2>
        <p className="price">
          <CurrencyFormat
            thousandSeparator={true}
            allowNegative={false}
            prefix={"₹"}
            value={basket.reduce((total, cur) => total + cur.price, 0)}
            displayType="text"
          />
        </p>
        <div className="gift__wrapper">
          <input type="checkbox" name="gift" />
          <label htmlFor="gift">This is a gift.</label>
        </div>
      </div>
      <div className="bottom">
        {basket.reduce((total, cur) => total + cur.price, 0) > 1 ? (
          <Link to="/sneaker-bazaar/checkout-redirect">
          <button>Proceed to Checkout</button>
        </Link>
        ) : (
          <button>Proceed to Checkout</button>
        )}
      </div>
    </div>
  );
}

const CSS = css`
  border: 1px solid lightgray;
  background-color: rgba(6, 214, 160, 0.1);
  height: 10rem;
  padding: 10px 5px;
  font-family: "Work Sans", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .top {
    h2 {
      span {
        font-weight: 400;
        font-size: 14px;
        color: #073b4c;
      }
    }

    .price {
      font-size: 20px;
    }

    .gift__wrapper {
      margin-top: 10px;
      input {
        width: 15px;
        height: 15px;
        margin-right: 10px;
        cursor: pointer;
      }

      label {
        color: #073b4c;
      }
    }
  }

  .bottom {
    button {
      width: 100%;
      padding: 10px;
      text-transform: uppercase;
      border: none;
      background-color: rgba(239, 71, 111, 0.5);
      transition: all 0.3s ease;
      cursor: pointer;

      :focus {
        outline: none;
      }

      :hover {
        background-color: rgba(6, 214, 160, 0.5);
      }
    }
  }
`;

export default Subtotal;
