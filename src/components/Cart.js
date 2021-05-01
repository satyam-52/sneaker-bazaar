/**@jsxRuntime classic*/
/**@jsx jsx*/

import { jsx, css } from "@emotion/react";
import { useContext, useEffect } from "react";
import { BasketContext } from "./BasketContext";
import CartProduct from "./CartProduct";
import Favorites from "./Favorites";
import Subtotal from "./Subtotal";

function Cart() {
  const [basket] = useContext(BasketContext);
  useEffect(() => window.scrollTo(0, 0), [])
  // console.log(basket);

  return (
    <div className="cart" css={CSS}>
      <div className="cart__products">
        {basket.length === 0 ? (
          <h1>Cart is empty.</h1>
        ) : (
          Array(basket.length)
            .fill()
            .map((_, i) => (
              <CartProduct
                id={basket[i].id}
                img={basket[i].img}
                header={basket[i].header}
                rating={basket[i].rating}
                price={basket[i].price}
                fav={basket[i].fav}
                key={i}
              />
            ))
        )}
      </div>
      <div className="subtotal__wrapper">
        <Subtotal />
        <Favorites />
      </div>
    </div>
  );
}

const CSS = css`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 9.5rem;
  min-height: calc(100vh - 9.5rem);

  @media screen and (max-width: 950px) {
    flex-direction: column;
  }

  .cart__products {
    width: 65%;

    @media screen and (max-width: 950px) {
      width: 100%;
      margin-bottom: 25px;
    }
    h1 {
      font-family: "Work Sans", sans-serif;
      width: fit-content;

      ::after {
        margin-left: 3px;
        content: "";
        width: 50%;
        height: 3px;
        background-color: rgba(6, 214, 160, 0.5);
        display: block;
      }
    }
  }

  .subtotal__wrapper {
    width: 35%;

    @media screen and (max-width: 950px) {
      width: 100%;
    }
  }
`;

export default Cart;
