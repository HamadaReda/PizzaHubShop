import React from "react";
import ProductCard from "./ProductCard";
import "./Products.css";

const ProductsList = ({ products, setMessage }) => {
  return (
    <div className="products-container">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} setMessage={setMessage} />
      ))}
    </div>
  );
};

export default ProductsList;
