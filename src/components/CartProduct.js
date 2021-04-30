/**@jsxRuntime classic*/
/**@jsx jsx*/

import { jsx, css } from "@emotion/react";
import { useContext } from "react";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";
import { CurrentProductContext } from "./CurrentProductContext";
import { BasketContext } from "./BasketContext";

function CartProduct({ id, img, header, rating, price, fav }) {
  // eslint-disable-next-line
  const [currentProduct, setCurrentProduct] = useContext(CurrentProductContext);
  const [basket, setBasket] = useContext(BasketContext);

  const headerClickHandler = () => {

    setCurrentProduct({
      id: id,
      img: img,
      header: header,
      rating: rating,
      price: price,
      fav: fav
    });
  };

  const removeProduct = () => {
    for (let i = 0; i < basket.length; i++) {
      if (Object.values(basket[i]).indexOf(img) !== -1) {
        basket.splice(i, 1);
        setBasket([...basket]);
        // console.log(basket);
        break;
      }
    }
  };

  return (
    <div className="cart__product" css={CSS}>
      <div className="img__container">
        <Link onClick={headerClickHandler} to="/selected-product">
          <img src={img} alt={header} />
        </Link>
      </div>
      <div className="cart__product-content">
        <Link onClick={headerClickHandler} to="/selected-product">
          <h2>{header}</h2>
        </Link>
        <p className="price">
          <CurrencyFormat
            thousandSeparator={true}
            allowNegative={false}
            prefix={"₹"}
            value={price}
            displayType={"text"}
          />
        </p>
        <p className="rating">
          {Array(5)
            .fill()
            .map((_, i) =>
              i < rating ? (
                <i key={i} className="fa fa-star"></i>
              ) : (
                <i key={i} className="far fa-star"></i>
              )
            )}
        </p>
        <button onClick={removeProduct}>Remove from Bag</button>
      </div>
    </div>
  );
}

const CSS = css`
  height: 35vh;
  padding-bottom: 25px;
  margin-bottom: 25px;
  border-bottom: 1px solid lightgray;
  display: flex;

  @media screen and (max-width: 950px) {
    height: 50vh;
    align-items: center;
    justify-content: center;
  }

  .img__container {
    height: 100%;
    margin-right: 15px;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 950px) {
      height: 65%;
      width: 250px;
    }

    img {
      width: 150px;

      @media screen and (max-width: 950px) {
        width: 150px;
      }
    }
  }

  .cart__product-content {
    width: 65%;
    font-family: "Work Sans", sans-serif;

    h2 {
      color: #073b4c;
      transition: all 0.3s ease;
      cursor: pointer;
      margin-bottom: 10px;

      :hover {
        color: #118ab2;
      }
    }

    .price {
      transition: all 0.3s ease;
      margin-bottom: 5px;

      :hover {
        color: #ef476f;
      }
    }

    .rating {
      color: rgba(6, 214, 160, 1);
      margin-bottom: 5px;
    }

    button {
      padding: 5px 10px;
      border: none;
      text-transform: uppercase;
      margin: 15px 0;
      background-color: rgba(239, 71, 111, 0.5);
      transition: all 0.3s ease;
      cursor: pointer;

      :focus {
        outline: none;
      }

      :hover {
        color: white;
        background-color: rgb(239, 71, 111);
      }
    }
  }
`;

export default CartProduct;
