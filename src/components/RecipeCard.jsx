/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const RecipeCard = ({ thumbnail, title, id }) => {
  return (
    <Link to={`/${title}/${id}`} className='card-actions'>
      <div className='card card-compact m-4 w-52 bg-base-100 transition duration-500 hover:-translate-y-1 hover:scale-105'>
        <figure>
          <img src={thumbnail} alt={title} />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
