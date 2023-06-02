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

  const getEmbedUrl = (url) => {
    const videoId = url.split('v=')[1];
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    return embedUrl;
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {meal ? (
            <div className=''>
              <h3 className='mt-10 text-center text-2xl font-semibold'>
                {meal.strMeal}
              </h3>
              <h4 className='mb-10 text-center text-xl font-medium'>
                {meal.strArea}
              </h4>

              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className='mx-auto w-96 max-w-full rounded-3xl'
              />

              <div className='mt-12 flex flex-col md:flex-row'>
                <div>
                  <h4 className='text-xl font-medium text-center'>Bahan-bahan</h4>
                  <table className='table mt-3 mx-auto'>
                    {/* head */}
                    <thead>
                      <tr>
                        <th>Bahan</th>
                        <th>Takaran</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{meal.strIngredient1}</td>
                        <td>{meal.strMeasure1}</td>
                      </tr>

                      <tr>
                        <td>{meal.strIngredient2}</td>
                        <td>{meal.strMeasure2}</td>
                      </tr>

                      <tr>
                        <td>{meal.strIngredient3}</td>
                        <td>{meal.strMeasure3}</td>
                      </tr>

                      <tr>
                        <td>{meal.strIngredient4}</td>
                        <td>{meal.strMeasure4}</td>
                      </tr>

                      <tr>
                        <td>{meal.strIngredient5}</td>
                        <td>{meal.strMeasure5}</td>
                      </tr>

                      <tr>
                        <td>{meal.strIngredient6}</td>
                        <td>{meal.strMeasure6}</td>
                      </tr>

                      <tr>
                        <td>{meal.strIngredient7}</td>
                        <td>{meal.strMeasure7}</td>
                      </tr>

                      <tr>
                        <td>{meal.strIngredient8}</td>
                        <td>{meal.strMeasure8}</td>
                      </tr>

                      <tr>
                        <td>{meal.strIngredient9}</td>
                        <td>{meal.strMeasure9}</td>
                      </tr>

                      <tr>
                        <td>{meal.strIngredient10}</td>
                        <td>{meal.strMeasure10}</td>
                      </tr>

                      <tr>
                        <td>{meal.strIngredient11}</td>
                        <td>{meal.strMeasure11}</td>
                      </tr>

                      <tr>
                        <td>{meal.strIngredient12}</td>
                        <td>{meal.strMeasure12}</td>
                      </tr>

                      <tr>
                        <td>{meal.strIngredient13}</td>
                        <td>{meal.strMeasure13}</td>
                      </tr>

                      <tr>
                        <td>{meal.strIngredient14}</td>
                        <td>{meal.strMeasure14}</td>
                      </tr>

                      <tr>
                        <td>{meal.strIngredient15}</td>
                        <td>{meal.strMeasure15}</td>
                      </tr>

                      <tr>
                        <td>{meal.strIngredient16}</td>
                        <td>{meal.strMeasure16}</td>
                      </tr>

                      <tr>
                        <td>{meal.strIngredient17}</td>
                        <td>{meal.strMeasure17}</td>
                      </tr>

                      <tr>
                        <td>{meal.strIngredient18}</td>
                        <td>{meal.strMeasure18}</td>
                      </tr>

                      <tr>
                        <td>{meal.strIngredient19}</td>
                        <td>{meal.strMeasure19}</td>
                      </tr>

                      <tr>
                        <td>{meal.strIngredient20}</td>
                        <td>{meal.strMeasure20}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className='md:pl-10 pl-0'>
                  <h4 className='text-xl font-medium text-center'>Petunjuk</h4>
                  <p className='mt-3'>{meal.strInstructions}</p>

                  <iframe
                    className='mt-3 max-w-full'
                    width='550'
                    height='315'
                    src={getEmbedUrl(meal.strYoutube)}
                    title={meal.strMeal}
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                  ></iframe>

                  <h5 className='mt-5 text-lg font-semibold'>
                    Category: {meal.strTags}
                  </h5>
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
