function Hero() {
  return (
    <div className="bg-[#E5E5E5] h-screen">
      <div className="flex flex-col justify-center gap-16 items-center h-full">
        <p className="text-center text-[#003262] font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl px-4 sm:px-8">
          LEGAL ASSOCIATE
        </p>
        <div className="flex gap-8">
          <button
            className="bg-secondary p-4 px-6 rounded-full text-primary font-semibold hover:bg-primary hover:text-secondary transition duration-300
          "
          >
            Get Started
          </button>
          <button className="bg-secondary p-4 px-6 rounded-full text-primary font-semibold hover:bg-primary hover:text-secondary transition duration-300">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
