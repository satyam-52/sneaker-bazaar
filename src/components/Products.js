/**@jsxRuntime classic*/
/**@jsx jsx*/

import { jsx, css } from "@emotion/react";
import Product from "./Product";
import {useContext} from "react"
import { ProductContext } from "./ProductContext"

function Products() {
  const [products] = useContext(ProductContext);
  let rows = Math.floor(products.length / 4);
  let pRows = [];
  // console.log(rows);
  let i = 0;
  while(i < products.length) {
    let row = [];
    for (let j = 0; j <= rows; j++) {
      row.push(products[i]);
      i++;
    }
    pRows.push(row);
    row = [];
  }
  // console.log(pRows);


  return (
    <div id="products" className="products" css={CSS}>
      <div className="products__header">
        <h1>Products</h1>
        <div className="products__headerButtons">
          <p>
            Sort <i className="fas fa-sort"></i>
          </p>
          <p>
            Filter <i className="fas fa-filter"></i>
          </p>
        </div>
      </div>
      {pRows.map((r, i) => (
        <div className="product__row">
          {r.map((pro, j) => (
            <Product img={pro.img} header={pro.header} rating={pro.rating} price={pro.price} key={i+j} />
          ))}
        </div>
      ))}
    </div>
  );
}

const CSS = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Work Sans", sans-serif;
  margin: 25px 0;

  .products__header {
    display: flex;
    padding: 0 25px;
    width: 100%;
    max-width: 1150px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;

    h1 {
      ::after {
        margin-left: 2px;
        content: "";
        display: block;
        width: 50%;
        height: 3px;
        background: rgb(5, 214, 160);
      }
    }

    .products__headerButtons {
      display: flex;

      p {
        padding: 5px 15px;
        cursor: pointer;
        text-transform: uppercase;
        transition: all 0.3s ease;

        :hover {
          color: rgba(6, 214, 160, 1);
        }

        ::after {
          content: "";
          display: block;
          width: 0;
          height: 1px;
          background: rgb(6, 214, 160);
          transition: width 0.4s ease-in;
        }

        :hover::after {
          width: 100%;
        }
      }
    }
  }

  .product__row {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    margin: 25px 0;
    padding: 0 100px;

    @media screen and (max-width: 1100px) {
      padding: 0 50px;
      flex-direction: column;
      height: fit-content;
      margin: 0;
    }
  }
`;

export default Products;
