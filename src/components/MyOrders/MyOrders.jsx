import React, { useState } from 'react'
// Styles
import {Wrapper} from "./MyOrders.styles"
// Img
import statusImg from "../../assets/images/filter (1) 1.png";
import dropDownImg from "../../assets/images/drop-down-arrow 1.png";

import rateStars from "../../assets/images/rate-stars.png"
import cameraIcon from "../../assets/images/camera.png";
import xIcon from "../../assets/images/x-image.png"
// Components
import MyOrdersItem from '../MyOrdersItem/MyOrdersItem';
import { Modal } from 'react-bootstrap';
import useImageUploader from '../../hooks/useImageUploader';


const MyOrders = () => {
  const [showRate, setShowRate] = useState(false)
  const [showCancel, setShowCancel] = useState(false)

  const [images, handleImageUpload,deleteItem] = useImageUploader();
  const handleCloseModal = (cb) => {
    // setAddressId(null);
    // setShowRemove(false);
    cb((prev) => !prev)
  };
  const handleShowModal = (cb) => {
    // setAddressId(id);
    // setShowRemove(true);
    cb((prev) => !prev);
  };
  return (
    <Wrapper className="order-table">
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
                Status <img src={statusImg} alt="filter" />
              </span>
            </th>
            <th>
              <span>
                Order date <img src={dropDownImg} alt="dropdown arrow" />
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
          <MyOrdersItem
            handleShowModal={handleShowModal}
            handleRate={setShowRate}
            handleCancel={setShowCancel}
          />
        </tbody>
      </table>
      {/* cancel order modal */}
      <Modal
        className="modal fade cancel-order"
        id="cancelOrder"
        tabIndex={-1}
        show={showCancel}
        onHide={() => handleCloseModal(setShowCancel)}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
        centered
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content" style={{ border: "0" }}>
            <Modal.Header closeButton>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              ></button>
            </Modal.Header>
            <div className="modal-body">
              <div className="cancel-order-title">Cancel order</div>
              <span>
                Are you sure you want to cancel order for{" "}
                <span className="product-name">“Product name here”</span>?
              </span>
              <button
                className="cancel-order-btn"
                onClick={() => handleCloseModal(setShowCancel)}
              >
                Cancel order
              </button>
            </div>
          </div>
        </div>
      </Modal>

      {/* rate product modal */}
      <Modal
        className="modal fade cancel-order"
        id="rateProduct"
        tabindex="-1"
        role="dialog"
        show={showRate}
        onHide={() => handleCloseModal(setShowRate)}
        aria-labelledby="contained-modal-title-vcenter"
        aria-hidden="true"
        centered
      >
        {/* <div className="modal-dialog modal-dialog-centered" role="document"> */}
        <div className="modal-content">
          <Modal.Header closeButton>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            ></button>
          </Modal.Header>
          <div className="modal-body">
            <div className="cancel-order-title">Rate a product</div>
            <span>
              Leave a review for{" "}
              <span className="product-name">“Product name here”</span>.
            </span>
            <div className="rate-stars">
              <img src={rateStars} alt="rate stars" />
            </div>
            <textarea
              name="review"
              id="review"
              className="review"
              placeholder="Your review"
            ></textarea>
            <div className="attach-image">
              <input
                type="file"
                name="file"
                id="file"
                multiple
                onChange={handleImageUpload}
              />
              <label className="attach-image-label" for="file">
                <span>
                  <img src={cameraIcon} alt="camera" />
                  Attach an image to review
                </span>
              </label>
            </div>

            <div className="attached-image added">
              {images.map((image, idx) => {
                return (
                  <React.Fragment key={idx}>
                    <img
                      id="attached-image"
                      src={URL.createObjectURL(image)}
                      alt=""
                    />
                    <img
                      id="xImage"
                      src={xIcon}
                      alt="xImage"
                      onClick={() => deleteItem(idx)}
                    />
                  </React.Fragment>
                );
              })}
            </div>

            <button className="submit-btn">Submit a review</button>
          </div>
        </div>
        {/* </div> */}
      </Modal>
    </Wrapper>
  );
}

export default MyOrders