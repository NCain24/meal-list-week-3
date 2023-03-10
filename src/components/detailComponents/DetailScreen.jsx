import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailImage from './DetailImage';
import classes from './DetailScreen.module.css';
import axios from 'axios';

const DetailScreen = () => {

  const { id } = useParams()

  const [recipe, setRecipe] = useState({})
  
  useEffect(() => {
    axios.get(`https://recipes.devmountain.com/recipes/${id}`)
      .then((res) => {
        setRecipe(res.data)
        console.log(res.data.image_url)
    })
  }, [])

  return (
    <section className={classes['details-container']}>
      <DetailImage image={recipe.image_url} title={recipe.recipe_name} />
      <div className={classes['details-card-container']}>
        <div className={classes['recipes-and-ingredients-container']}>
          <h2>Recipe</h2>
          <h4>Prep Time: {recipe.prep_time}</h4>
          <h4>Cook Time: {recipe.cook_time}</h4>
          <h4>Serves: {recipe.serves}</h4>
          <br />
          <h2>Ingredients</h2>
          {recipe.ingredients && recipe.ingredients.map((ing, index) => {
            return <h4>{ing.quantity} {ing.ingredient}</h4>
          })}
        </div>

        <div className={classes['instructions-container']}>
          <h2>Instructions</h2>
          <p style={{ whiteSpace: "pre-wrap"}}>{recipe.instructions && JSON.parse(recipe.instructions)}</p>
        </div>
      </div>
    </section>
  );
};

export default DetailScreen;
