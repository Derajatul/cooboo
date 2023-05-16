const Hero = () => {
  return (
    <div className='hero max-h-screen bg-base-100'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <img
          src='./hero-food.webp'
          className='w-96 max-w-full rounded-lg shadow-2xl'
          alt='Hero food'
        />
        <div>
          <h1 className='text-center text-5xl font-bold lg:text-left'>
            Mau masak apa hari ini?
          </h1>
          <p className='py-6 text-center lg:text-left'>Cari resep nya disini</p>
          <a
            className=' btn-primary btn flex items-center justify-center text-center lg:w-44 lg:mr-auto'
            href='#recipe-list'
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
