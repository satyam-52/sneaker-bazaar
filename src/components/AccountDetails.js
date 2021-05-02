/**@jsxRuntime classic*/
/**@jsx jsx*/

import { jsx, css } from "@emotion/react";
import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { SAuthContext } from "./contexts/SuccessAuthContext";
import { UserContext } from "./contexts/UserContext";

function AccountDetails() {
  const history = useHistory();
  useEffect(() => {window.scrollTo(0,0)}, [])

  const [currentUser, setCurrentUser] = useContext(SAuthContext);
  // eslint-disable-next-line
  const [users, setUsers] = useContext(UserContext);

  const signOut = (e) => {
    e.preventDefault();
    setCurrentUser({
      name: "Guest",
      email: "",
      password: "",
      address: "",
    });

    history.replace("/sneaker-bazaar/login");
  };

  // const changePassword = (e) => {
  //   e.preventDefault();
  //   setCurrentUser(...currentUser, password: )
  // }

  return (
    <div className="account__details" css={CSS}>
      <div className="heading">
        <h1>
          My Account<span> :</span>
        </h1>
      </div>
      <div className="content">
        <div className="personal__details">
          <div className="group">
            <p>Name:</p>
            <span>{currentUser.name}</span>
          </div>
          <div className="group">
            <p>Email:</p>
            <span>{currentUser.email}</span>
          </div>
          <div className="group">
            <p>Address:</p>
            <span>{currentUser.address}</span>
          </div>
          <div className="change__password">
            <Link to="/sneaker-bazaar/change-password">
              <button>Change Password</button>
            </Link>
          </div>
          <div className="logout">
            <button onClick={signOut}>Sign Out</button>
          </div>
        </div>
        <div className="img">
          <div className="img__container">
            <i className="fa fa-user"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

const CSS = css`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  max-width: 1200px;
  padding: 10px;
  margin: 0 auto;
  font-family: "Work Sans", sans-serif;

  .heading {
    h1 {
      margin-top: 9.5rem;
      width: fit-content;

      ::after {
        content: "";
        height: 4px;
        width: 60%;
        background-color: rgb(6, 214, 160);
        display: block;
        margin-left: 2px;
      }

      span {
        color: rgb(6, 214, 160);
      }
    }
  }

  .content {
    display: flex;
    justify-content: space-between;

    .personal__details {
      .group {
        margin: 15px 0;
        p {
          font-weight: 700;
          font-size: 24px;
          width: fit-content;

          ::after {
            content: "";
            height: 4px;
            width: 50%;
            background-color: #ef476f;
            display: block;
            margin-left: 1px;
          }

          @media screen and (max-width: 450px) {
            font-size: 18px;
          }
        }

        span {
          font-weight: 400;
          font-size: 24px;

          @media screen and (max-width: 450px) {
            font-size: 18px;
          }
        }
      }

      .change__password,
      .logout {
        width: 190px;
        margin: 15px 0;

        button {
          width: 100%;
          padding: 10px 10px;
          text-transform: uppercase;
          border: none;
          background-color: rgba(6, 214, 160, 0.5);
          color: #073b4c;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;

          :hover {
            background-color: rgba(6, 214, 160, 0.2);
          }
        }
      }
    }
    .img {
      height: 100%;

      .img__container {
        // border: 2px solid #073B4C;
        padding: 25px;

        i {
          color: rgba(6, 214, 160, 0.4);
          width: fit-content;

          :before {
            font-size: 130px;
          }
        }
      }
      @media screen and (max-width: 550px) {
        position: absolute;
        width: 100%;
        height: unset;
        text-align: center;
        display: flex;
        justify-content: center;
        padding-top: 25px;

        .img__container {
          padding: 0;
          width: fit-content;
          i {
            width: fit-content;
            padding: 0;
            color: rgba(6, 214, 160, 0.15);
          }
        }
      }
    }
  }
`;

export default AccountDetails;
