/**@jsxRuntime classic*/
/**@jsx jsx*/

import { jsx, css } from "@emotion/react";
import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { SAuthContext } from "./SuccessAuthContext";
import { UserContext } from "./UserContext";

function ChangePassword() {
  const history = useHistory();
  const [users, setUsers] = useContext(UserContext);
  let [currentUser, setCurrentUser] = useContext(SAuthContext);
  let [pass, setPass] = useState("");
  let [newPass, setNewPass] = useState("");
  let [reNewPass, setReNewPass] = useState("");

  const changePass = (e) => {
    pass = e.target.value;
    setPass(e.target.value);
  };

  const changeNewPass = (e) => {
    newPass = e.target.value;
    setNewPass(e.target.value);
  };

  const changeReNewPass = (e) => {
    reNewPass = e.target.value;
    setReNewPass(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(currentUser.password === pass) {
      if(newPass === reNewPass) {
        currentUser.password = newPass;
        setCurrentUser({...currentUser, password: newPass});
        let u = users.filter(cur => cur.email !== currentUser.email)
        setUsers([...u, currentUser]);
        alert("Password Changed Successfully!");
        history.replace("/account");
      } else {
        alert("Passwords do not match!");
      }
    } else {
      alert("Incorrect Password!");
    }
    setPass("");
    setNewPass("");
    setReNewPass("");
  }

  return (
    <div className="change__password" css={CSS}>
      <form onSubmit={handleSubmit} className="cont1">
        <label id="password1" for="password1">
          Current Password:
        </label>
        <input
          onChange={changePass}
          id="currentpassword"
          type="password"
          name="password1"
          placeholder="Current Password"
          value={pass}
          required
        />

        <label id="password2" for="password2">
          New Password:
        </label>
        <input
          onChange={changeNewPass}
          id="newpassword"
          type="password"
          name="password2"
          placeholder="New Password"
          value={newPass}
          required
        />

        <label id="password3" for="password3">
          Re-enter New Password:
        </label>
        <input
          onChange={changeReNewPass}
          id="repassword"
          type="password"
          name="password3"
          placeholder="Re-enter New Password"
          value={reNewPass}
          required
        />
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
}

const CSS = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(6, 214, 160, 0.2);
  /* background: url("") no-repeat,
    linear-gradient(
      45deg,
      rgba(6, 214, 160, 0.5) 25%,
      rgba(6, 214, 160, 0.1) 100%
    ); */

  .cont1 {
    background-color: rgba(6, 214, 160, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 50vh;
    width: 60vh;
    padding: 0 25px;
  }

  label {
    font-family: "work sans", sans-serif;
    padding: 6px 0 6px 0;
    font-size: 1.3rem;
  }

  input {
    font-family: "work sans", sans-serif;
    padding: 5px 0;
    border: 1px solid #073b4c;
    font-size: 1rem;
  }

  input:hover {
    border: 1px solid rgba(239, 71, 111, 0.8);
  }

  input:focus {
    outline: none;
    border: 1px solid rgba(239, 71, 111, 0.8);
  }

  button {
    margin-top: 15px;
    padding: 10px;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    background-color: rgba(6, 214, 160, 0.4);
    transition: all 0.3s ease;
  }

  button:hover {
    background-color: rgba(239, 71, 111, 0.5);
  }
`;

export default ChangePassword;
