import React, { useState } from "react";
import "./Page.css";
import ProductsList from "../components/Products/ProductsList";
import { useSelector } from "react-redux";

const Menu = () => {
  const getProducts = useSelector((state) => state.allProducts);
  const [message, setMessage] = useState("");
  return (
    <div>
      <h1 className="main-heading">Our Menu</h1>
      {message && <div className="message">{message}</div>}
      <ProductsList products={getProducts} setMessage={setMessage} />
    </div>
  );
};

export default Menu;
