import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router";
import Products from "./components/products";
import Orders from "./components/orders";
import Payments from "./components/payments";
import Cart from "./components/cart";
//parent component
export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const[orders,setOrders]=useState([]);
function handleRemoveFromCart(index) {
  console.log("Removing this item: ",index);
  setCartItems((prevCart) => prevCart.filter((_, i) => i !== index));
}

  function handleAddToCart(item) {
    setCartItems((prevCart) => [...prevCart, item]);
  }
function handleOrderItem(item,index){
  setOrders((prevOrder)=>[...prevOrder,item]);
  //remove item from cart after ordering
  setCartItems((prevCart)=>prevCart.filter((_,i)=>i!==index));


}

function handleRemoveOrder(item,index){
  setOrders((prevOrder)=>prevOrder.filter((_,i)=>i!==index));

}
  return (
    <>
      <h1>E-COMMERCE SIMULATOR</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">products</Link>
        <Link to="/cart">Cart ({cartItems.length})</Link>
        <Link to="/orders">Orders({orders.length})</Link>
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
        <Route path="/cart" element={<Cart cart={cartItems} onRemoveFromCart={handleRemoveFromCart} onOrderItem={handleOrderItem}/>} />
        <Route path="/orders" element={<Orders order={orders}  onRemoveOrder={handleRemoveOrder}/>} />
        <Route path="/payments" element={<Payments />} />
      </Routes>
    </>
  );
}
