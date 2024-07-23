import Breadcrumb from "./Breadcrumb";
import { FaThumbsUp } from "react-icons/fa";

function Hero({ title, description }) {
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
          <p className=" text-white  font-bold text-lg sm:text-xl md:text-3xl pt-10">
            {description}
          </p>
        </div>

        <div className="flex gap-8 pt-10 items-center">
          <button className="bg-secondary p-4 px-6 rounded-full text-white font-semibold shadow-lg transform hover:scale-105 hover:shadow-xl transition duration-300 flex items-center gap-2">
            <FaThumbsUp className="text-white" />
            Recommended
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
