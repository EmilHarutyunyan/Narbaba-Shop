import React, { useState } from "react";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
// Styles
import { Wrapper } from "./ProfileMyOrders.styles";
const ProfileMyOrders = () => {
const [country, setCountry] = useState("");
const [region, setRegion] = useState("");
  return (
    <Wrapper>
    
      <div className="right-side myOrders-right-side">
        <h1 className="title">My orders</h1>
        <span className="orders-number">4 orders placed</span>
        <div className="order-table">
          <table>
            <thead>
              <tr className="orders-header">
                <th>
                  <span>Picture</span>
                </th>
                <th>
                  <span>Product name</span>
                </th>
                <th>
                  <span>Order ID</span>
                </th>
                <th>
                  <span>
                    Status{" "}
                    <img
                      src="assets/images/filter%20(1)%201.png"
                      alt="filter"
                    />
                  </span>
                </th>
                <th>
                  <span>
                    Order date{" "}
                    <img
                      src="assets/images/drop-down-arrow%201.png"
                      alt="dropdown arrow"
                    />
                  </span>
                </th>
                <th>
                  <span>Qty</span>
                </th>
                <th>
                  <span>Total</span>
                </th>
                <th>
                  <span />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="order-picture">
                  <img src="assets/images/image-item.png" alt />
                </td>
                <td className="product-name">
                  <span>Product name here</span>
                </td>
                <td className="order-ID">
                  <span>232145654</span>
                </td>
                <td className="status">
                  <span>Delivered</span>
                </td>
                <td className="order-date">
                  <span>20 Mar 2021</span>
                </td>
                <td className="qty">
                  <span>2</span>
                </td>
                <td className="total">
                  <span>$32.00</span>
                </td>
                <td className="buttons">
                  <div className="btn">
                    <button
                      className="rate-product"
                      data-toggle="modal"
                      data-target="#rateProduct"
                    >
                      Rate a product
                    </button>
                    <button className="buy-again">Buy again</button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="order-picture">
                  <img src="assets/images/image-item.png" alt />
                </td>
                <td className="product-name">
                  <span>Product name here</span>
                </td>
                <td className="order-ID">
                  <span>232145654</span>
                </td>
                <td className="status">
                  <span>Pending</span>
                </td>
                <td className="order-date">
                  <span>20 Mar 2021</span>
                </td>
                <td className="qty">
                  <span>2</span>
                </td>
                <td className="total">
                  <span>$32.00</span>
                </td>
                <td className="buttons">
                  <div className="btn">
                    <button
                      className="rate-product"
                      data-toggle="modal"
                      data-target="#cancelOrder"
                    >
                      Cancel order
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="order-picture">
                  <img src="assets/images/image-item.png" alt />
                </td>
                <td className="product-name">
                  <span>Product name here</span>
                </td>
                <td className="order-ID">
                  <span>232145654</span>
                </td>
                <td className="status">
                  <span>Shipped</span>
                </td>
                <td className="order-date">
                  <span>20 Mar 2021</span>
                </td>
                <td className="qty">
                  <span>2</span>
                </td>
                <td className="total">
                  <span>$32.00</span>
                </td>
                <td className="buttons">
                  <div className="btn">
                    <button
                      classname="rate-product"
                      data-toggle="modal"
                      data-target="#cancelOrder"
                    >
                      Cancel order
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="order-picture">
                  <img src="assets/images/image-item.png" alt />
                </td>
                <td className="product-name">
                  <span>Product name here</span>
                </td>
                <td className="order-ID">
                  <span>232145654</span>
                </td>
                <td className="status cancelled">
                  <span>Cancelled</span>
                </td>
                <td className="order-date">
                  <span>20 Mar 2021</span>
                </td>
                <td className="qty">
                  <span>2</span>
                </td>
                <td className="total">
                  <span>$32.00</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProfileMyOrders;
