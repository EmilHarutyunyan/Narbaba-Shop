import React from "react";
import Slider from "react-slick";
// Styles
import { Wrapper } from "./DailyDeals.styles";
// Img
import prevArrow from "../../assets/images/carousel-prev.png";
import nextArrow from "../../assets/images/carousel-next.png";
import imgIcon from "../../assets/images/image-item.png";
import reteStars from "../../assets/images/rate-stars.png"
import { Link } from "react-router-dom";
import { sliderSetting } from "./sliderSetting";
const DailyDeals = () => {
  
  
  return (
    <Wrapper className="product-slider-section">
      <div className="page-container">
        <div className="third-section-title">Daily Deals</div>
        <Slider
          {...sliderSetting}
          className="products-slider"
        >
          {[...Array(8)].map((item,idx) => {
            return (
              <Link to={"/"} key={idx}>
                <div className="products-item">
                  <div className="product-img">
                    <img src={imgIcon} alt={"img"} />
                  </div>
                  <div className="product-price">
                    $32.00
                    <span className="main-price">$60.00</span>
                  </div>
                  <div className="product-name">Product name here</div>
                  <div className="product-rating">
                    <img src={reteStars} alt="rate stars" />
                    <span>64</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </Slider>
      </div>
    </Wrapper>
  );
};

export default DailyDeals;
