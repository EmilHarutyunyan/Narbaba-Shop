import styled from "styled-components";
export const Wrapper = styled.section`
  .slick-slide > div {
    margin: 0 10px;
  }

  .slick-list {
    margin: 0 -10px;
  }

  .slick-slide *:focus {
    outline: none;
  }
  .product-img img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .daily-prev {
    top: -20%;
    position: absolute;
    right: 6%;
    width: 40px;
    height: 40px;
    z-index: 1;
    cursor: pointer;
    margin-right: 10px;
  }
  .daily-next {
    top: -20%;
    position: absolute;
    right: 1%;
    width: 40px;
    height: 40px;
    z-index: 1;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    .daily-prev {
      right: 15%;
    }
    .dailyPrev,
    .dailyNext {
      img {
        width: 25px;
        height: 25px;
      }
    }
  }
  @media screen and (max-width: 576px) {
    .daily-prev {
      top: 100%;
      left: 30%;
      margin-top: 25px;
    }
    .daily-next {
      top: 100%;
      left: 60%;
      margin-top: 25px;
    }
  }
`;
