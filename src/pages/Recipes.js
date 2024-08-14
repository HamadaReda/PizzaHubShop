import React from "react";
import { useSelector } from "react-redux";
import RecipeList from "../components/Recipes/RecipeList";

const Recipes = () => {
  const getRecipes = useSelector((state) => state.allRecipes);
  return (
    <div>
      <h1 className="main-heading">Our Recipes</h1>
      <RecipeList recipes={getRecipes} />
    </div>
  );
};

export default Recipes;
