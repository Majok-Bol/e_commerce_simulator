import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router";
import Products from "./components/products";
import Orders from "./components/orders";
import Payments from "./components/payments";
import Cart from "./components/cart";
//parent component
export default function App() {
  const [cartItems, setCartItems] = useState([]);
  //function to handle add to cart
  function handleAddToCart(item) {
    console.log("Added: ", item);
    console.log(`Add this product: ${item.id} to cart`);
    setCartItems([...cartItems,item]);
  }
  return (
    <>
      <h1>E-COMMERCE SIMULATOR</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">products</Link>
        <Link to="/cart">Cart ({cartItems.length})</Link>
        <Link to="/orders">orders</Link>
        <Link to="/payments">payments</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h2>Welcome to the E-Commerce Simulator!</h2>
              <p>Explore our products and shop with ease 🚀</p>
            </div>
          }
        />
        <Route
          path="/products"
          element={<Products onAddToCart={handleAddToCart} />}
        />
        <Route path="/cart" element={<Cart cart={cartItems} />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/payments" element={<Payments />} />
      </Routes>
    </>
  );
}
