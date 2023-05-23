import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const CardCategory = ({ strCategory, strCategoryThumb }) => {
  return (
    <>
      <Link
        to={`/${strCategory}`}
        className='card image-full m-5 w-80 transform cursor-pointer overflow-hidden bg-base-100 shadow-lg transition duration-500 hover:-translate-y-1 hover:scale-105 hover:shadow-xl '
      >
        <figure>
          <img src={strCategoryThumb} alt={strCategory} />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{strCategory}</h2>

          <div className='card-actions justify-end'>
            {/* <button className='btn-primary btn'>Open</button> */}
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardCategory;
