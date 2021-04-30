/**@jsxRuntime classic*/
/**@jsx jsx*/

import { css, jsx } from "@emotion/react";
import { useContext } from "react";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";
import { BasketContext } from "./BasketContext";
import { CurrentProductContext } from "./CurrentProductContext";
import { FavoriteContext } from "./FavoriteContext";
import { ProductContext } from "./ProductContext";

function Favorite({ id, img, header, rating, price, fav }) {
  const [favorites, setFavorites] = useContext(FavoriteContext);
  const [products, setProducts] = useContext(ProductContext);
  // eslint-disable-next-line
  const [currentProduct, setCurrentProduct] = useContext(CurrentProductContext)
  const [basket, setBasket] = useContext(BasketContext)

  const clickHandler = () => {
    // console.log(favorites, key);
    setProducts(
      [
        ...products.filter((cur) => cur.id !== id),
        { ...favorites[id], fav: false },
      ].sort((a, b) => Number(a.id) - Number(b.id))
    );

    setCurrentProduct({...currentProduct, fav: false});

    if(basket.length !== 0) {
      if(basket.filter(cur => cur.id === id) !== []) {
        basket.forEach((cur, i) => {
          if (cur.id === id) {
            cur.fav = false;
          }
        })
        setBasket([...basket]);
      }
    }

    delete favorites[id];
    setFavorites({ ...favorites });
  };

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

  return (
    <div className="favorite" css={CSS} key={id}>
      <div className="img__container">
        <Link onClick={headerClickHandler} to="/sneaker-bazaar/selected-product">
          <img src={img} alt={header} />
        </Link>
      </div>
      <div className="content">
        <div className="header">
          <Link onClick={headerClickHandler} to="/sneaker-bazaar/selected-product">
            <h3>{header}</h3>
          </Link>
        </div>
        <p>
          <CurrencyFormat
            thousandSeparator={true}
            allowNegative={false}
            prefix={"₹"}
            value={price}
            displayType="text"
          />
        </p>
        <button onClick={clickHandler}>Remove from favorites</button>
      </div>
    </div>
  );
}

const CSS = css`
  margin: 10px 0;
  width: 100%;
  display: flex;
  font-family: "Work Sans", sans-serif;

  .img__container {
    width: 100px;
    margin-right: 15px;

    img {
      width: 100px;
    }
  }

  .content {
    .header {
      h3 {
        color: #073b4c;
        margin-bottom: 5px;
      }
    }

    p {
      font-size: 18px;
      margin: 5px 0;
    }

    button {
      padding: 5px 10px;
      border: none;
      text-transform: uppercase;
      font-size: 12px;
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

export default Favorite;
