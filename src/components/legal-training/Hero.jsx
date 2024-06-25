function Hero() {
  return (
    <div className="bg-[#E5E5E5] flex items-center h-screen">
      <div className="container mx-auto text-center">
        <h1 className="text-primary text-4xl md:text-6xl font-bold leading-tight mb-4">
          Contact Us
        </h1>
        <p className="text-primary mt-8 text-lg md:text-xl">
          for Further Information on Legal/Tax/Business Training
        </p>
        <div className="mt-10">
          <a
            href="/"
            className="bg-secondary p-4 px-6 rounded-full text-primary font-semibold hover:bg-primary hover:text-secondary py-3  transition duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
