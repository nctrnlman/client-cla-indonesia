import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBalanceScale,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import people from "../../assets/bg/legal_associate_hero.png";

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
      <div className="flex flex-col justify-center gap-4 items-center mx-auto h-full">
        <button className="bg-secondary p-4 px-6 rounded-full text-primary font-extrabold text-base md:text-lg transition duration-300">
          ABOUT
        </button>
        <p className="text-center text-[#003262] font-extrabold outline-2 text-2xl sm:text-2xl md:text-4xl lg:text-5xl px-4 sm:px-8">
          LEGAL ASSOCIATE
        </p>
      </div>
      {/* desc */}
      <div className="bg-gradient-to-r from-primary to-cyan-600 h-full p-4 mt-10 w-full">
        <div className="flex flex-col justify-center md:flex-row md:justify-around gap-6 max-w-7xl mx-auto py-10 items-center">
          {/* text */}
          <div className="px-4">
          <p className="text-justify text-xl md:text-2xl max-w-4xl py-4 text-white">
  Tingkatkan perjalanan hukum bisnis Anda dengan Asisten Hukum kami sebagai mitra terpercaya Anda. Kami menyediakan bantuan hukum yang disesuaikan dengan kebutuhan dan jenis perusahaan Anda. Solusi inovatif kami, tanggapan cepat, dan layanan fleksibel memastikan bahwa kebutuhan hukum Anda terpenuhi dengan efisien. Bergabunglah dengan kami untuk membuka potensi penuh bisnis Anda untuk pertumbuhan dan kesuksesan.
</p>
            <ul className="text-left space-y-2 py-2">
              {[
                "Nasihat hukum yang dipersonalisasi",
                "Tinjauan dan penyusunan kontrak",
                "Bantuan kepatuhan regulasi",
                "Konsultasi hukum sesuai permintaan",
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
                <div className="text-sm">
                  <p className="font-bold text-base md:text-xl">What’s more?</p>
                  <p className="pt-1">FREE Legal Training</p>
                  <p>*Anda juga dapat menyesuaikan layanan yang Anda butuhkan</p>
                  <p>
                  *Campurkan kebutuhan Anda dengan layanan keuangan, pajak, bisnis, dan
                   penelitian kami.
                  </p>
                  <p className="pt-4 text-sm"> (*) means T&C is required</p>
                </div>
              </div>
            </div>
          </div>
          {/* icon for desktop */}
          <div className="hidden md:block">
            <img
              src={people}
              alt="Legal Associate Hero"
              className="w-full h-auto max-w-xs md:max-w-md lg:max-w-lg object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
