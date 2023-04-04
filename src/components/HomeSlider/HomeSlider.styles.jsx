import styled from "styled-components";
export const Wrapper = styled.section`
  .home-prev {
    top: 50%;
    position: absolute;
    left: 4%;
    width: 40px;
    height: 40px;
    z-index: 1;
    cursor: pointer;
  }
  .home-next {
    top: 50%;
    position: absolute;
    right: 4%;
    width: 40px;
    height: 40px;
    z-index: 1;
    cursor: pointer;
  }
  .slider-item {
    outline: none;
    img {
      outline: none;
    }
  }
  @media screen and (max-width: 768px) {
    .home-next,
    .home-prev {
      top: 40%;
      img {
        width: 25px;
        height: 25px;
      }
    }
  }
`;