import React from "react";
import MyOrders from "../../components/MyOrders/MyOrders";




const ProfileMyOrders = () => {
  return (
    <>
    
      <div className="right-side myOrders-right-side">
        <h1 className="title">My orders</h1>
        <span className="orders-number">4 orders placed</span>
        <div className="order-table">
          <MyOrders />
        </div>
      </div>
    </>
  );
};

export default ProfileMyOrders;
