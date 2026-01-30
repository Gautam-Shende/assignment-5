import React from "react";
import useFetch from "./hooks/useFetch";
import './index.css';

const Photos = () => {
  // Fetching the Data from the direct useFetch() function.
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products" // Main URL
  );

  // if Loading Then Show the Loading message
  if (loading) {
    return <h2 className="status">Loading products...</h2>;
  }

  // if any error will occured then show the error message
  if (error) {
    return <h2 className="status error">Error: {error}</h2>;
  }

  return (
    // build the container first
    <div className="container">
      {/* title  */}
      <h1 className="title">Product List</h1>

      {/* Grid box , for store the data from the api  */}
      <div className="grid">
        {/* Fetching the data 0 to 100 images , with the help of slice() and math() method  */}
        {data &&
          data.slice(0, 100).map((product) => (
            // use data with the help or product name 
            // and the use product.id for each images, and use to show the all photos
            <div className="card" key={product.id}> 
              {/* main images/ products */}
              <img
                src={product.images}
                alt={product.title}
              />
              {/* products title  */}
              <h3>{product.title}</h3>
              {/* products price  */}
              <p>₹ {product.price}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Photos;
