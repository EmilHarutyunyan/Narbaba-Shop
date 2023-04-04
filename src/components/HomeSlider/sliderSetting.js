import prevArrow from "../../assets/images/carousel-prev.png";
import nextArrow from "../../assets/images/carousel-next.png";
import { SampleNextArrow, SamplePrevArrow } from "../SampleArrow/SampleArrow";

export const sliderSetting = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow nameClass={"home-next"} img={nextArrow} />,
  prevArrow: <SamplePrevArrow nameClass={"home-prev"} img={prevArrow} />,
};
