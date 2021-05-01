import React, { useContext, useEffect } from 'react'
import BuyNow from './BuyNow.js'
import Login from './Login'
import { SAuthContext } from './SuccessAuthContext'

function BuyNowRedirect(product) {
  // eslint-disable-next-line
  const [currentUser, setCurrentUser] = useContext(SAuthContext)
  useEffect(() => window.scrollTo(0,0), [])


  return (
    <>{currentUser.email === "" ? (<Login />) : (<BuyNow />)}</>
  )
}

export default BuyNowRedirect