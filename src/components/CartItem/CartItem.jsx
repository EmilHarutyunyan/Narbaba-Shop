import React from 'react'
// Img
import subImg from "../../assets/images/minus.png";
import plusImg from "../../assets/images/plus.png";
import productImg from "../../assets/images/image-item.png";
const CartItem = () => {
  return (
    <div className="left-side">
      <div className="product-img">
        <img src={productImg} alt="product" />
      </div>
      <div className="product-description">
        <div className="product-name">Product name here</div>
        <div className="product-price">
          $1,799.00 <span className="main-price">$2,700.00</span>
        </div>
      </div>
      <div className="product-quantity">
        <button type="button" className="sub">
          <img src={subImg} alt="sub vector" />
        </button>
        <input type="number" defaultValue={1} min={0} max={100} />
        <button type="button" className="add">
          <img src={plusImg} alt="add vector" />
        </button>
      </div>
      <div className="final-price">
        <div className="price">$1,799.00</div>
        <a href className="remove-product-grey">
          Remove product
        </a>
      </div>
    </div>
  );
}

export default CartItem