/**@jsxRuntime classic*/
/**@jsx jsx*/

import { jsx, css } from "@emotion/react";
import { useContext, useState } from "react";
import { UserContext } from "./UserContext";
import img from "../images/bg_bggenerator_com.png";
import { SAuthContext } from "./SuccessAuthContext";
import { useHistory } from "react-router-dom";
import Particle from "./Particle";

function Login() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [users, setUsers] = useContext(UserContext);
  let [SIemail, setSIemail] = useState("");
  let [SIpassword, setSIpassword] = useState("");
  // eslint-disable-next-line
  const [currentUser, setCurrentUser] = useContext(SAuthContext);

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const addressChange = (e) => {
    setAddress(e.target.value);
  };

  const register = (e) => {
    e.preventDefault();
    console.log(users.filter(cur => cur.email === email));
    if (users.filter((cur) => cur.email === email)[0] === undefined || users === undefined){
      setUsers([
        ...users,
        {
          name: name,
          email: email.toLowerCase(),
          password: password,
          address: address,
        },
      ]);
      alert("Now you may sign in.");
    } else {
      alert("Email Already Registered!");
    }
    setName("");
    setEmail("");
    setPassword("");
    setAddress("");
  };

  const SIemailChange = (e) => {
    SIemail = e.target.value.toLowerCase();
    setSIemail(e.target.value.toLowerCase());
  };

  const SIpasswordChange = (e) => {
    SIpassword = e.target.value;
    setSIpassword(e.target.value);
  };

  const signIn = (e) => {
    // console.log( "sign in");

    let u = users.filter(
      (user) => user.email === SIemail && user.password === SIpassword
    );
    // console.log(u)
    e.preventDefault();
    if (u[0] !== undefined) {
      // console.log("if");
      setCurrentUser(u[0]);
      // alert("Signed In!!");
      history.replace("/account");
    } else {
      // console.log("else");
      alert("Incorrect Email or Password or User doesn't exist.");
    }
    setSIemail("");
    setSIpassword("");
  };

  return (
    <div className="login__wrapper" css={CSS}>
      <Particle className="particle" />
      <div id="cont">
        <div className="cont1">
          <h4>LOGIN</h4>
          <form className="input__fields" onSubmit={signIn}>
            <div className="form__group">
              <i className="far fa-envelope"></i>
              <input
                onChange={SIemailChange}
                id="SIemail"
                type="email"
                name="email"
                placeholder="Enter Email"
                value={SIemail}
                required
              />
            </div>
            <div className="form__group">
              <i className="fas fa-key"></i>
              <input
                onChange={SIpasswordChange}
                id="SIpassword"
                type="password"
                name="password"
                placeholder="Enter Password"
                value={SIpassword}
                required
              />
            </div>
            <button type="submit">LOGIN</button>
          </form>
        </div>

        <div className="cont2">
          <h4>SIGN UP</h4>
          <form className="input__fields" onSubmit={register}>
            <div className="form__group">
              <i className="fas fa-user"></i>
              <input
                onChange={nameChange}
                id="name"
                type="text"
                name="name"
                placeholder="Enter Name"
                value={name}
                required
              />
            </div>
            <div className="form__group">
              <i className="far fa-envelope"></i>
              <input
                onChange={emailChange}
                id="email"
                type="email"
                name="email"
                placeholder="Enter Email"
                value={email}
                required
              />
            </div>
            <div className="form__group">
              <i className="fas fa-key"></i>
              <input
                onChange={passwordChange}
                id="password"
                type="password"
                name="password"
                placeholder="Enter Password"
                value={password}
                required
              />
            </div>
            <div className="form__group">
              <i className="fas fa-address-card"></i>
              <input
                onChange={addressChange}
                id="address"
                type="text"
                name="address"
                placeholder="Enter Address"
                value={address}
                required
              />
            </div>
            <button type="submit">SIGN UP</button>
          </form>
        </div>
      </div>
    </div>
  );
}

const CSS = css`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 6rem;
  background-color: rgba(6, 214, 160, 0.2);
  background: url(${img}) no-repeat,
    linear-gradient(
      45deg,
      rgba(6, 214, 160, 0.5) 25%,
      rgba(6, 214, 160, 0.1) 100%
    );

  #tsparticles {
    margin-top: 0;
  }

  #cont {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    height: 550px;
    width: 100%;
    max-width: 1000px;
    /* margin: 0 auto; */
    font-family: "Work Sans", sans-serif;
    background-color: rgba(6, 214, 160, 0.2);
    border-radius: 4px;
    backdrop-filter: blur(6px);
  }

  .cont1 {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    font-size: 1.2rem;
    padding: 100px;
    padding-left: 50px;
    padding-right: 150px;
    border-right: 1px solid gray;
  }

  .cont2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    font-size: 1.2rem;
    padding: 100px;
    /* padding-right: 25px; */
  }

  h4 {
    /* text-align: center; */
    margin-bottom: 25px;
    font-size: 1.5rem;
    /* position: absolute; */
    /* top: 0; */
    width: fit-content;
    color: #073b4c;
  }

  h4::after {
    content: "";
    height: 3px;
    width: 50%;
    display: block;
    background-color: rgba(239, 71, 111, 0.8);
  }

  .input__fields {
    position: relative;
    height: 300px;
    display: flex;
    flex-direction: column;
  }

  .form__group {
    display: flex;
    margin: 5px 0;
    border: 1px solid gray;
    border-radius: 4px;
    background-color: white;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .form__group:hover {
    border: 1px solid rgba(239, 71, 111, 0.8);
  }

  .form__group > i {
    color: gray;
    background-color: white;
    padding: 7px 7px 9px 7px;
    border: none;
    /* border: 1px solid gray; */
    /* border-right: none; */
    /* border-radius: 4px 0 0 4px; */
    transition: all 0.3s ease;
  }

  .form__group:hover i {
    color: rgba(239, 71, 111, 0.8);
  }

  .form__group > i:before {
    font-size: 1.2rem;
  }

  input {
    font-size: 1.2rem;
    /* border: 1px solid gray; */
    padding: 6px 6px;
    height: 100%;
    /* border-radius: 0 4px 4px 0; */
    border: none;
    margin-left: -6.5px;
  }

  input:focus {
    outline: none;
  }

  button {
    padding: 5px 10px;
    font-size: 1.2rem;
    background-color: rgba(239, 71, 111, 0.8);
    color: #073b4c;
    cursor: pointer;
    /* border: 2px solid gray; */
    position: absolute;
    bottom: 0;
    /* border-radius: 5px; */
    border: none;
    transition: all 0.3s ease;
  }

  button:hover {
    background-color: rgb(6, 214, 160);
  }

  @media screen and (max-width: 956px) {
    height: 100%;

    #cont {
      // margin-top: 6.5rem;
      flex-direction: column;
      height: 180vh;
    }

    #tsparticles {
      height: 191vh !important;
      top: 0;
    }

    .cont1 {
      border-right: none;
      border-bottom: 1px solid gray;
      padding: 10px;
      // height: 90vh;
    }

    .cont2 {
      padding: 10px;
      height: 90vh;
      padding-bottom: 100px;
    }

    h4 {
      font-size: 3rem;
    }

    .input__fields {
      height: 50vh;
    }

    .form__group {
      height: 45px;
      padding-bottom: 5px;
    }

    .form__group > i {
      padding: 13.5px 13px 13.5px 13px;
    }

    input {
      padding: 10px 5px;
      font-size: 1.4rem;
      margin: 5px 0;
      margin-left: -10px;
      width: 100%;
    }

    button {
      font-size: 1.6rem;
    }
  }
`;

export default Login;
