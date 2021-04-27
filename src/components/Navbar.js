/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { BasketContext } from "./BasketContext";

function Navbar(props) {
  const [basket] = useContext(BasketContext);

  const clickHandler = () => {
    let a = document.getElementsByClassName("nav__searchBar");
    let b = document.getElementsByClassName("nav__container");
    console.log(a[0].style.visibility);
    if (a[0].style.visibility === "hidden" || !a[0].style.visibility) {
      b[0].style.height = "9.5rem";
      a[0].style.visibility = "visible";
    } else {
      b[0].style.height = "6rem";
      a[0].style.visibility = "hidden";
    }
  };
  return (
    <div className="nav__container" css={CSS}>
      <nav>
        <div className="nav__logo">
          <Link to="/">
            <p>Sneaker </p>
            <span>
              {" "}Bazaar{"  "}
            </span>
          </Link>
        </div>
        <div className="nav__links">
          <Link to="/">
            <p>Home</p>
          </Link>
          <p>Orders</p>
          <p id="search" onClick={clickHandler}>
            Search
          </p>
          <Link to="/cart">
            <p>Cart({basket.length})</p>
          </Link>
          <Link to="/redirect">
            <p>Account</p>
          </Link>
        </div>
        <div className="nav__searchBar">
          {/* DROPDOWN BUTTON HERE */}
          <select name="search" className="search__dropdown">
            <option defaultValue="products" className="dropdown__option">
              Products
            </option>
            <option value="sellers" className="dropdown__option">
              Sellers
            </option>
          </select>
          <input type="text" placeholder="Search" />
          <button type="submit">Search</button>
        </div>
      </nav>
    </div>
  );
}

const CSS = css`
  height: 6rem;
  width: 100%;
  max-width: 1650px;
  margin: 0 auto;
  position: absolute;
  top: 0;
  background: white;
  z-index: 1024;

  @media screen and (max-width: 800px) {
    background-size: auto;
  }

  nav {
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;

    .nav__logo {
      cursor: pointer;
      padding-left: 15px;
      font-family: "Dancing Script", sans-serif;
      display: flex;
      margin: 10px 0;
      a {
        display: flex;
        p {
          font-size: 25px;
          color: rgb(6, 214, 160);
        }
        span {
          font-size: 25px;
        }
      }
    }

    .nav__links {
      width: 100%;
      max-width: 1000px;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      p {
        cursor: pointer;
        font-family: "Work Sans", sans-serif;
        transition: all 0.3s ease;
        text-transform: uppercase;
        padding: 3px;
        border-radius: 2px;

        @media screen and (max-width: 800px) {
          font-size: 12px;
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

        :hover {
          color: rgb(6, 214, 160);
        }
      }
    }

    .nav__searchBar {
      width: 55%;
      margin-bottom: 5px;
      visibility: hidden;

      @media screen and (max-width: 800px) {
        width: 100%;
      }

      select {
        width: 6.5rem;
        height: 2.5rem;
        border-radius: 25px 0 0 25px;
        font-size: 14px;
        padding: 10px;
        border: 1px solid rgb(6, 214, 160);
        background-color: rgb(6, 214, 160);
        color: white;
        transition: background-color 0.3s ease;

        @media screen and (max-width: 800px) {
          width: 5.5rem;
          font-size: 11px;
          padding: 5px;
        }

        :focus {
          outline: none;
          border: 2px solid rgb(6, 214, 160);
        }

        :hover {
          background-color: rgb(6, 194, 160);
        }

        option {
          background-color: white;
          color: rgb(6, 214, 160);

          :hover {
            background-color: rgb(6, 214, 160);
          }
        }
      }

      input {
        width: calc(100% - 13rem);
        height: 2.5rem;
        // border-radius: 25px 0 0 25px;
        padding: 10px;
        font-size: 15px;
        border: 1px solid rgb(6, 214, 160);
        opacity: 0.8;
        transition: opacity 0.3s ease;

        :focus {
          opacity: 1;
          outline: none;
          border: 2px solid rgb(6, 214, 160);
        }

        :hover {
          opacity: 1;
        }

        @media screen and (max-width: 800px) {
          width: calc(100% - 11rem);
          font-size: 11px;
        }
      }

      button {
        width: 6.5rem;
        height: 2.5rem;
        color: white;
        border: none;
        border-radius: 0 25px 25px 0;
        font-size: 14px;
        background-color: rgb(6, 214, 160);
        cursor: pointer;
        margin-bottom: 10px;
        text-transform: uppercase;
        transition: background-color 0.3s ease;

        :focus {
          outline: none;
          border: 2px solid rgb(6, 214, 160);
          border-radius: 0 25px 25px 0;
        }

        :hover {
          background-color: rgb(6, 194, 160);
        }

        @media screen and (max-width: 800px) {
          width: 5.5rem;
          font-size: 11px;
        }
      }
    }
  }
`;

export default Navbar;
