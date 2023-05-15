const Hero = () => {
  return (
    <div className='hero max-h-screen bg-base-100'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <img
          src='./hero-food.webp'
          className='max-w-full w-96 rounded-lg shadow-2xl'
          alt="Hero food"
        />
        <div>
          <h1 className='text-5xl font-bold text-center lg:text-left'>Mau masak apa hari ini?</h1>
          <p className='py-6 text-center lg:text-left'>
            Cari resep nya disini
          </p>
          <a className='btn-primary btn' href="#recipe-list">Get Started</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
