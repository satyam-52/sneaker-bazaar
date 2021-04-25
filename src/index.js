import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SelectedProduct from "./components/SelectedProduct"
import {ProductProvider} from "./components/ProductContext"

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/selected-product">
          <SelectedProduct />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
      <Footer />
    </Router>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
