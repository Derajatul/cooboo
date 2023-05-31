import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import RecipeCard from '../components/RecipeCard';

const CategoryPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.menu}`
        );
        setRecipes(response.data.meals);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [params.menu]);

  return (
    <div>
      <h2 className='text-center text-2xl font-medium my-10'>
        Recipes in the {params.menu} category
      </h2>

      {loading ? (
        <Loading />
      ) : (
        <div id='recipe-list' className='flex flex-wrap justify-center'>
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.idMeal}
              id={recipe.idMeal}
              title={recipe.strMeal}
              thumbnail={recipe.strMealThumb}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
