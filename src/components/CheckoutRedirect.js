import React, { useContext } from 'react'
import Checkout from './Checkout'
import Login from './Login'
import { SAuthContext } from './SuccessAuthContext'

function CheckoutRedirect() {
  // eslint-disable-next-line
  const [currentUser, setCurrentUser] = useContext(SAuthContext)


  return (
    <>{currentUser.email === "" ? (<Login />) : (<Checkout />)}</>
  )
}

export default CheckoutRedirect
