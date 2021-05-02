import { useContext, useEffect } from "react";
import AccountDetails from "./AccountDetails";
import Login from "./Login";
import { SAuthContext } from "./contexts/SuccessAuthContext";

function Redirect() {
  // eslint-disable-next-line
  const [currentUser, setCurrentUser] = useContext(SAuthContext);
  useEffect(() => window.scrollTo(0, 0), [])

  return (
    <>{currentUser.email === "" ? (<Login />) : (<AccountDetails />)}</>
  );
}

export default Redirect;
