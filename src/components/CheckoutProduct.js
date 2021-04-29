import React from "react";
import CurrencyFormat from "react-currency-format";

function CheckoutProduct({ id, img, header, rating, price, fav }) {
  return (
    <div className="order__product">
      <div className="img__cont">
        <img src={img} alt={header} />
      </div>
      <div className="product__detail">
        <p className="header">{header}</p>
        <div className="rating">
          {Array(5)
            .fill()
            .map((_, i) =>
              i < rating ? (
                <i key={i} className="fa fa-star"></i>
              ) : (
                <i key={i} className="far fa-star"></i>
              )
            )}
        </div>
        <p className="price"><CurrencyFormat thousandSeparator={true} allowNegative={false} prefix="₹" value={price} displayType="text" /></p>
      </div>
    </div>
  );
}

export default CheckoutProduct;
