/**@jsxRuntime classic*/
/**@jsx jsx*/

import { jsx, css } from "@emotion/react";
import CurrencyFormat from "react-currency-format";
import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import { CurrentProductContext } from "./CurrentProductContext";
import { BasketContext } from "./BasketContext";
import { FavoriteContext } from "./FavoriteContext";
import { ProductContext } from "./ProductContext";
import { BuyNowContext } from "./BuyNowContext";

function Product({ id, img, header, rating, price, fav, sort }) {
  const history = useHistory();

  // eslint-disable-next-line
  const [currentProduct, setCurrentProduct] = useContext(CurrentProductContext);
  const [basket, setBasket] = useContext(BasketContext);
  const [favorites, setFavorites] = useContext(FavoriteContext);
  const [products, setProducts] = useContext(ProductContext);
  // eslint-disable-next-line
  const [product, setProduct] = useContext(BuyNowContext);

  const favoriteHandler = (e) => {
    if (e.target.classList.contains("far")) {
      setFavorites({
        ...favorites,
        [id]: {
          id: id,
          img: img,
          header: header,
          rating: rating,
          price: price,
          fav: true,
        },
      });

      if (sort !== true) {
        setProducts(
          [
            ...products.filter((cur) => Object.values(cur).indexOf(id) === -1),
            {
              id: id,
              img: img,
              header: header,
              rating: rating,
              price: price,
              fav: true,
            },
          ].sort((a, b) => Number(a.price) - Number(b.price))
        );
      } else {
        setProducts(
          [
            ...products.filter((cur) => Object.values(cur).indexOf(id) === -1),
            {
              id: id,
              img: img,
              header: header,
              rating: rating,
              price: price,
              fav: true,
            },
          ].sort((a, b) => Number(a.id) - Number(b.id))
        );
      }

      // setProducts([...products.sort((a, b) => Number(a.id) - Number(b.id))])

      // e.target.classList.remove("far");
      // e.target.classList.add("fas");
    } else {
      if (Object.keys(favorites).some((key) => key === id)) {
        delete favorites[id];
        setFavorites({ ...favorites });

        if (sort !== true) {
          setProducts(
            [
              ...products.filter((cur) => Object.values(cur).indexOf(id) === -1),
              {
                id: id,
                img: img,
                header: header,
                rating: rating,
                price: price,
                fav: false,
              },
            ].sort((a, b) => Number(a.price) - Number(b.price))
          );
        } else {
          setProducts(
            [
              ...products.filter((cur) => Object.values(cur).indexOf(id) === -1),
              {
                id: id,
                img: img,
                header: header,
                rating: rating,
                price: price,
                fav: false,
              },
            ].sort((a, b) => Number(a.id) - Number(b.id))
          );
        }

        // setProducts([...products.sort((a, b) => Number(a.id) - Number(b.id))])
      }

      // e.target.classList.remove("fas");
      // e.target.classList.add("far");
    }
  };

  const setProductt = () => {
    // console.log(id);
    setCurrentProduct({
      id: id,
      img: img,
      header: header,
      rating: rating,
      price: price,
      fav: fav,
    });
  };

  const addToBasket = () => {
    setBasket([
      ...basket,
      {
        id: id,
        img: img,
        header: header,
        rating: rating,
        price: price,
        fav: fav,
      },
    ]);
  };

  const setBuyNow = (e) => {
    e.preventDefault();
    setProduct({ id, img, header, rating, price, fav });
    history.replace("/sneaker-bazaar/buynow-redirect");
  };

  return (
    <div className="product" css={CSS}>
      <div onClick={setProductt} className="img">
        <Link to="/sneaker-bazaar/selected-product">
          <img src={img} alt={header} />
        </Link>
        <div onClick={favoriteHandler} className="favorite__button">
          {fav ? (
            <i className="fa fa-heart"></i>
          ) : (
            <i className="far fa-heart"></i>
          )}
        </div>
      </div>
      <div className="content">
        <Link onClick={setProductt} to="/sneaker-bazaar/selected-product">
          <p className="product__name">
            {header.length > 30 ? header.slice(0, 30) + "..." : header}
          </p>
          <p className="product__rating">
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
          <p>
            Price:{" "}
            <CurrencyFormat
              thousandSeparator={true}
              allowNegative={false}
              prefix="₹"
              value={price}
              displayType="text"
            />
          </p>
        </Link>
        <div className="buttons">
          <button onClick={setBuyNow}>
            Buy Now <i className="fas fa-shopping-cart"></i>
          </button>
          <button onClick={addToBasket}>
            Add to Bag <i className="fas fa-shopping-bag"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

const CSS = css`
  // border: 1px solid black;
  border-radius: 4px;
  width: calc(100% / 4);
  max-width: 270px;
  height: 60vh;
  margin: 10px;
  overflow: hidden;
  // background-color: rgba(0,0,0,0.04);

  @media screen and (max-width: 1100px) {
    width: 100%;
    max-width: 270px;
    margin-bottom: 25px;
  }

  .img {
    width: 100%;
    height: 35vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 0.5px solid rgba(6, 214, 160, 0.3);
    border-radius: 4px 4px 0 0;
  }

  img {
    height: fit-content;
    max-height: 35vh;
    transition: all 3s ease;

    :hover {
      transform: scale(1.4);
    }
  }

  .favorite__button {
    cursor: pointer;
    position: absolute;
    display: inline-block;
    color: white;
    padding: 8px 7px 5px 7px;
    margin: 3px;
    border-radius: 25px;
    top: 0;
    right: 0;
    transition: all 0.3s ease;
    background-color: rgba(0, 0, 0, 0.1);

    :hover {
      color: #ef476f;
    }

    i {
      :before {
        font-size: 20px;
      }
    }
  }

  .content {
    height: 25vh;
    // border: 1px solid black;
    position: relative;

    .product__name {
      padding-top: 10px;
      font-size: 1.2rem;
    }

    p {
      // padding: 0 5px 0 5px;
      font-size: 18px;

      i {
        cursor: pointer;
        color: rgb(6, 214, 160);

        :before {
          font-size: 1rem;
        }
      }
    }

    .buttons {
      width: 100%;
      display: flex;
      position: absolute;
      bottom: 0;

      button {
        width: 100%;
        background-color: rgba(6, 214, 160, 0.5);
        cursor: pointer;
        font-size: 1rem;
        border: none;
        padding: 10px 0;
        transition: all 0.3s ease;
        color: #073b4c;
        margin-top: 5px;

        :focus {
          outline: none;
        }

        :hover {
          background-color: rgba(6, 214, 160, 0.2);
          color: #075b6c;
        }

        i {
          :before {
            font-size: 0.9rem;
          }
        }

        @media screen and (max-width: 1250px) {
          font-size: 0.8rem;
        }
      }
    }
  }
`;

export default Product;
