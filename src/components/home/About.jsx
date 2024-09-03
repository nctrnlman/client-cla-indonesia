import React from "react";
import { useTranslation } from "react-i18next";
import WhyChooseLegalAssociate from "../cards/about/WhyChooseLegalAssociate";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function About() {
  const { t } = useTranslation("about");

  const cardsData = [
    {
      icon: (
        <svg
          width="262"
          height="121"
          viewBox="0 0 262 121"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M212.277 19.981L192.816 5.09689C188.508 1.83182 182.689 -3.62285e-05 176.625 5.37372e-10H83.8969C77.8458 5.37372e-10 71.9992 1.84489 67.7063 5.09689L48.2448 19.981H0V99.9365H26.1667C33.3625 99.9365 39.1682 95.4963 39.2091 90.0241H42.9297L77.5188 113.914C90.1523 121.762 107.692 121.95 120.694 115.102C125.804 118.479 131.324 120.074 137.498 120.074C144.939 120.074 151.93 117.76 157.45 112.569C166.485 115.29 177.157 113.382 183.616 107.316L194.328 97.2161C196.618 95.0585 198.049 92.5882 198.785 90.0241H222.458C222.498 95.4963 228.345 99.9365 235.5 99.9365H261.667V19.981H212.277ZM19.625 89.9303C16.0271 89.9303 13.0833 87.679 13.0833 84.9273C13.0833 82.1756 16.0271 79.9242 19.625 79.9242C23.2229 79.9242 26.1667 82.1756 26.1667 84.9273C26.1667 87.7102 23.2229 89.9303 19.625 89.9303ZM179.078 87.7728L168.407 97.8415C167.262 98.9046 165.218 99.0922 163.787 98.2167L154.015 92.1505L141.75 103.564C139.297 105.846 135.617 105.065 134.39 104.314L119.345 94.4644L112.966 100.468C107.283 105.815 96.9393 106.628 90.3568 102.532L50.5753 75.0149H39.25V34.959H56.381L81.6073 15.6972C82.425 15.447 83.12 15.2281 83.9378 14.978H107.12L91.2971 26.0785C79.2768 34.49 78.5818 48.6862 89.4982 57.7543C95.5492 62.8199 114.52 70.6372 130.997 59.1301L134.349 56.7849L178.587 84.2393C179.978 85.1149 180.182 86.7096 179.078 87.7728ZM222.417 75.0149H194.124C193.184 74.1394 192.121 73.3264 190.976 72.6072L148.986 46.5286L154.097 42.9639C156.755 41.0878 156.959 37.9296 154.506 35.8971L150.049 32.2386C147.596 30.2061 143.467 30.081 140.809 31.9259L118.241 47.7481C114.357 50.4686 107.733 50.6874 104.094 47.7481C100.292 44.6525 100.619 39.8996 104.585 37.1479L131.406 18.355C134.431 16.2287 138.356 15.0718 142.445 15.0718L176.666 15.0092C177.524 15.0092 178.342 15.2594 178.915 15.7284L204.141 34.9903H222.417V75.0149ZM242.042 89.9303C238.444 89.9303 235.5 87.679 235.5 84.9273C235.5 82.1756 238.444 79.9242 242.042 79.9242C245.64 79.9242 248.583 82.1756 248.583 84.9273C248.583 87.7102 245.64 89.9303 242.042 89.9303Z"
            fill="white"
          />
        </svg>
      ),
      title: t("about.governmentAuthorities"),
      description: t("about.governmentAuthoritiesDesc"),
    },
    {
      icon: (
        <svg
          width="214"
          height="149"
          viewBox="0 0 214 149"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 140.338C0 142.421 1.02483 144.42 2.84905 145.893C4.67327 147.366 7.14744 148.194 9.72727 148.194H29.1818C31.7617 148.194 34.2358 147.366 36.06 145.893C37.8843 144.42 38.9091 142.421 38.9091 140.338V94.1906C38.9091 82.1795 25.496 75.04 15.5323 81.7476L6.62324 87.7453C2.48276 90.5327 0 95.197 0 100.188V140.338ZM58.3636 140.338C58.3636 142.421 59.3885 144.42 61.2127 145.893C63.0369 147.366 65.5111 148.194 68.0909 148.194H87.5455C90.1253 148.194 92.5995 147.366 94.4237 145.893C96.2479 144.42 97.2727 142.421 97.2727 140.338V95.0492C97.2727 90.517 95.2235 86.2278 91.6978 83.3801L82.7887 76.1843C72.9786 68.2609 58.3636 75.2433 58.3636 87.8535V140.338ZM116.727 140.338C116.727 142.421 117.752 144.42 119.576 145.893C121.401 147.366 123.875 148.194 126.455 148.194H145.909C148.489 148.194 150.963 147.366 152.787 145.893C154.612 144.42 155.636 142.421 155.636 140.338V111.415C155.636 99.5605 142.533 92.3906 132.549 98.7823L123.64 104.486C119.333 107.243 116.727 112.005 116.727 117.119V140.338ZM203.192 63.4687C197.715 62.337 191.748 62.0232 186.969 64.9295L182.296 67.7717C177.822 70.4929 175.091 75.3506 175.091 80.5874V140.338C175.091 142.421 176.116 144.42 177.94 145.893C179.764 147.366 182.238 148.194 184.818 148.194H204.273C206.853 148.194 209.327 147.366 211.151 145.893C212.975 144.42 214 142.421 214 140.338V68.6045C214 66.0244 211.678 64.0781 209.097 64.0735C207.093 64.0706 205.11 63.865 203.192 63.4687Z"
            fill="white"
          />
          <path
            d="M157.65 0.839475C156.684 0.836499 155.739 1.06584 154.935 1.49826C154.131 1.93069 153.505 2.54662 153.136 3.26757C152.768 3.98852 152.673 4.78183 152.864 5.54642C153.056 6.31102 153.525 7.01226 154.211 7.5608L154.658 7.92125C162.49 14.247 161.99 26.3395 153.663 31.9975L134.198 45.2228C128.732 48.9362 121.481 48.6361 116.341 44.4838L62.702 1.14981C61.8438 0.45703 60.696 0.0483601 59.4839 0.00402505C58.2718 -0.04031 57.0829 0.282892 56.1507 0.910185L6.05425 34.6223C2.26956 37.1692 0 41.4321 0 45.994C0 56.9704 12.2584 63.4942 21.3629 57.3631L47.9801 39.4386C53.4411 35.7611 60.6618 36.0745 65.7837 40.2113L118.449 82.7485C119.279 83.419 120.381 83.8245 121.552 83.8902C122.723 83.9559 123.884 83.6774 124.82 83.1059L182.479 44.0398C187.943 40.3381 195.184 40.6421 200.318 44.7888L205.698 49.134C206.378 49.6835 207.245 50.0575 208.189 50.2089C209.133 50.3603 210.111 50.2822 211 49.9844C211.889 49.6867 212.648 49.1827 213.182 48.5362C213.716 47.8898 214.001 47.1299 214 46.3528V15.8395C214 7.5552 207.284 0.839475 199 0.839475H157.65Z"
            fill="white"
          />
        </svg>
      ),
      title: t("about.businessApproach"),
      description: t("about.businessApproachDesc"),
    },
    {
      icon: (
        <svg
          width="262"
          height="121"
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: t("about.companyCompliance"),
      description: t("about.companyComplianceDesc"),
    },
    {
      icon: (
        <svg
          width="158"
          height="209"
          viewBox="0 0 158 209"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M49.375 0C46.756 0 44.2442 1.09646 42.3923 3.04816C39.3135 6.29286 35.874 10.4071 31.401 10.4071H19.75C14.512 10.4071 9.48848 12.6 5.78464 16.5034C2.0808 20.4068 0 25.701 0 31.2213V187.328C0 192.848 2.0808 198.142 5.78464 202.045C9.48848 205.949 14.512 208.142 19.75 208.142H138.25C143.488 208.142 148.512 205.949 152.215 202.045C155.919 198.142 158 192.848 158 187.328V31.2213C158 25.701 155.919 20.4068 152.215 16.5034C148.512 12.6 143.488 10.4071 138.25 10.4071H126.599C122.126 10.4071 118.686 6.29286 115.608 3.04816C113.756 1.09646 111.244 0 108.625 0H49.375ZM118.5 41.0963C118.5 35.6424 122.921 31.2213 128.375 31.2213C133.829 31.2213 138.25 35.6424 138.25 41.0963V172.328C138.25 180.612 131.534 187.328 123.25 187.328H34.75C26.4657 187.328 19.75 180.612 19.75 172.328V41.0962C19.75 35.6424 24.1712 31.2213 29.625 31.2213C35.0788 31.2213 39.5 35.6424 39.5 41.0963V41.6283C39.5 44.3885 40.5404 47.0355 42.3923 48.9873C44.2442 50.939 46.756 52.0354 49.375 52.0354H108.625C111.244 52.0354 113.756 50.939 115.608 48.9873C117.46 47.0355 118.5 44.3885 118.5 41.6283V41.0963ZM64.4535 31.2213C61.5797 31.2213 59.25 28.8915 59.25 26.0177C59.25 23.1439 61.5797 20.8142 64.4535 20.8142H93.5465C96.4203 20.8142 98.75 23.1439 98.75 26.0177C98.75 28.8915 96.4203 31.2213 93.5465 31.2213H64.4535Z"
            fill="white"
          />
        </svg>
      ),
      title: t("about.competitivePricing"),
      description: t("about.competitivePricingDesc"),
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const alternatingColors = ["primary", "secondary"];

  return (
    <div className="py-20">
      <div className="flex flex-col justify-center items-center">
        <button className="bg-secondary items-center p-4 px-6 rounded-full text-primary font-extrabold text-lg hover:bg-primary hover:text-secondary transition duration-300">
          ABOUT
        </button>
        <h1 className="mb-4 pt-6 text-3xl md:text-5xl tracking-tight  justify-center items-center text-center font-extrabold text-primary pb-4">
          {t("about.whyChooseLegalAssociate")}
        </h1>
      </div>
      <div className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
        <Slider {...sliderSettings}>
          {cardsData.map((card, index) => (
            <div key={index} className="px-4 py-2 h-full">
              <WhyChooseLegalAssociate
                icon={card.icon}
                title={card.title}
                description={card.description}
                bgColor={alternatingColors[index % 2]}
                iconPosition={index % 2 === 0 ? "top" : "bottom"}
                maxIconSize="18"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default About;
