import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router";
import Products from "./components/products";
import Orders from "./components/orders";
import Payments from "./components/payments";
import Cart from "./components/cart";

export default function App() {

  return (
    <>
      <h1>E-COMMERCE SIMULATOR</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">products</Link>
        <Link to="/cart">carts</Link>
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
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/payments" element={<Payments />} />
      </Routes>
    </>
  );
}
