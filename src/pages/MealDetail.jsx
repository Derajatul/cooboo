import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';

const MealDetail = () => {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`
        );
        setMeal(response.data.meals[0]);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchMeal();
  }, [params.id]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {meal ? (
            <div className=''>
              <h3 className='my-10 text-center text-2xl font-medium'>
                {meal.strMeal}
              </h3>
              <div className='flex'>
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className='max-w-xs'
                />
                <div className='ml-7'> 
                  <h4 className='text-xl font-medium'>Intructions</h4>
                  <p>{meal.strInstructions}</p>
              
                  {/* <h5>{meal.strCategory}</h5> */}
                </div>
              </div>
            </div>
          ) : (
            <p>Meal not found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default MealDetail;
