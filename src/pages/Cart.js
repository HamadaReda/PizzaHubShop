import React from "react";
import "./Page.css";
import ProductsList from "../components/Products/ProductsList";
import { useSelector } from "react-redux";

const Cart = () => {
  const getCartProducts = useSelector((state) => state.cartProducts);
  const totalPrice = useSelector((state) => state.totalPriceInCart);
  return (
    <div>
      <h1 className="main-heading">Cart</h1>
      <h4 className="total-price">Total Price: {totalPrice} EGP</h4>
      <ProductsList products={getCartProducts} />
    </div>
  );
};

export default Cart;
