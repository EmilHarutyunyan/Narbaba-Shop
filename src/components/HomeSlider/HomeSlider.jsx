import React from 'react'
import Slider from 'react-slick';
// Styles
import {Wrapper} from "./HomeSlider.styles"

// Img
import carouselImg from "../../assets/images/carousel-image.png";
import prevArrow from "../../assets/images/carousel-prev.png"
import nextArrow from "../../assets/images/carousel-next.png"


const HomeSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  function SampleNextArrow(props) {
    const {style, onClick } = props;
    return (
      <div
        className={"home-next"}
        style={{ ...style}}
        onClick={onClick}
      >
        <img src={nextArrow} alt={"prev"} />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={"home-prev"}
        style={{ ...style}}
        onClick={onClick}
      >
        <img src={prevArrow} alt={"prev"} />
        
      </div>
    );
  }
  return (
    <Wrapper className="first-section">
      <Slider {...settings} className="home-page-slider">
        <div className="slider-item">
          <img className="w-100" src={carouselImg} alt="First slide" />
        </div>
        <div className="slider-item">
          <img className="w-100" src={carouselImg} alt="Second slide" />
        </div>
        <div className="slider-item">
          <img className="w-100" src={carouselImg} alt="Third slide" />
        </div>
      </Slider>
    </Wrapper>
  );
}

export default HomeSlider