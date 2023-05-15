import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import axios from 'axios';

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/categories.php'
      );
      setCategories(response.data.categories);
    };
    fetchData();
  }, []);

  return (
    <main className='container'>
      <Hero />

      <h2 className='text-center text-2xl font-medium'>Recipe list</h2>
      <div id='recipe-list' className='flex flex-wrap justify-center'>
        {categories.map((category) => (
          <>
            <div
              className='card image-full m-5 w-80 bg-base-100 shadow-xl'
              key={category.idCategory}
            >
              <figure>
                <img
                  src={category.strCategoryThumb}
                  alt={category.strCategory}
                />
              </figure>
              <div className='card-body'>
                <h2 className='card-title'>{category.strCategory}</h2>

                <div className='card-actions justify-end'>
                  {/* <button className='btn-primary btn'>Open</button> */}
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </main>
  );
};
export default Home;
