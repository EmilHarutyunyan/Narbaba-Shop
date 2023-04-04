import React from 'react'
// Styles
import {Wrapper} from "./ProductLists.styles"
// Img 
import todayImg from "../../assets/images/image-item.png";
import hotImg from "../../assets/images/image-item2.png";
import mostImg from "../../assets/images/image-item3.png";
import signImg from "../../assets/images/image-item4.png";

const ProductLists = () => {
  return (
    <Wrapper className="second-section">
      <div className="page-container">
        <div className="second-section-list">
          <div className="second-section-item">
            <div className="title">Today's Deal</div>
            <div className="image">
              <img src={todayImg} alt={"Today"} />
            </div>
            <button className="btn">Shop now</button>
          </div>
          <div className="second-section-item">
            <div className="title">Hot New Release</div>
            <div className="image">
              <img src={hotImg} alt={"Hot"} />
            </div>
            <button className="btn">Shop now</button>
          </div>
          <div className="second-section-item">
            <div className="title">Most Searched Items</div>
            <div className="image">
              <img src={mostImg} alt={"Most"} />
            </div>
            <button className="btn">Shop now</button>
          </div>
          <div className="second-section-item">
            <div className="title">Sign In Securely</div>
            <div className="image">
              <img src={signImg} alt={"Sign"} />
            </div>
            <button className="btn">Sign In Securely</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default ProductLists