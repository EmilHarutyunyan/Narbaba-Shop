import styled from "styled-components";
export const Wrapper = styled.section`
  overflow-y: hidden;
  .slick-track {
    margin-right: 0;
  }
  ::ng-deep .slick-track {
    margin-right: 0 !important;
    
  }
  .slick-slider {
    overflow: hidden;
  }
  .slick-slide > div {
    margin: 0 10px;
  }

  .slick-list {
    margin: 0 -10px;
  }
  .slider-image img {
    width: 100%;
    object-fit: cover;
  }
  .slider-item {
    cursor: pointer;
  }
`;