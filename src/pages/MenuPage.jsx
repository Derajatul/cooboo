import axios from 'axios';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import MenuCard from '../components/MenuCard';

const MenuPage = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://www.themealdb.com/api/json/v1/1/categories.php'
        );
        setMenu(response.data.categories);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <h3 className='flex justify-center my-10 text-2xl font-semibold'>Menu</h3>

      {loading ? (
        <Loading />
      ) : (
        <div className='flex flex-wrap justify-center'>
          {menu.map((m) => (
            <MenuCard key={m.idCategory} title={m.strCategory} thumbnail={m.strCategoryThumb}/>
          ))}
        </div>
      )}
    </>
  );
};
export default MenuPage;
