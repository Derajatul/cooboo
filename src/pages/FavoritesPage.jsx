import { useContext, useEffect, useState } from 'react';
import { FavoriteRecipesContext } from '../favoriteRecipesContext';
import { Link } from 'react-router-dom';
import { BsTrash } from 'react-icons/bs';

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
      <h3 className='my-10 text-center text-2xl font-semibold'>
        Favorite Recipes
      </h3>
      {recipes.length === 0 ? (
        <p className='text-center'>Favorite masih kosong</p>
      ) : (
        <div id='recipe-list' className='flex flex-wrap justify-center'>
          {recipes.map((recipe) => (
            <>
              <div className='flex flex-col'>
                <Link to={`/${recipe.title}/${recipe.id}`}>
                  <div className='card card-compact m-4 w-52 border-2 bg-base-100 transition duration-500 hover:-translate-y-1 hover:scale-105'>
                    <figure>
                      <img src={recipe.thumbnail} alt={recipe.title} />
                    </figure>
                    <div className='card-body h-24'>
                      <h2 className='card-title'>{recipe.title}</h2>
                    </div>
                  </div>
                </Link>

                <button
                  onClick={() => handleRemoveFromFavorites(recipe.id)}
                  className='btn-secondary btn mx-auto w-52'
                >
                  <BsTrash className='mr-2' />
                  Remove
                </button>
              </div>
            </>
          ))}
        </div>
      )}
    </div>
  );
};
export default FavoritesPage;
