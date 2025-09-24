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
  alert("Item removed from cart items")
  setCartItems((prevCart) => prevCart.filter((_, i) => i !== index));
}

  function handleAddToCart(item) {
    alert(`Item added to cart\nCheck your cart items`)
    setCartItems((prevCart) => [...prevCart, item]);
  }
function handleOrderItem(item,index){
     alert(`Item added to Orders list\nCheck your Orders `) 
  setOrders((prevOrder)=>[...prevOrder,item]);
  //remove item from cart after ordering
  setCartItems((prevCart)=>prevCart.filter((_,i)=>i!==index));

}

function handleRemoveOrder(item,index){
  alert("Item removed from Order list")
  setOrders((prevOrder)=>prevOrder.filter((_,i)=>i!==index));

}
function handleClearOrders(){
  setOrders([]);
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
        <Route path="/payments" element={<Payments order={orders} onClearOrders={handleClearOrders}/>} />
      </Routes>
    </>
  );
}
