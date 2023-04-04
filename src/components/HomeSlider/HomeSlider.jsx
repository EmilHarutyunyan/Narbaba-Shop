import React from 'react'
import Slider from 'react-slick';
import { sliderSetting } from './sliderSetting';
// Styles
import {Wrapper} from "./HomeSlider.styles"

// Img
import carouselImg from "../../assets/images/carousel-image.png";



const HomeSlider = () => {

  return (
    <Wrapper className="first-section">
      <Slider {...sliderSetting} className="home-page-slider">
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