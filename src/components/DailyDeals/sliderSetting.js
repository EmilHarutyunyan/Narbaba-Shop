import prevArrow from "../../assets/images/carousel-prev.png";
import nextArrow from "../../assets/images/carousel-next.png";
import { SampleNextArrow, SamplePrevArrow } from "../SampleArrow/SampleArrow";

export const sliderSetting = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,

  responsive: [
    {
      breakpoint: 1620,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
      },
    },
    {
      breakpoint: 1420,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 1360,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },

    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },

    {
      breakpoint: 0,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  nextArrow: <SampleNextArrow nameClass={"daily-next"} img={nextArrow} />,
  prevArrow: <SamplePrevArrow nameClass={"daily-prev"} img={prevArrow} />,
};
