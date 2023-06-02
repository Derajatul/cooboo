import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const MenuCard = ({ title, thumbnail }) => {
  return (
    <>
      <Link
        to={`/${title}`}
        className='m-4 transform cursor-pointer overflow-hidden bg-base-100 transition duration-500 hover:-translate-y-1 hover:scale-105'
      >
        <div className='card  bg-base-100 border-2  w-52'>
          <div className='card-body'>
            <h2 className='card-title'>{title}</h2>
          </div>
          <figure>
            <img src={thumbnail} alt={{title}} />
          </figure>
        </div>
      </Link>
    </>
  );
};

export default MenuCard;
