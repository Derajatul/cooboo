/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { createContext, useState } from 'react';

export const FavoriteRecipesContext = createContext();

export const FavoriteRecipesProvider = ({ children }) => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoriteRecipes');
    if (storedFavorites) {
      setFavoriteRecipes(JSON.parse(storedFavorites));
    }
  }, []);

  const addToFavorites = (recipe) => {
    setFavoriteRecipes((prevFavorites) => {
      const updatedFavorites = [...prevFavorites, recipe];
      localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  const removeFromFavorites = (recipeId) => {
    setFavoriteRecipes((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter(
        (recipe) => recipe.id !== recipeId
      );
      localStorage.setItem('favoriteRecipes', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  return (
    <FavoriteRecipesContext.Provider
      value={{ favoriteRecipes, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoriteRecipesContext.Provider>
  );
};
