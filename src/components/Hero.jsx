const Hero = () => {
  return (
    <div className='hero max-h-screen bg-base-100'>
      <div className='hero-content flex flex-col lg:flex-row-reverse'>
        <img
          src='./hero-food.webp'
          className='h-[336px] w-[440px] flex-1 rounded-3xl object-cover shadow-2xl'
          alt='Hero food'
        />
        <div>
          <h1 className='flex-1 text-center text-5xl font-bold leading-tight lg:text-left'>
            Ayo Mulai Memasak Dengan Resep Populer
          </h1>
          <p className='pt-6 text-center lg:text-left'>
            Ingin memasak tapi bingung bagaimana mulainya?
          </p>
          <p className='pb-6 text-center lg:text-left'>
            Tidak perlu khawatir lagi!
          </p>
          <div className="flex">
            <a
              className=' btn-primary btn flex items-center justify-center text-center lg:mr-auto lg:w-44 text-white'
              href='/about'
            >
              Explore Menu
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
