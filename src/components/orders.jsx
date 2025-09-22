//handle orders
export default function Orders({order}){
   return(<>
        {order.map((item,index) => {
        // console.log(item);
        return (
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
          </div>
        );
      })}
   
   </>)
   
   
}