/**@jsxRuntime classic*/
/**@jsx jsx*/

import { jsx } from "@emotion/react";
import CurrencyFormat from "react-currency-format";

function OrderProduct(product) {



  return (
    // CSS in Orders.js
    <div className="product">
      <div className="img__container">
        <img src={product.product.img} alt={product.product.header} />
      </div>
      <div className="product__details">
        <div className="header">
          <p>{product.product.header}</p>
        </div>
        <div className="price">
          <p>
            <CurrencyFormat
              thousandSeparator={true}
              allowNegative={false}
              prefix={"₹"}
              value={product.product.price}
              displayType={"text"}
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderProduct;
