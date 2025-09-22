//handle cart items
export default function Cart({ cart,onRemoveFromCart,onOrderItem }) {
console.log("Cart data: ",cart)

  return (
    <>
      {cart.map((item,index) => (
      <div key={`${item.id}-${index}`}>
          <h2>{item.title}</h2>
          <img src={item.image} />
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
