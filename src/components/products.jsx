import { useEffect, useState } from "react";

//handle products
export default function Products() {
  //fetch products
  //filter eg by category

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  //fetch data from an api
  //display on the ui
  //filter goods by category
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((response) => response.json())
      .then((data) => {
        const uniqueCategories = [
          ...new Set(data.map((product) => product.category)),
        ];
        console.log("Unique categories: ", uniqueCategories);
        setCategories(uniqueCategories);
      });
  }, []);
  return (
    <>
      <h1>Products</h1>

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((cat, index) => {
          return (
     
            <option value={cat} key={index}>
              {cat}
            </option>
          );
        })}
      </select>
    </>
  );
}
