function Hero() {
  return (
    <div className="py-20">
      <div className="flex flex-col justify-center gap-4 items-center mx-auto h-full max-w-7xl">
        <button
          className="bg-secondary p-4 px-6 rounded-full text-primary font-extrabold text-lg hover:bg-primary hover:text-secondary transition duration-300
          "
        >
          ABOUT
        </button>
        <p className="text-center text-[#003262] font-extrabold outline-2 text-xl sm:text-2xl md:text-4xl lg:text-5xl px-4 sm:px-8 ">
          LEGAL ASSOCIATE
        </p>
        {/* desc */}
        <div className="bg-gradient-to-b from-primary to-cyan-600 h-96 border rounded-xl p-4 mt-14">
          {/* icon */}
          <div className="text-center items-center flex justify-center pb-4">
            <svg
              width="113"
              height="113"
              viewBox="0 0 113 113"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.7125 84.3301H100.727V93.7001H11.7125V84.3301Z"
                fill="white"
              />
              <path
                d="M103.07 98.3848H9.37C8.12746 98.3848 6.93581 98.8784 6.0572 99.757C5.17859 100.636 4.685 101.827 4.685 103.07V107.755H107.755V103.07C107.755 101.827 107.261 100.636 106.383 99.757C105.504 98.8784 104.313 98.3848 103.07 98.3848Z"
                fill="white"
              />
              <path
                d="M23.425 42.165H32.795V79.645H23.425V42.165Z"
                fill="white"
              />
              <path
                d="M51.535 42.165H60.905V79.645H51.535V42.165Z"
                fill="white"
              />
              <path
                d="M79.645 42.165H89.015V79.645H79.645V42.165Z"
                fill="white"
              />
              <path
                d="M105.178 26.7041L56.22 4.68457L7.26175 26.7041C6.49848 27.1171 5.85806 27.7248 5.40551 28.4653C4.95296 29.2058 4.70438 30.0529 4.685 30.9206V32.7946C4.685 34.0371 5.17859 35.2288 6.0572 36.1074C6.93581 36.986 8.12746 37.4796 9.37 37.4796H103.07C104.313 37.4796 105.504 36.986 106.383 36.1074C107.261 35.2288 107.755 34.0371 107.755 32.7946V30.9206C107.736 30.0529 107.487 29.2058 107.034 28.4653C106.582 27.7248 105.942 27.1171 105.178 26.7041Z"
                fill="white"
              />
            </svg>
          </div>

          {/* text */}
          <div>
            <p className=" text-justify text-2xl p-4 text-white">
              Elevate your business&apos;s legal journey with our Legal
              Associate as your trusted partner. We provide legal assistance
              tailored to your company&apos;s needs and type. Our innovative
              solutions, quick responses, and flexible services ensure that your
              legal needs are met efficiently. Partner with us to unlock your
              business&apos;s full potential for growth and success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
