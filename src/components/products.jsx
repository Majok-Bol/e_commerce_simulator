import { useEffect, useState } from "react";

//handle products
export default function Products({onAddToCart}) {
  //fetch products
  //filter eg by category

  const [categories, setCategories] = useState([]);
  //manage selected category state
  const [selectedCategory, setSelectedCategory] = useState("");
  //handle products data
  const [products, setProducts] = useState([]);
  //handle filtered products data
  const [filteredProducts, setFilteredProducts] = useState([]);
  //fetch data from an api
  //display on the ui
  //filter goods by category
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((data) => {
        console.log("All products data: ", data);
        setProducts(data);
        setFilteredProducts(data);
        const uniqueCategories = [
          ...new Set(data.map((product) => product.category)),
        ];
        console.log("Unique categories: ", uniqueCategories);
        setCategories(uniqueCategories);
        //display products data
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);
  return (
    <>
      <h1>Products</h1>
      <select
        value={selectedCategory}
        onChange={(e) => {
          const eventValue = e.target.value;
          setSelectedCategory(eventValue);
          if (eventValue === "") {
            //show all products
            setFilteredProducts(products);
          } else {
            setFilteredProducts(
              products.filter((product) => product.category === eventValue)
            );
          }
        }}
      >
        <option value="">All</option>
        {categories.map((cat, index) => {
          return (
            <option value={cat} key={index}>
              {cat}
            </option>
          );
        })}
      </select>
      {filteredProducts.map((item) => {
        // console.log(item);
        return (
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
            <button onClick={() =>onAddToCart(item)}>Add to Cart</button>
          </div>
        );
      })}
    </>
  );
}
