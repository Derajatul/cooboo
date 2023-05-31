import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const MenuCard = ({ title, thumbnail }) => {
  return (
    <>
      <Link
        to={`/${title}`}
        className='transform cursor-pointer overflow-hidden bg-base-100 transition duration-500 hover:-translate-y-1 hover:scale-105'
      >
        <div className='card w-52 bg-base-100 m-4'>
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
