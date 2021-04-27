/**@jsxRuntime classic*/
/**@jsx jsx*/

import { css, jsx } from "@emotion/react";
import { useContext } from "react";
import CurrencyFormat from "react-currency-format";
import { FavoriteContext } from "./FavoriteContext";
import { ProductContext } from "./ProductContext";

function Favorite({ id, img, header, rating, price, key}) {
  const [favorites, setFavorites] = useContext(FavoriteContext);
  const [products, setProducts] = useContext(ProductContext)

  const clickHandler = () => {
    // console.log(favorites, key);
    setProducts([...products.filter(cur => cur.id !== id), {...favorites[id], fav: false}].sort((a, b) => Number(a.id) - Number(b.id)))

    delete favorites[id];
    setFavorites({ ...favorites });
  };

  return (
    <div className="favorite" css={CSS} key={id}>
      <div className="img__container">
        <img src={img} alt={header} />
      </div>
      <div className="content">
        <h3>{header}</h3>
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
    width: 25%;
    margin-right: 15px;

    img {
      width: 100%;
    }
  }

  .content {
    h3 {
      color: #073b4c;
      margin-bottom: 5px;
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
