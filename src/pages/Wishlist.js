import React from "react";
import RecipeList from "../components/Recipes/RecipeList";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const getWishlist = useSelector((state) => state.wishlist);
  return (
    <div>
      <h1 className="main-heading">Our Wishlist</h1>
      <RecipeList recipes={getWishlist} />
    </div>
  );
};

export default Wishlist;
