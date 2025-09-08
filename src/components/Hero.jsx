const Hero = () => {
  return (
    <section
      id="home"
      className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4">
            Grooming Profesional untuk Hewan Peliharaan Anda di Rumah
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Layanan pet grooming panggilan ke rumah dengan peralatan lengkap dan
            profesional untuk kenyamanan hewan peliharaan Anda
          </p>
          <a
            href="#booking"
            className="btn bg-primary text-white hover:bg-secondary py-3 px-6 rounded-full transition-all duration-300 inline-block">
            Pesan Layanan Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
