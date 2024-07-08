import React from "react";
import bg from "../../assets/bg/hero.png";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <div
      className="bg-[#E5E5E5] h-screen relative overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center">
          <motion.div
            className="text-center mb-8 h-32 overflow-hidden" // Reduced height
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-[#003262] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              <TypeAnimation
                sequence={[
                  "CLA YOUR ONE STOP SOLUTION",
                  1000,
                  "CLA YOUR ONE STOP SOLUTION PARTNER",
                  1000,
                  "CLA YOUR ONE STOP SOLUTION PARTNER FOR YOUR BUSINESS",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="bg-gradient-to-r from-[#003262] to-white bg-clip-text text-transparent"
              />
            </h1>
          </motion.div>

          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-white text-lg md:text-xl max-w-2xl mx-auto text-shadow-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
              dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.
            </p>
          </motion.div>

          <motion.div
            className="flex gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="drop-shadow-lg bg-gradient-to-r from-[#003262] to-white text-white p-3 px-6 rounded-full uppercase font-semibold transition duration-300 hover:bg-gradient-to-r hover:from-[#003262] hover:to-white"
            >
              <p className="text-shadow-md">Order Now</p>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="drop-shadow-lg bg-gradient-to-r from-[#003262] to-white text-white p-3 px-6 rounded-full uppercase font-semibold transition duration-300 hover:bg-gradient-to-r hover:from-[#003262] hover:to-white"
            >
              <p className="text-shadow-md">Learn More</p>
            </motion.button>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
      />
    </div>
  );
}

export default Hero;
