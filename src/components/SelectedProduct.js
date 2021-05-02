/**@jsxRuntime classic*/
/**@jsx jsx*/

import { jsx, css } from "@emotion/react";
import CurrencyFormat from "react-currency-format";
// eslint-disable-next-line
import { useContext, useEffect, useState } from "react";
import { CurrentProductContext } from "./contexts/CurrentProductContext";
import { BasketContext } from "./contexts/BasketContext";
import { FavoriteContext } from "./contexts/FavoriteContext";
import { ProductContext } from "./contexts/ProductContext";
import { BuyNowContext } from "./contexts/BuyNowContext"
import { Link, useHistory } from "react-router-dom"

function ProductLanding() {
  useEffect(() => window.scrollTo(0, 0), [])
  const [currentProduct, setCurrentProduct] = useContext(CurrentProductContext);
  const [basket, setBasket] = useContext(BasketContext);
  const [favorites, setFavorites] = useContext(FavoriteContext);
  const [products, setProducts] = useContext(ProductContext);
  // eslint-disable-next-line
  const [product, setProduct] = useContext(BuyNowContext);
  const history = useHistory();
  
  // const [quantity, setQuantity] = useState(1);

  // const increment = () => {
  //   setQuantity(quantity + 1);
  // };

  // const decrement = () => {
  //   if (quantity > 1) {
  //     setQuantity(quantity - 1);
  //   } else {
  //     alert("Quantity cannot be less then 1");
  //   }
  // };

  const addToBasket = () => {
    setBasket([
      ...basket,
      {
        id: currentProduct.id,
        img: currentProduct.img,
        header: currentProduct.header,
        rating: currentProduct.rating,
        price: currentProduct.price,
        fav: currentProduct.fav
      },
    ]);
  };

  const addToFavorites = (e) => {
    if (!currentProduct.fav)
    {
      setFavorites({
        ...favorites,
        [currentProduct.id]: {
          id: currentProduct.id,
          img: currentProduct.img,
          header: currentProduct.header,
          rating: currentProduct.rating,
          price: currentProduct.price,
          fav: true
        },
      });

      if(basket.length !== 0) {
        if(basket.filter(cur => cur.id === currentProduct.id) !== []) {
          basket.forEach((cur, i) => {
            if (cur.id === currentProduct.id) {
              cur.fav = true;
            }
          })
          setBasket([...basket]);
        }
      }

      currentProduct.fav = true
      setCurrentProduct({...currentProduct, fav: true})
      setProducts([...products.filter(cur => cur.id !== currentProduct.id), currentProduct].sort((a, b) => Number(a.id) - Number(b.id)))

    } else {
      if (Object.keys(favorites).some((key) => key === currentProduct.id)) {
        delete favorites[currentProduct.id];
        setFavorites({ ...favorites });

        if(basket.length !== 0) {
          if(basket.filter(cur => cur.id === currentProduct.id) !== []) {
            basket.forEach((cur, i) => {
              if (cur.id === currentProduct.id) {
                cur.fav = false;
              }
            })
            setBasket([...basket]);
          }
        }

        currentProduct.fav = false
        setCurrentProduct({...currentProduct, fav: false})
        setProducts([...products.filter(cur => cur.id !== currentProduct.id), currentProduct].sort((a, b) => Number(a.id) - Number(b.id)))
      }
    }
  };

  const setBuyNow = (e) => {
    e.preventDefault();
    setProduct({...currentProduct});
    history.replace("/sneaker-bazaar/buynow-redirect");
  }

  return (
    <div className="selected__product" css={CSS}>
      <div className="img__container">
        <img src={currentProduct.img} alt={currentProduct.header} />
      </div>
      <div className="product__details">
        <div className="product__name">
          <h2>{currentProduct.header}</h2>
        </div>
        <div className="product__wishlist">
          <p onClick={addToFavorites}>
            {currentProduct.fav ? "Remove from" : "Add to"} wishlist{" "}
            {currentProduct.fav ? (<i className="fa fa-heart"></i>) : (<i className="far fa-heart"></i>)}
          </p>
        </div>
        <div className="product__rating">
          <p>
            {Array(5)
              .fill()
              .map((_, i) =>
                i < currentProduct.rating ? (
                  <i key={i} className="fa fa-star"></i>
                ) : (
                  <i key={i} className="far fa-star"></i>
                )
              )}
          </p>
        </div>
        <div className="product__share">
          <p>Share </p>
          <div className="icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i></a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer"><i className="fa fa-pinterest"></i></a>
            <a href="https://web.whatsapp.com" target="_blank" rel="noreferrer"><i className="fa fa-whatsapp"></i></a>
          </div>
        </div>
        <div className="product__price">
          <p>
            <CurrencyFormat
              thousandSeparator={true}
              allowNegative={false}
              prefix={"₹"}
              value={currentProduct.price}
              displayType={"text"}
            />
          </p>
        </div>
        {/* <div className="product__quantity">
          <i className="fas fa-minus" onClick={decrement}></i>
          <span>{quantity}</span>
          <i className="fas fa-plus" onClick={increment}></i>
        </div> */}
        <div className="product__details-buttons">
          <button onClick={addToBasket}>Add to Bag</button>
          <Link to="/buynow-redirect"><button onClick={setBuyNow}>Buy Now</button></Link>
        </div>
      </div>
    </div>
  );
}

const CSS = css`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 10.5rem;
  margin-bottom: 5rem;
  justify-content: space-around;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }

  .img__container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    max-height: calc(100vh - 10.5rem);
    max-width: 48%;
    overflow: hidden;

    @media screen and (max-width: 600px) {
      max-width: 100%;
      padding: 10px;
    }

    img {
      width: 80%;
      transition: transform 3s ease-in-out;

      :hover {
        transform: scale(1.5);
      }

      @media screen and (max-width: 600px) {
        width: 100%;
      }
    }
  }

  .product__details {
    display: flex;
    flex-direction: column;
    width: 48%;

    @media screen and (max-width: 600px) {
      width: 100%;
      padding: 10px;
    }

    .product__name {
      font-size: 25px;
      margin-bottom: 15px;
      font-family: "Work Sans", sans-serif;
    }

    .product__wishlist {
      padding-bottom: 15px;
      border-bottom: 1px solid lightgray;
      p {
        font-size: 1rem;
        text-transform: uppercase;
        color: #777;
        cursor: pointer;
        font-family: "Work Sans", sans-serif;
        i {
          color: #777;
          transition: all 0.3s ease;
        }

        :hover i {
          color: #ef476f;
        }
      }
    }

    .product__rating {
      width: 100%;
      text-align: right;
      padding: 5px 5px 0 0;
      p {
        color: rgb(6, 214, 160);
        cursor: pointer;
      }
    }

    .product__share {
      display: flex;
      p {
        font-family: sans-serif;
        color: #777;
        font-size: 16px;
        padding-right: 25px;
        text-transform: uppercase;
      }

      .icons {
        i {
          margin: 0 5px;
          cursor: pointer;
        }

        i:before {
          font-size: 18px;
        }
        .fa-facebook {
          color: #777;
          transition: all 0.3s ease;

          :hover {
            color: #07f;
          }
        }

        .fa-twitter {
          color: #777;
          transition: all 0.3s ease;

          :hover {
            color: #07f;
          }
        }

        .fa-pinterest {
          color: #777;
          transition: all 0.3s ease;

          :hover {
            color: #e60023;
          }
        }

        .fa-whatsapp {
          color: #777;
          transition: all 0.3s ease;

          :hover {
            color: #4fce5d;
          }
        }
      }
    }

    .product__price {
      margin: 5px 0;
      font-size: 2rem;
    }

    .product__quantity {
      font-size: 2rem;
      display: flex;
      justify-content: space-between;
      width: 150px;
      margin: 15px 0;
      border: 1px solid lightgray;

      i {
        cursor: pointer;
        background-color: rgba(6, 214, 160, 0.5);
        transition: all 0.3s ease;
        color: #073b4c;

        :hover {
          background-color: rgba(6, 214, 160, 0.2);
        }
      }

      i.fa-plus {
        padding: 7px 5px 5px 5px;
      }

      i.fa-minus {
        padding: 7px 5px 5px 5px;
      }

      i:before {
        font-size: 2rem;
      }

      span {
        font-size: 2rem;
        padding: 3px 0 3px 0;
      }

      .fa-plus {
        height: 100%;
        border-right: 1px solid lightgray;
      }

      .fa-minus {
        height: 100%;
        border-left: 1px solid lightgray;
      }
    }

    .product__details-buttons {
      width: 150px;

      button {
        width: 100%;
        background-color: rgba(6, 214, 160, 0.5);
        cursor: pointer;
        font-size: 1rem;
        border: none;
        padding: 10px 0;
        transition: all 0.3s ease;
        color: #073b4c;
        margin: 5px 0;
        text-transform: uppercase;

        :focus {
          outline: none;
        }

        :hover {
          background-color: rgba(6, 214, 160, 0.2);
          color: #075b6c;
        }
      }
    }
  }
`;

export default ProductLanding;
