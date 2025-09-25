//handle cart items
export default function Cart({ cart,onRemoveFromCart,onOrderItem }) {
if(cart.length===0){
  return(<h2 className="cart-heading">Cart is empty</h2>)
}
  return (
    <>
    <h1>Cart Items</h1>
      {cart.map((item,index) => (
       <div key={`${item.id}-${index}`} className="card">
          <h2>{item.title}</h2>
          <img src={item.image} alt={item.title} />
          <p>{item.description}</p>
          <p>
            <strong>Price:</strong> {item.price} $
          </p>
          <p>
            <strong>Rating</strong> {item.rating.rate} ⭐
          </p>
          <button onClick={()=>onOrderItem(item,index)}>Order Item</button>
          <button onClick={()=>onRemoveFromCart(index)}>Remove from Cart</button>
        </div>
      ))}
    </>
  );
}
