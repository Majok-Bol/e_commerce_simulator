//handle orders
export default function Orders({order,onRemoveOrder}){
  if(order.length===0){
    return(<h1 className="cart-heading">Order list is empty</h1>)
  }
   return(<>
   <h1>Ordered Items</h1>
        {order.map((item,index) => {
        // console.log(item);
        return (
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
            <button onClick={()=>onRemoveOrder(item,index)}>Remove Item</button>
          </div>
        );
      })}
   
   </>)
   
   
}