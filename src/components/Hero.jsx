import Button from "./Button";

const Hero = () => {
  return (
    <div className='hero block max-h-screen bg-base-100'>
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
          <Button />
        </div>
      </div>
      <hr />
      <h3 className='mt-5 text-center text-xl font-semibold'>
        Makanan Terkenal dari seluruh dunia
      </h3>
      <p className='mx-auto mt-1 max-w-md text-center'>
        kami menyediakan berbagai macam resep makanan dan minuman dari berbagai
        negara dengan cita rasa tinggi dari chef ternama
      </p>
    </div>
  );
};

export default Hero;
