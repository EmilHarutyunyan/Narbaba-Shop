import styled from "styled-components";

export const ProductName= styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;
export const ProductItem = styled.div`
  width: 100%;
  max-width: 244px;
  .product-img {
    width: 244px;
    height: 200px;
  }
  .product-price {
    margin: 5.5px 0;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    color: #d70b52;
    .main-price {
      font-size: 16px;
      line-height: 24px;
      text-decoration-line: line-through;
      color: #a1a1a1;
      margin-left: 16px;
    }
    .discount {
      float: right;
      width: 100%;
      max-width: 49px;
      height: 26px;
      background: #d70b52;
      padding: 4px;
      text-align: center;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      color: #ffffff;
    }
  }
  .product-name {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #232323;
    margin-bottom: 9px;
  }
  .product-rating {
    display: flex;
    gap: 12px;
    align-items: center;

    span {
      font-family: "Helvetica";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #9ca2a8;
    }
  }
`;