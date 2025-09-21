//handle cart items
export default function Cart({ cart }) {
  return (
    <>
      {cart.map((item) => (
        <div key={item.id}>
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
      ))}
    </>
  );
}
