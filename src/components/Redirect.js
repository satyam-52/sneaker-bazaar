import { useContext } from "react";
import AccountDetails from "./AccountDetails";
import Login from "./Login";
import { SAuthContext } from "./SuccessAuthContext";

function Redirect() {
  // eslint-disable-next-line
  const [currentUser, setCurrentUser] = useContext(SAuthContext);

  return (
    <>{currentUser.email === "" ? (<Login />) : (<AccountDetails />)}</>
  );
}

export default Redirect;
