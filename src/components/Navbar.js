/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
// eslint-disable-next-line
import { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { BasketContext } from "./BasketContext";
// import Dropdown from "react-bootstrap/Dropdown";
// import DropdownButton from "react-bootstrap/DropdownButton";
// import { ProductContext } from "./ProductContext";
// import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  // eslint-disable-next-line
  const history = useHistory();

  const [basket] = useContext(BasketContext);
  // const [products, setProducts] = useContext(ProductContext);
  // const [search, setSearch] = useState("");

  // const clickHandler = () => {
  //   let a = document.getElementsByClassName("nav__searchBar");
  //   let b = document.getElementsByClassName("nav__container");
  //   // console.log(a[0].style.visibility);
  //   if (a[0].style.visibility === "hidden" || !a[0].style.visibility) {
  //     b[0].style.height = "9.5rem";
  //     a[0].style.visibility = "visible";
  //   } else {
  //     b[0].style.height = "6rem";
  //     a[0].style.visibility = "hidden";
  //   }
  // };

  return (
    <div className="nav__container" css={CSS}>
      <nav>
        <div className="nav__logo">
          <Link to="/sneaker-bazaar/">
            <p>Sneaker </p>
            <span>
              {" "}Bazaar{"  "}
            </span>
          </Link>
        </div>
        <div className="nav__links">
          <Link to="/sneaker-bazaar/">
            <p>Home</p>
          </Link>
          <Link to="/sneaker-bazaar/about-us">
            <p>About Us</p>
          </Link>
          <Link to="/sneaker-bazaar/orders">
            <p>Orders</p>
          </Link>
          {/* <Link to="/sneaker-bazaar">
            <p id="search" onClick={clickHandler}>
              Search
            </p>
          </Link> */}
          <Link to="/sneaker-bazaar/cart">
            <p>Cart({basket.length})</p>
          </Link>
          <Link to="/sneaker-bazaar/redirect">
            <p>Account</p>
          </Link>
        </div>

        {/* DISABLED NAV SEARCH BAR BELOW */}

        {/* <div className="nav__searchBar">
          <DropdownButton id="dropdown-basic-button" title="Options">
            <Dropdown.Item href="#/action-1">Buyers</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Sellers</Dropdown.Item>
          </DropdownButton>
          <form>
            <input
              type="text"
              placeholder="Disabled"
              value={search}
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
              disabled
            />
            <button className="submit" type="submit" disabled>
              Search
            </button>
          </form>
        </div> */}
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

  a {
    color: unset;
    text-decoration: none;

    :hover {
      text-decoration: none;
    }
  }

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
      margin-top: 5px;
      visibility: hidden;
      display: flex;

      @media screen and (max-width: 800px) {
        width: 100%;
      }

      .btn {
        width: 6.5rem;
        height: 2.5rem;
        border-radius: 25px 0 0 25px;
        font-size: 14px;
        padding: 10px;
        border: 1px solid rgba(6, 214, 160, 0.5);
        background-color: rgba(6, 214, 160, 0.5);
        color: white;
        transition: background-color 0.3s ease;
        text-transform: uppercase;

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
          background-color: rgba(6, 194, 160, 0.7);
        }
      }
      .dropdown-menu {
        width: 6.5rem;
        display: flex;
        flex-direction: column;
        border-radius: 4px;
        overflow: hidden;
        font-family: "Work Sans", sans-serif;
        background-color: white;

        .dropdown-item {
          text-align: center;
          padding: 10px 10px;
          background-color: white;
          color: rgb(239, 71, 111);
          transition: all 0.3s ease;

          :hover {
            background-color: rgba(6, 214, 160, 0.5);
          }
        }

        @media screen and (max-width: 800px) {
          width: 5.5rem;
        }
      }

      form {
        width: 100%;
        height: 100%;
      }

      input {
        width: calc(100% - 6.5rem);
        height: 2.5rem;
        // border-radius: 25px 0 0 25px;
        padding: 10px;
        font-size: 15px;
        border: 1px solid rgba(6, 214, 160, 0.5);
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
          width: calc(100% - 5.5rem);
          font-size: 11px;
        }
      }

      .submit {
        width: 6.5rem;
        height: 2.5rem;
        color: white;
        border: none;
        border-radius: 0 25px 25px 0;
        font-size: 15px;
        background-color: rgba(6, 214, 160, 0.5);
        cursor: pointer;
        margin-bottom: 10px;
        text-transform: uppercase;
        transition: background-color 0.3s ease;

        a {
          color: white !important;
        }

        :focus {
          outline: none;
          border: 2px solid rgb(6, 214, 160);
          border-radius: 0 25px 25px 0;
        }

        :hover {
          background-color: rgba(6, 194, 160, 0.7);
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
