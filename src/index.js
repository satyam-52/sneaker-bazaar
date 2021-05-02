import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SelectedProduct from "./components/SelectedProduct";
import { ProductProvider } from "./components/contexts/ProductContext";
import { CurrentProductProvider } from "./components/contexts/CurrentProductContext";
import { BasketProvider } from "./components/contexts/BasketContext";
import Cart from "./components/Cart";
import Login from "./components/Login";
import { UserProvider } from "./components/contexts/UserContext";
import { FavoriteProvider } from "./components/contexts/FavoriteContext";
import { SAuthProvider } from "./components/contexts/SuccessAuthContext";
import AccountDetails from "./components/AccountDetails";
import Redirect from "./components/Redirect";
import ChangePassword from "./components/ChangePassword";
import Checkout from "./components/Checkout";
import CheckoutRedirect from "./components/CheckoutRedirect";
import "./index.css";
import Orders from "./components/Orders";
import { OrdersProvider } from "./components/contexts/OrdersContext";
import AboutUs from "./components/AboutUs";
import BuyNowRedirect from "./components/BuyNowRedirect";
import { BuyNowProvider } from "./components/contexts/BuyNowContext";

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <CurrentProductProvider>
        <BasketProvider>
          <UserProvider>
            <FavoriteProvider>
              <SAuthProvider>
                <OrdersProvider>
                  <BuyNowProvider>
                    <Router>
                      <Navbar />
                      <Switch>
                        <Route path="/sneaker-bazaar/selected-product">
                          <SelectedProduct />
                        </Route>
                        <Route path="/sneaker-bazaar/cart">
                          <Cart />
                        </Route>
                        <Route path="/sneaker-bazaar/login">
                          <Login />
                        </Route>
                        <Route path="/sneaker-bazaar/account">
                          <AccountDetails />
                        </Route>
                        <Route path="/sneaker-bazaar/redirect">
                          <Redirect />
                        </Route>
                        <Route path="/sneaker-bazaar/change-password">
                          <ChangePassword />
                        </Route>
                        <Route path="/sneaker-bazaar/checkout">
                          <Checkout />
                        </Route>
                        <Route path="/sneaker-bazaar/checkout-redirect">
                          <CheckoutRedirect />
                        </Route>
                        <Route path="/sneaker-bazaar/orders">
                          <Orders />
                        </Route>
                        <Route path="/sneaker-bazaar/about-us">
                          <AboutUs />
                        </Route>
                        <Route path="/sneaker-bazaar/buynow-redirect">
                          <BuyNowRedirect />
                        </Route>
                        <Route path="/sneaker-bazaar/">
                          <App />
                        </Route>
                        <Route path="/">
                          <App />
                        </Route>
                      </Switch>
                      <Footer />
                    </Router>
                  </BuyNowProvider>
                </OrdersProvider>
              </SAuthProvider>
            </FavoriteProvider>
          </UserProvider>
        </BasketProvider>
      </CurrentProductProvider>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
