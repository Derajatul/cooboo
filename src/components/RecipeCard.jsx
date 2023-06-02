/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FavoriteRecipesContext } from '../favoriteRecipesContext';
import { AiFillHeart } from 'react-icons/ai';

const RecipeCard = ({ thumbnail, title, id }) => {
  const { addToFavorites, favoriteRecipes } = useContext(
    FavoriteRecipesContext
  );
  const [isAddedToFavorites, setIsAddedToFavorites] = useState(false);

  const handleAddToFavorites = () => {
    addToFavorites({ id, title, thumbnail });
    setIsAddedToFavorites(true);
  };

  // Cek apakah resep sudah ada di daftar favorit berdasarkan id
  const isRecipeInFavorites = favoriteRecipes.some(
    (recipe) => recipe.id === id
  );

  return (
    <div className='flex flex-col'>
      <Link to={`/${title}/${id}`}>
        <div className='card-compact card m-4 w-52 border-2 bg-base-100 transition duration-500 hover:-translate-y-1 hover:scale-105'>
          <figure>
            <img src={thumbnail} alt={title} />
          </figure>
          <div className='card-body h-24'>
            <h2 className='card-title'>{title}</h2>
          </div>
        </div>
      </Link>

      {!isAddedToFavorites && !isRecipeInFavorites && (
        <button onClick={handleAddToFavorites} className='btn btn-primary w-52 mx-auto flex items-center'>
          <AiFillHeart className='mr-2' />
          Favorite
        </button>
      )}
      {isAddedToFavorites || isRecipeInFavorites ? (
        <button disabled className='btn btn-primary w-52 mx-auto'>
          Added to Favorites
        </button>
      ) : null}
    </div>
  );
};

export default RecipeCard;