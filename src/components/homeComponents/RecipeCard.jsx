import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './RecipeCard.module.css';

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/recipe/${recipe.recipe_id}`);
  };

  return (
    <div>
    <div className={classes.card}>
      <div>
        <div className={classes['recipe-image']}>
          <img src={recipe.image_url} alt="" />
        </div>
        <h1 className={classes['recipe-title']}>{recipe.recipe_name}</h1>
      </div>
      <button className={classes['recipe-button']}onClick={clickHandler}>See More</button>
      
      </div>
    </div>
  );
};

export default RecipeCard;
