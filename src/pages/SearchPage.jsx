import { useState } from 'react';
import axios from 'axios';
import RecipeCard from '../components/RecipeCard';

const SearchPage = () => {
  return (
    <>
      <SearchRecipe />
    </>
  );
};

const SearchRecipe = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchButtonClick = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      setSearchResults(response.data.meals);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className='mt-3 flex justify-end'>
        <div className='form-control'>
          <div className='input-group'>
            <input
              type='text'
              value={searchTerm}
              onChange={handleSearchInputChange}
              placeholder='Search recipe…'
              className='input-bordered input'
            />
            <button
              type='submit'
              className='btn-square btn'
              onClick={handleSearchButtonClick}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap items-center justify-center'>
        {loading ? (
          <h3 className='text-2xl font-medium'>Masukan nama makanan</h3>
        ) : (
          <>
            {searchResults &&
              searchResults.map((meal) => (
                <RecipeCard
                  key={meal.idMeal}
                  title={meal.strMeal}
                  thumbnail={meal.strMealThumb}
                />
              ))}
          </>
        )}
      </div>
    </>
  );
};
export default SearchPage;
