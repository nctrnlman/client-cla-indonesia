import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBalanceScale,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

function Hero() {
  const MotionText = ({ children, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );

  return (
    <div className="pt-20">
      <div className="flex flex-col justify-center gap-4 items-center mx-auto h-full ">
        <button className="bg-secondary p-4 px-6 rounded-full text-primary font-extrabold text-lg hover:bg-primary hover:text-secondary transition duration-300">
          ABOUT
        </button>
        <p className="text-center text-[#003262] font-extrabold outline-2 text-xl sm:text-2xl md:text-4xl lg:text-5xl px-4 sm:px-8">
          LEGAL ASSOCIATE
        </p>
      </div>
      {/* desc */}
      <div className="bg-gradient-to-r from-primary to-cyan-600 h-full p-4 mt-14 w-full">
        <div className="flex flex-col justify-center md:flex-row md:justify-around gap-6 max-w-7xl mx-auto py-10 items-center">
          {/* icon for mobile */}
          <div className="md:hidden flex justify-center mb-4">
            <FontAwesomeIcon
              icon={faBalanceScale}
              className="text-yellow-400 h-24"
            />
          </div>
          {/* text */}
          <div className="px-4">
            <p className="text-justify text-xl sm:text-2xl py-4 text-white">
              Elevate your business&apos;s legal journey with our Legal
              Associate as your trusted partner. We provide legal assistance
              tailored to your company&apos;s needs and type. Our innovative
              solutions, quick responses, and flexible services ensure that your
              legal needs are met efficiently. Partner with us to unlock your
              business&apos;s full potential for growth and success.
            </p>
            <ul className="text-left space-y-2 py-2">
              {[
                "Personalized legal advice",
                "Contract review and drafting",
                "Regulatory compliance assistance",
                "On-demand legal consultations",
              ].map((item, index) => (
                <MotionText key={index} delay={0.8 + index * 0.1}>
                  <li className="text-base">
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="mr-2 text-green-400"
                    />{" "}
                    <span className="text-white"> {item}</span>
                  </li>
                </MotionText>
              ))}
            </ul>
            <div>
              <div className="bg-white text-primary w-fit flex p-6 rounded-lg gap-4 rounded-tl-3xl rounded-br-3xl mt-10">
                {/* icon */}
                <div>
                  <svg
                    width="47"
                    height="47"
                    viewBox="0 0 47 47"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_412_677)">
                      <path
                        d="M23.5 3.91699C12.69 3.91699 3.91669 12.6903 3.91669 23.5003C3.91669 34.3103 12.69 43.0837 23.5 43.0837C34.31 43.0837 43.0834 34.3103 43.0834 23.5003C43.0834 12.6903 34.31 3.91699 23.5 3.91699ZM23.5 33.292C22.4229 33.292 21.5417 32.4107 21.5417 31.3337V23.5003C21.5417 22.4232 22.4229 21.542 23.5 21.542C24.5771 21.542 25.4584 22.4232 25.4584 23.5003V31.3337C25.4584 32.4107 24.5771 33.292 23.5 33.292ZM25.4584 17.6253H21.5417V13.7087H25.4584V17.6253Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_412_677">
                        <rect width="47" height="47" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="text-base">
                  <p className="font-bold text-xl">What’s more?</p>
                  <p>FREE Legal Training</p>
                  <p>*You can also customize the services you require</p>
                  <p>
                    *Mix your necessities with our finance, tax, business, and
                    research services.
                  </p>
                  <p> (*) means T&C is required</p>
                </div>
              </div>
            </div>
          </div>
          {/* icon for desktop */}
          <div className="hidden md:block pl-20">
            <FontAwesomeIcon
              icon={faBalanceScale}
              className="text-yellow-400 h-36"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
