import React from 'react'

const WhyBuyItem = (props) => {
  const {img,title,desc} = props
  return (
    <div className="content-item">
      <div className="item-img">
        <img src={img} alt={title} />
      </div>
      <div className="item-title">{title}</div>
      <p>
        {desc}
        
      </p>
    </div>
  );
}

export default WhyBuyItem