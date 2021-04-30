import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import CartView from "./components/Cart";
import { useCart } from "./lib/adapters/CartHook";
import CartContext from "./lib/CartContext";
import SearchResults from "./pages/SearchResults";

function App() {
  const [cart, addToCart] = useCart(new Map(), []);

  return (
    <Router>
      <div className="amazon">
        <Link to="/cart">Cart</Link>
        <CartContext.Provider value={cart}>
          <CartView items={cart}></CartView>
          <Switch>
            <Route path="/cart">
              <CartPage />
            </Route>
            <Route path="/">
              <SearchResults addToCart={addToCart}></SearchResults>
            </Route>
          </Switch>
        </CartContext.Provider>
      </div>
    </Router>
  );
}

function CartPage() {
  return (
    <div>
      <h2>Cart</h2>
    </div>
  );
}

export default App;
