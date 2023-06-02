const FAQPage = () => {
  return (
    <>
      <h3 className='mt-10 text-center text-2xl font-semibold'>FAQ</h3>

      <div
        tabIndex={0}
        className='collapse-plus collapse mt-5 border border-base-300 '
      >
        <div className='collapse-title text-xl font-medium'>
          Apa itu CooBoo?
        </div>
        <div className='collapse-content'>
          <p>
            Website Resep Makanan adalah sebuah situs web yang menyediakan
            kumpulan resep makanan dari berbagai jenis, mulai dari hidangan
            pembuka, hidangan utama, makanan penutup, dan lainnya. Situs web ini
            dapat digunakan untuk mencari inspirasi memasak, mendapatkan
            petunjuk langkah demi langkah, dan mendapatkan ide-ide baru untuk
            menciptakan hidangan yang lezat.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className='collapse-plus collapse border border-base-300 '
      >
        <div className='collapse-title text-xl font-medium'>
          Apa manfaat mengunjungi Website Resep Makanan?
        </div>
        <div className='collapse-content'>
          <p>
            Mengunjungi Website Resep Makanan memiliki beberapa manfaat, antara
            lain:
          </p>
          <p>
            - Menemukan beragam resep makanan dari berbagai jenis masakan dan
            kategori.
          </p>
          <p>
            - Mencari inspirasi untuk menciptakan hidangan baru dan kreatif.
          </p>
          <p>
            - Memperluas pengetahuan tentang bahan-bahan dan teknik memasak yang
            berbeda.
          </p>
          <p>
            - Mempelajari petunjuk langkah demi langkah untuk memasak hidangan
            dengan tepat.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className='collapse-plus collapse border border-base-300 '
      >
        <div className='collapse-title text-xl font-medium'>
          Bagaimana cara mencari resep makanan di Website Resep Makanan?
        </div>
        <div className='collapse-content'>
          <p>
            Klik tombol menu dan kamu dapat melihat makanan berdasarkan
            kategorinya.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className='collapse-plus collapse border border-base-300 '
      >
        <div className='collapse-title text-xl font-medium'>
          Apakah resep makanan di Website Resep Makanan sudah diuji?
        </div>
        <div className='collapse-content'>
          <p>
            Ya, Kamu juga dapat melihat petunjuknya dengan menggunakan video
            youtube
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className='collapse-plus collapse border border-base-300 '
      >
        <div className='collapse-title text-xl font-medium'>
          Bisakah saya mengirimkan resep saya sendiri ke Website Resep Makanan?
        </div>
        <div className='collapse-content'>
          <p>Fitur belum dibuat</p>
        </div>
      </div>
      <div
        tabIndex={0}
        className='collapse-plus collapse border border-base-300 '
      >
        <div className='collapse-title text-xl font-medium'>
          Apakah situs web ini memiliki informasi gizi atau informasi alergi?
        </div>
        <div className='collapse-content'>
          <p>Tidak ada</p>
        </div>
      </div>
    </>
  );
};
export default FAQPage;
