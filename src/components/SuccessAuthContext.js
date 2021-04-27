import {createContext, useState } from "react"

export const SAuthContext = createContext();

export const SAuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({
    name: "Guest",
    email: "",
    password: "",
    address: ""
  });

  return (
    <SAuthContext.Provider value={[currentUser, setCurrentUser]}>
      {props.children}
    </SAuthContext.Provider>
  )
}