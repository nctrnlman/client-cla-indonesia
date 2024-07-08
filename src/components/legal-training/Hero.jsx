import React, { useState, useEffect } from 'react';

function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 10,
    minutes: 24,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.days === 0 && prevTime.hours === 0 && prevTime.minutes === 0 && prevTime.seconds === 0) {
          clearInterval(timer);
          return prevTime;
        }
        
        let newTime = { ...prevTime };
        
        if (newTime.seconds > 0) {
          newTime.seconds--;
        } else {
          newTime.seconds = 59;
          if (newTime.minutes > 0) {
            newTime.minutes--;
          } else {
            newTime.minutes = 59;
            if (newTime.hours > 0) {
              newTime.hours--;
            } else {
              newTime.hours = 23;
              newTime.days--;
            }
          }
        }
        
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#E5E5E5] flex items-center h-screen">
      <div className="container mx-auto text-center">
        {/* Countdown Timer */}
        <div className="mb-12">
          <div className="grid grid-flow-col gap-8 text-center auto-cols-max justify-center">
            <div className="flex flex-col">
              <span className="countdown font-mono text-8xl sm:text-9xl md:text-10xl lg:text-11xl">
                <span style={{"--value": timeLeft.days}}></span>
              </span>
              <span className="text-xl md:text-2xl mt-2">days</span>
            </div>
            <div className="flex flex-col">
              <span className="countdown font-mono text-8xl sm:text-9xl md:text-10xl lg:text-11xl">
                <span style={{"--value": timeLeft.hours}}></span>
              </span>
              <span className="text-xl md:text-2xl mt-2">hours</span>
            </div>
            <div className="flex flex-col">
              <span className="countdown font-mono text-8xl sm:text-9xl md:text-10xl lg:text-11xl">
                <span style={{"--value": timeLeft.minutes}}></span>
              </span>
              <span className="text-xl md:text-2xl mt-2">min</span>
            </div>
            <div className="flex flex-col">
              <span className="countdown font-mono text-8xl sm:text-9xl md:text-10xl lg:text-11xl">
                <span style={{"--value": timeLeft.seconds}}></span>
              </span>
              <span className="text-xl md:text-2xl mt-2">sec</span>
            </div>
          </div>
        </div>

        <h1 className="text-primary text-3xl md:text-5xl font-bold leading-tight mb-4">
          Contact Us
        </h1>
        <p className="text-primary mt-4 text-lg md:text-xl mb-10">
          for Further Information on Legal/Tax/Business Training
        </p>
        <div>
          <button 
            onClick={() => scrollToSection('SequentialForm')}
            className="bg-secondary p-4 px-6 rounded-full text-primary font-semibold hover:bg-primary hover:text-secondary transition duration-300"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;