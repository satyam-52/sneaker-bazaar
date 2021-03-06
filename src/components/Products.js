/**@jsxRuntime classic*/
/**@jsx jsx*/

import { jsx, css } from "@emotion/react";
import Product from "./Product";
import { useContext, useState } from "react";
import { ProductContext } from "./contexts/ProductContext";

function Products() {
  const [products, setProducts] = useContext(ProductContext);
  const [sort, setSort] = useState(true);
  let [filter, setFilter] = useState([false, [...products]]);
  let p = [...products];



  let rows = Math.floor(products.length / 4);
  let pRows = [];
  // console.log(rows);
  let i = 0;
  while (i < products.length) {
    let row = [];
    for (let j = 0; j <= rows; j++) {
      row.push(products[i]);
      i++;
    }
    pRows.push(row);
    row = [];
  }
  // console.log(pRows);

  const sortClickHandler = (e) => {
    e.preventDefault();
    if (sort) {
      setSort(false);
      setProducts([
        ...products.sort((a, b) =>
          Number(a.price) > Number(b.price) ? 1 : -1
        ),
      ]);
    } else {
      setSort(true);
      setProducts([...products.sort((a, b) => Number(a.id) - Number(b.id))]);
    }
  };

  const filterClickHandler = (e) => {
    e.preventDefault();
    if (filter[0]) {
      setFilter([false, [...p]])
      setProducts([...filter[1]])
    } else {
      setFilter([true, [...p]])
      setProducts([...products.filter(cur => cur.fav === true)])
    }
  };

  return (
    <div id="products" className="products" css={CSS}>
      <div className="products__header">
        <h1>Products</h1>
        <div className="products__headerButtons">
          <p onClick={sortClickHandler}>
            Sort <i className="fas fa-sort"></i>
          </p>
          <p onClick={filterClickHandler}>
            Filter <i className="fas fa-filter"></i>
          </p>
        </div>
      </div>
      {pRows.map((r, i) => (
        <div className="product__row" key={i}>
          {r.map((pro, j) => (
            <Product
              id={pro.id}
              img={pro.img}
              header={pro.header}
              rating={pro.rating}
              price={pro.price}
              fav={pro.fav}
              key={pro.id}
              sort={sort}
            />
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

      @media screen and (max-width: 400px) {
        font-size: 23px;
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

        @media screen and (max-width: 400px) {
          font-size: 14px;

          i {
            :before {
              font-size: 10px;
            }
          }
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
