import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  addToCartAction,
  decreaseProductInCartAction,
  IncreaseProductInCartAction,
  removeFromCartAction,
} from "../../redux/CartActions";

const ProductCard = ({ product, setMessage }) => {
  const { pathname } = useLocation();
  const isInCart = pathname.includes("cart");
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addToCartAction(product));
    setMessage(`${product.name} has been added to the cart!`);
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };
  const removeFromCart = () => {
    dispatch(removeFromCartAction(product));
  };
  const increaseProductInCart = () => {
    dispatch(IncreaseProductInCartAction(product));
  };
  const decreaseProductInCart = () => {
    dispatch(decreaseProductInCartAction(product));
  };
  return (
    <div className="product-card">
      {isInCart && (
        <button className="del-product" onClick={removeFromCart}>
          <BsCartPlus />
        </button>
      )}
      <img src={product.image} alt={product.name} />
      <div className="product-details">
        <h3>
          {product.name}
          {isInCart && <span> x ({product.quantity})</span>}
        </h3>
        <h5>{product.ingredients}</h5>
        <div className="product-footer">
          {isInCart ? (
            <>
              <button onClick={increaseProductInCart}>
                <AiOutlinePlus />
              </button>
              <h3>{product.price} EGP</h3>
              <button
                onClick={decreaseProductInCart}
                disabled={product.quantity <= 1}
              >
                <AiOutlineMinus />
              </button>
            </>
          ) : (
            <>
              <h3>{product.price} EGP</h3>
              <button onClick={addToCart}>
                <BsCartPlus />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
