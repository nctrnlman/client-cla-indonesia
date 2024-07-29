import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2024-08-27T00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gradient-to-br from-primary to-blue-800 flex items-center justify-center min-h-screen text-white py-20 px-4">
      <div className="container mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold leading-tight mb-6"
        >
          Legal Training Excellence
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto"
        >
          Enhance your legal expertise with our comprehensive training programs
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-12 bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Next Training Starts In:
          </h2>
          <div className="grid grid-flow-col gap-4 md:gap-8 text-center auto-cols-max justify-center">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div
                key={unit}
                className="flex flex-col p-2 bg-primary rounded-box text-neutral-content"
              >
                <span className="countdown font-mono text-4xl md:text-6xl lg:text-7xl">
                  <span style={{ "--value": value }}></span>
                </span>
                <span className="text-xs md:text-sm mt-2">{unit}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button
            onClick={() => scrollToSection("TrainingDetails")}
            className="bg-secondary text-primary font-bold py-3 px-8 rounded-full text-lg hover:bg-white hover:text-primary transition duration-300 shadow-lg"
          >
            Explore Training Programs
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
