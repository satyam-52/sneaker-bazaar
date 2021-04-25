/**@jsxRuntime classic*/
/**@jsx jsx*/

import { jsx, css } from "@emotion/react";
import CurrencyFormat from "react-currency-format";
import img from "../images/img4.jpg";
import { useContext } from "react";
import { ProductContext } from "./ProductContext";

function ProductLanding() {
  const [product, setProducts, currentProduct, setCurrentProduct] = useContext(
    ProductContext
  );

  // console.log(currentProduct);

  return (
    <div class="selected__product" css={CSS}>
      <div className="img__container">
        <img src={currentProduct.img} alt={currentProduct.header} />
      </div>
      <div className="product__details">
        <div className="product__name">
          <h2>{currentProduct.header}</h2>
        </div>
        <div className="product__wishlist">
          <p>
            Add to wishlist <i className="far fa-heart"></i>
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
            <i className="fa fa-facebook"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-pinterest"></i>
            <i className="fa fa-whatsapp"></i>
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
        <div className="product__quantity">
          <i className="fas fa-minus"></i>
          <span>1</span>
          <i className="fas fa-plus"></i>
        </div>
        <div className="product__details-buttons">
          <button>Add to Bag</button>
          <button>Buy Now</button>
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
        font-size: 18px;
      }

      span {
        font-size: 18px;
        padding: 7px 0 5px 0;
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
