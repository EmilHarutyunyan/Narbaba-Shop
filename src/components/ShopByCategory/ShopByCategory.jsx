import React from 'react'
// Styles
import {Wrapper} from "./ShopByCategory.styles"

// Img
import bestSellersImg from "../../assets/images/slider1.png";
import { Swiper, SwiperSlide } from "swiper/react";

const ShopByCategory = () => {
  return (
    <Wrapper className="fifth-section">
      <div className="fifth-section-content">
        <div className="title">Shop by category</div>
        <Swiper
          slidesPerView={1.5}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          className="fifth-section-slider"
        >
          {[...Array(9)].map((item,idx) => {
            return (
              <SwiperSlide className="slider-item" key={idx}>
                <div className="slider-image">
                  <img src={bestSellersImg} alt="slider" />
                </div>
                <div className="slider-category">Best Sellers</div>
              </SwiperSlide>
            );
          })}

        </Swiper>
        
      </div>
    </Wrapper>
  );
}

export default ShopByCategory