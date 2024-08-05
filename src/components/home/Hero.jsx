import bg from "../../assets/bg/hero.png";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faLightbulb,
  faGavel,
  faUsers,
  faHandshake,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <div
      className="bg-[#E5E5E5] min-h-screen relative overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        className="absolute inset-0 bg-black opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-start justify-between">
          <motion.div className="md:w-1/2 mb-8 md:mb-0">
            <div className="mb-4">
              <h1 className="text-[#FDB515] uppercase font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2">
                Corporate Legal Associate
              </h1>
              <div className="h-32">
                <TypeAnimation
                  sequence={[
                    "Your Trusted Legal Partner",
                    1000,
                    "Experts in Indonesian Law",
                    1000,
                    "Empowering Your Business",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="bg-gradient-to-r from-[#FDB515] to-white bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl lg:text-6xl font-bold"
                />
              </div>
            </div>
            <p className="text-white text-lg md:text-xl max-w-xl text-shadow-md mb-6">
            Providing comprehensive legal services with expertise and integrity since 2019. Your success is our priority.”
            .<br/> Trusted by 100+ Business Actors in Indoensia
            </p>
            <motion.div
              className="flex justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FDB515] text-primary py-2 px-6 rounded-full uppercase font-semibold transition duration-300 hover:bg-[#E5A214]"
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-[#FDB515] text-[#FDB515] py-2 px-6 rounded-full uppercase font-semibold transition duration-300 hover:bg-[#FDB515] hover:text-primary"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-5 shadow-lg">
              <h2 className="text-white shadow-lg text-center uppercase text-2xl font-semibold mb-4">
                Our Practice Areas
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: "Corporate Law", icon: faBuilding },
                  { title: "Intellectual Property", icon: faLightbulb },
                  { title: "Litigation & Dispute Resolution", icon: faGavel },
                  { title: "Employment Law", icon: faUsers },
                  { title: "Mergers & Acquisitions", icon: faHandshake },
                  { title: "Real Estate Law", icon: faHome },
                ].map((area, index) => (
                  <motion.div
                    key={index}
                    className="bg-white bg-opacity-20 rounded-lg p-4 hover:bg-opacity-30 transition-all duration-300"
                    whileHover={{ scale: 1.03 }}
                  >
                    <FontAwesomeIcon
                      icon={area.icon}
                      className="text-[#FDB515] text-2xl mb-2"
                    />
                    <h3 className="text-white font-medium text-lg mb-1">
                      {area.title}
                    </h3>
                    <p className="text-gray-300 text-base">
                      Expert legal advice and representation
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
