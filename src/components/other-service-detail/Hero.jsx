import Breadcrumb from "./Breadcrumb";

function Hero({ title }) {
  return (
    <div className="bg-gradient-to-r from-primary to-cyan-600 p-20">
      <div className=" max-w-7xl mx-auto justify-center ">
        <div>
          <Breadcrumb title={title} />
        </div>
        <div>
          <p className=" text-white font-bold text-xl sm:text-2xl md:text-6xl pt-10">
            {title}
          </p>
          <p className="  font-bold text-lg sm:text-xl md:text-3xl pt-10">
            Elevate your business&apos;s legal journey with our Legal Associate
            as your trusted partner. We provide legal assistance tailored to
            your company&apos;s needs and type. Our innovative solutions
          </p>
        </div>

        <div className="flex gap-8 pt-10">
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
