/* eslint-disable react/prop-types */
const CardCategory = ({ category }) => {
  return (
    <>
      <a
        className='card image-full m-5 w-80 transform cursor-pointer overflow-hidden bg-base-100 shadow-lg transition duration-500 hover:-translate-y-1 hover:scale-105 hover:shadow-xl '
        key={category.idCategory}
      >
        <figure>
          <img src={category.strCategoryThumb} alt={category.strCategory} />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{category.strCategory}</h2>

          <div className='card-actions justify-end'>
            {/* <button className='btn-primary btn'>Open</button> */}
          </div>
        </div>
      </a>
    </>
  );
};

export default CardCategory;
