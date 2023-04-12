import React from 'react'
// Img
import productImg from "../../assets/images/image-item.png";

const MyOrdersItem = ({ handleShowModal, handleRate, handleCancel }) => {
  return (
    <>
      <tr>
        <td className="order-picture">
          <img src={productImg} alt="Product Title" />
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
              onClick={() => handleShowModal(handleRate)}
            >
              Rate a product
            </button>
            <button className="buy-again">Buy again</button>
          </div>
        </td>
      </tr>
      <tr>
        <td className="order-picture">
          <img src={productImg} alt={"Product Title"} />
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
              onClick={() => handleShowModal(handleCancel)}
            >
              Cancel order
            </button>
          </div>
        </td>
      </tr>
      <tr>
        <td className="order-picture">
          <img src={productImg} alt={"Product Title"} />
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
              className="rate-product"
              data-toggle="modal"
              data-target="#cancelOrder"
              onClick={() => handleShowModal(handleCancel)}
            >
              Cancel order
            </button>
          </div>
        </td>
      </tr>
      <tr>
        <td className="order-picture">
          <img src={productImg} alt={"Product Title"} />
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
    </>
  );
};

export default MyOrdersItem