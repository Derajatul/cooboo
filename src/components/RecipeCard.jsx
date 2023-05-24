/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const RecipeCard = ({ thumbnail, title, id }) => {
  return (
    <div className='card card-compact m-5 w-72 bg-base-100 shadow-xl'>
      <figure>
        <img src={thumbnail} alt={title} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <Link to={`/${title}/${id}`} className='card-actions justify-end'>
          <button className='btn-primary btn'>Lihat resep</button>
        </Link>
      </div>
    </div>
  );
};

export default RecipeCard;
