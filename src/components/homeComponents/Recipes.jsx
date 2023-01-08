import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import { BiSearchAlt2 } from 'react-icons/bi';
import classes from './RecipeCard.module.css';

const Recipes = ({ recipes }) => {
  const [search, setSearch] = useState('');

  const showRecipe = recipes
    .filter((recipe, index) => {
      let recipeName = recipe.recipe_name.toLowerCase();
      let searchName = search.toLowerCase();
      return recipeName.includes(searchName);
    })
    .map((recipe, index) => {
      return <RecipeCard recipe={recipe} />;
    });

    return (
      <div>
        <span className="search-container">
          <BiSearchAlt2 className="search-icon" color="#DA7635" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for a Recipe"
          />
        </span>
        <div className={classes.container}>
          {showRecipe ? showRecipe : <h1>No recipes to show...</h1>}
        </div>
      </div>
    );
};

export default Recipes;
