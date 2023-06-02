import Button from "../components/Button"

const AboutPage = () => {
  return (
    <>
      <h3 className='mt-10 text-2xl font-semibold text-center'>
        Selamat datang di CooBoo!
      </h3>
      <p className='py-3'>
        Kami adalah platform online yang menyediakan resep makanan yang lezat
        dan bermanfaat untuk semua orang. Kami hadir untuk memperluas
        keterampilan memasak Anda dan memberikan inspirasi dalam dunia kuliner.
        Temukan berbagai resep, tips praktis, dan panduan langkah demi langkah
        di sini. Bergabunglah dengan komunitas kami yang aktif dan nikmati
        perjalanan memasak yang menyenangkan. Selamat memasak dan menciptakan
        hidangan lezat!
      </p>

      <Button text="Mulai Memasak"/>

    </>
  );
};

export default AboutPage;
