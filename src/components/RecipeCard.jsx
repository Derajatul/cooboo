/* eslint-disable react/prop-types */
const RecipeCard = ({thumbnail,title}) => {
  return (
    <>
      <div
        className='card card-compact m-5 w-72 bg-base-100 shadow-xl'
      >
        <figure>
          <img src={thumbnail} alt={title} />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{title}</h2>
          {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
          <div className='card-actions justify-end'>
            <button className='btn-primary btn'>Lihat resep</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default RecipeCard
