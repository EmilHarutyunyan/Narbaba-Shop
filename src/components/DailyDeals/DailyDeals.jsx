import React from "react";
import Slider from "react-slick";
// Styles
import { Wrapper } from "./DailyDeals.styles";
// Img
import prevArrow from "../../assets/images/carousel-prev.png";
import nextArrow from "../../assets/images/carousel-next.png";
import imgIcon from "../../assets/images/image-item.png";
const DailyDeals = () => {
  const settings = {
    className: "center",
    centerMode: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,

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
        breakpoint: 600,
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
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
      <div className={"home-next"} style={{ ...style }} onClick={onClick}>
        <img src={nextArrow} alt={"prev"} />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className={"home-prev"} style={{ ...style }} onClick={onClick}>
        <img src={prevArrow} alt={"prev"} />
      </div>
    );
  }
  return (
    <Wrapper className="product-slider-section">
      <div className="page-container">
        <div className="third-section-title">Daily Deals</div>
        <Slider
          {...settings}
          className="products-slider owl-carousel owl-theme"
        >
          {[...Array(8)].map((item) => {
            return;
          })}
          <a href>
            <div className="products-item">
              <div className="product-img">
                <img src="assets/images/image-item.png" alt />
              </div>
              <div className="product-price">
                $32.00
                <span className="main-price">$60.00</span>
              </div>
              <div className="product-name">Product name here</div>
              <div className="product-rating">
                <img src={imgIcon} alt="rate stars" />
                <span>64</span>
              </div>
            </div>
          </a>
          {/* <a href>
              <div className="products-item">
                <div className="product-img">
                  <img src="assets/images/image-item2.png" alt />
                </div>
                <div className="product-price">
                  $32.00
                  <span className="main-price">$60.00</span>
                </div>
                <div className="product-name">Product name here</div>
                <div className="product-rating">
                  <img src="assets/images/rate-stars.png" alt="rate stars" />
                  <span>64</span>
                </div>
              </div>
            </a>
            <a href>
              <div className="products-item">
                <div className="product-img">
                  <img src="assets/images/image-item3.png" alt />
                </div>
                <div className="product-price">
                  $32.00
                  <span className="main-price">$60.00</span>
                </div>
                <div className="product-name">Product name here</div>
                <div className="product-rating">
                  <img src="assets/images/rate-stars.png" alt="rate stars" />
                  <span>64</span>
                </div>
              </div>
            </a>
            <a href>
              <div className="products-item">
                <div className="product-img">
                  <img src="assets/images/image-item.png" alt />
                </div>
                <div className="product-price">
                  $32.00
                  <span className="main-price">$60.00</span>
                </div>
                <div className="product-name">Product name here</div>
                <div className="product-rating">
                  <img src="assets/images/rate-stars.png" alt="rate stars" />
                  <span>64</span>
                </div>
              </div>
            </a>
            <a href>
              <div className="products-item">
                <div className="product-img">
                  <img src="assets/images/image-item2.png" alt />
                </div>
                <div className="product-price">
                  $32.00
                  <span className="main-price">$60.00</span>
                </div>
                <div className="product-name">Product name here</div>
                <div className="product-rating">
                  <img src="assets/images/rate-stars.png" alt="rate stars" />
                  <span>64</span>
                </div>
              </div>
            </a>
            <a href>
              <div className="products-item">
                <div className="product-img">
                  <img src="assets/images/image-item3.png" alt />
                </div>
                <div className="product-price">
                  $32.00
                  <span className="main-price">$60.00</span>
                </div>
                <div className="product-name">Product name here</div>
                <div className="product-rating">
                  <img src="assets/images/rate-stars.png" alt="rate stars" />
                  <span>64</span>
                </div>
              </div>
            </a>
            <a href>
              <div className="products-item">
                <div className="product-img">
                  <img src="assets/images/image-item.png" alt />
                </div>
                <div className="product-price">
                  $32.00
                  <span className="main-price">$60.00</span>
                </div>
                <div className="product-name">Product name here</div>
                <div className="product-rating">
                  <img src="assets/images/rate-stars.png" alt="rate stars" />
                  <span>64</span>
                </div>
              </div>
            </a>
            <a href>
              <div className="products-item">
                <div className="product-img">
                  <img src="assets/images/image-item2.png" alt />
                </div>
                <div className="product-price">
                  $32.00
                  <span className="main-price">$60.00</span>
                </div>
                <div className="product-name">Product name here</div>
                <div className="product-rating">
                  <img src="assets/images/rate-stars.png" alt="rate stars" />
                  <span>64</span>
                </div>
              </div>
            </a>
            <a href>
              <div className="products-item">
                <div className="product-img">
                  <img src="assets/images/image-item3.png" alt />
                </div>
                <div className="product-price">
                  $32.00
                  <span className="main-price">$60.00</span>
                </div>
                <div className="product-name">Product name here</div>
                <div className="product-rating">
                  <img src="assets/images/rate-stars.png" alt="rate stars" />
                  <span>64</span>
                </div>
              </div>
            </a>
            <a href>
              <div className="products-item">
                <div className="product-img">
                  <img src="assets/images/image-item.png" alt />
                </div>
                <div className="product-price">
                  $32.00
                  <span className="main-price">$60.00</span>
                </div>
                <div className="product-name">Product name here</div>
                <div className="product-rating">
                  <img src="assets/images/rate-stars.png" alt="rate stars" />
                  <span>64</span>
                </div>
              </div>
            </a>
            <a href>
              <div className="products-item">
                <div className="product-img">
                  <img src="assets/images/image-item2.png" alt />
                </div>
                <div className="product-price">
                  $32.00
                  <span className="main-price">$60.00</span>
                </div>
                <div className="product-name">Product name here</div>
                <div className="product-rating">
                  <img src="assets/images/rate-stars.png" alt="rate stars" />
                  <span>64</span>
                </div>
              </div>
            </a>
            <a href>
              <div className="products-item">
                <div className="product-img">
                  <img src="assets/images/image-item3.png" alt />
                </div>
                <div className="product-price">
                  $32.00
                  <span className="main-price">$60.00</span>
                </div>
                <div className="product-name">Product name here</div>
                <div className="product-rating">
                  <img src="assets/images/rate-stars.png" alt="rate stars" />
                  <span>64</span>
                </div>
              </div>
            </a> */}
        </Slider>
      </div>
    </Wrapper>
  );
};

export default DailyDeals;
