import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay } from "swiper";
// Styles
import { Wrapper } from "./BrandSliders.styles";

const BrandSliders = () => {
  return (
    <Wrapper>
      <section className="sixth-section">
        <div className="page-container">
          <div className="sixth-section-content">
            <div className="title">Brand we work with</div>
            <Swiper
              slidesPerView={5}
              spaceBetween={32}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 2200,
                disableOnInteraction: false,
              }}
              effect={'easeInOut'}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay]}
              className="brands-list"
            >
              {[...Array(12)].map((item,idx) => {
                return (
                  <SwiperSlide key={idx}>
                    <div className="brand-item" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>

      <Swiper></Swiper>
    </Wrapper>
  );
};

export default BrandSliders;
