import React from "react";
// Styles
import { Wrapper } from "./WhyBuy.styles";
import WhyBuyItem from "./WhyBuyItem";
// Img 
import grayImg from "../../assets/images/Rectangle-grey.png"
const WhyBuy = () => {
  return (
    <Wrapper className="forth-section">
      <div className="page-container">
        <div className="forth-section-title">Why buy from us</div>
        <div className="forth-section-content">
         {[...Array(4)].map((item,idx) => {
           return (
             <WhyBuyItem
               key={idx}
               img={grayImg}
               title={"Lorem ipsum"}
               desc={
                 "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
               }
             />
           ); 
         })}
        </div>
      </div>
    </Wrapper>
  );
};

export default WhyBuy;
