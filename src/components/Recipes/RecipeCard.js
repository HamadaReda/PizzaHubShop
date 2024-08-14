import React from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlistAction,
  removeFromWishlistAction,
} from "../../redux/CartActions";

const RecipeCard = ({ recipe }) => {
  const isWishlisted = useSelector(
    (state) =>
      state.wishlist.findIndex((rec) => rec.title === recipe.title) >= 0
  );
  const dispatch = useDispatch();
  const addToWishlist = () => {
    dispatch(addToWishlistAction(recipe));
  };
  const removeFromWishlist = () => {
    dispatch(removeFromWishlistAction(recipe));
  };
  return (
    <div className="recipe-card">
      {isWishlisted ? (
        <button className="wishlist-btn" onClick={removeFromWishlist}>
          <BsHeartFill />
        </button>
      ) : (
        <button className="wishlist-btn" onClick={addToWishlist}>
          <BsHeart />
        </button>
      )}
      <img src={recipe.image} alt={recipe.title} />
      <div className="recipe-details">
        <h6>{recipe.category}</h6>
        <h2>{recipe.title}</h2>
      </div>
    </div>
  );
};

export default RecipeCard;
