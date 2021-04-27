import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SelectedProduct from "./components/SelectedProduct";
import { ProductProvider } from "./components/ProductContext";
import { CurrentProductProvider } from "./components/CurrentProductContext";
import { BasketProvider } from "./components/BasketContext";
import Cart from "./components/Cart";
import Login from "./components/Login";
import { UserProvider } from "./components/UserContext";
import { FavoriteProvider } from "./components/FavoriteContext";
import { SAuthProvider } from "./components/SuccessAuthContext";
import AccountDetails from "./components/AccountDetails";
import Redirect from "./components/Redirect";
import ChangePassword from "./components/ChangePassword";

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
      <CurrentProductProvider>
        <BasketProvider>
          <UserProvider>
            <FavoriteProvider>
              <SAuthProvider>
                <Router>
                  <Navbar />
                  <Switch>
                    <Route path="/selected-product">
                      <SelectedProduct />
                    </Route>
                    <Route path="/cart">
                      <Cart />
                    </Route>
                    <Route path="/login">
                      <Login />
                    </Route>
                    <Route path="/account">
                      <AccountDetails />
                    </Route>
                    <Route path="/redirect">
                      <Redirect />
                    </Route>
                    <Route path="/change-password">
                      <ChangePassword />
                    </Route>
                    <Route path="/">
                      <App />
                    </Route>
                  </Switch>
                  <Footer />
                </Router>
              </SAuthProvider>
            </FavoriteProvider>
          </UserProvider>
        </BasketProvider>
      </CurrentProductProvider>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
