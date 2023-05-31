import { useContext, useEffect, useState } from 'react';
import { FavoriteRecipesContext } from '../favoriteRecipesContext';
import { Link } from 'react-router-dom';

const FavoritesPage = () => {
  const { favoriteRecipes, removeFromFavorites } = useContext(
    FavoriteRecipesContext
  );
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(favoriteRecipes);
  }, [favoriteRecipes]);

  const handleRemoveFromFavorites = (recipeId) => {
    removeFromFavorites(recipeId);
    setRecipes(recipes.filter((recipe) => recipe.id !== recipeId));
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold my-10 text-center">Favorite Recipes</h3>
      <div id='recipe-list' className='flex flex-wrap justify-center'>
        {recipes.map((recipe) => (
          <>
            <div className='flex flex-col'>
              <Link to={`/${recipe.title}/${recipe.id}`}>
                <div className='card-compact card border-2 m-4 w-52 bg-base-100 transition duration-500 hover:-translate-y-1 hover:scale-105'>
                  <figure>
                    <img src={recipe.thumbnail} alt={recipe.title} />
                  </figure>
                  <div className='card-body h-24'>
                    <h2 className='card-title'>{recipe.title}</h2>
                  </div>
                </div>
              </Link>

              <button onClick={() => handleRemoveFromFavorites(recipe.id)} className='btn btn-secondary w-52 mx-auto'>
                Remove from Favorites
              </button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};
export default FavoritesPage;
