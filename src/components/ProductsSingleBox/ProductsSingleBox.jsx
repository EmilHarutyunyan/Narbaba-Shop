import React from 'react'
import productImg from "../../assets/images/image-item.png";
// Styles
import { Link } from 'react-router-dom'
import starIcon from "../../assets/images/rate-stars.png"
const ProductsSingleBox = () => {
  return (
    <Link to={""}>
      <div className="products-item">
        <div className="product-img">
          <img src={productImg} alt={"Product"} />
        </div>
        <div className="product-price">
          $32.00
          <span className="main-price">$60.00</span>
          <span className="discount">35% off</span>
        </div>
        <div className="product-name">Product name here</div>
        <div className="product-rating">
          <img src={starIcon} alt="rate stars" />
          <span>64</span>
        </div>
      </div>
    </Link>
  );
}

export default ProductsSingleBox