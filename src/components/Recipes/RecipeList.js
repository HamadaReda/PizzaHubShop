import React from "react";
import RecipeCard from "./RecipeCard";
import "./Recipes.css";

const RecipeList = ({ recipes }) => {
  return (
    <div className="recipes-container">
      {recipes?.length > 0 &&
        recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)}
    </div>
  );
};

export default RecipeList;
