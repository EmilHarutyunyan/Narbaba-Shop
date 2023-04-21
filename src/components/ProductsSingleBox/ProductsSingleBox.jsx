import React, { useState } from 'react'
import productImg from "../../assets/images/image-item.png";
// Styles
import { Link } from 'react-router-dom'
import starIcon from "../../assets/images/rate-stars.png"
import favoriteIcon from "../../assets/images/favorite.png";
import favoriteFillIcon from "../../assets/images/favorite-fill.png";
import { ProductItem, ProductName } from './ProductsSingleBox.styles';
const ProductsSingleBox = () => {
  const [activeFavorite,setActiveFavorite] = useState(false)
  return (
    <Link to={""}>
      <ProductItem className="products-item">
        <div className="product-img">
          <img src={productImg} alt={"Product"} />
        </div>
        <div className="product-price">
          $32.00
          <span className="main-price">$60.00</span>
          <span className="discount">35% off</span>
        </div>
        <ProductName className="product-name">
          <span>Product name here</span>
          <span class="favorite">
            <img
              onClick={() => setActiveFavorite(prev => !prev)}
              src={!activeFavorite ? favoriteIcon : favoriteFillIcon}
              alt="liked"
            />
          </span>
        </ProductName>
        <div className="product-rating">
          <img src={starIcon} alt="rate stars" />
          <span>64</span>
        </div>
      </ProductItem>
    </Link>
  );
}

export default ProductsSingleBox