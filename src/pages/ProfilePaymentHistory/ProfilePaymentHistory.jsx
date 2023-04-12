import React from 'react'
// Img
import uploadIcon from "../../assets/images/download-invoice.png";
import statusImg from "../../assets/images/filter (1) 1.png";
// Styles
import {Wrapper} from "./ProfilePaymentHistory.styles"

const ProfilePaymentHistory = () => {

  return (
    <Wrapper className="right-side myOrders-right-side payment-history">
      <h1 className="title">Payment history</h1>
      <div className="order-table">
        <table>
          <thead>
            <tr className="orders-header">
              <th>
                <span>Date</span>
              </th>
              <th>
                <span>Order ID</span>
              </th>
              <th>
                <span>
                  Status <img src={statusImg} alt="filter" />
                </span>
              </th>
              <th>
                <span>Amount</span>
              </th>
              <th>
                <span>Invoice</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="order-date">
                <span>20 Mar 2021</span>
              </td>
              <td className="order-ID">
                <span>232145654</span>
              </td>
              <td className="status">
                <span>Paid</span>
              </td>
              <td className="amount">
                <span>$32.00</span>
              </td>
              <td className="total">
                <a href>
                  <img src={uploadIcon} alt="invoice" />
                </a>
              </td>
            </tr>
            <tr>
              <td className="order-date">
                <span>20 Mar 2021</span>
              </td>
              <td className="order-ID">
                <span>232145654</span>
              </td>
              <td className="status">
                <span>Paid</span>
              </td>
              <td className="amount">
                <span>$32.00</span>
              </td>
              <td className="total">
                <a href>
                  <img src={uploadIcon} alt="invoice" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
}

export default ProfilePaymentHistory