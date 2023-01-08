import React, { useEffect, useState } from 'react';
import AdBanner from './AdBanner';
import Recipes from './Recipes';
import axios from 'axios';

const HomeScreen = () => {
  
  const [recipes, setRecipes] = useState([]);

  const getRecipes = () => {
    axios.get('https://recipes.devmountain.com/recipes').then((res) => {
      setRecipes(res.data);
      console.log(res.data);
    });
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div>
      <AdBanner />
      <Recipes recipes={recipes} />
    </div>
  );
};

export default HomeScreen;
