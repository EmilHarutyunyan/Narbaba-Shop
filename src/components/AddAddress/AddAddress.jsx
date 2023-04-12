import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getAddresses,
  removeAddress,
  updateAddress,
} from "../../app/features/address/addressActions";
import { resetAddressMessage, selectAddress } from "../../app/features/address/addressSlice";
import { PROFILE_ADDRESSES } from "../../router/route-path";
// Img
import editImg from "../../assets/images/edit-vector.png";
import recycleImg from "../../assets/images/recycle.png";

import { Modal, Spinner } from "react-bootstrap";
import { notify } from "../../utils/helper/helper";
import { ToastContainer } from "react-toastify";


const AddAddress = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { addressesInfo, message, error, loading } = useSelector(selectAddress);
  const [showRemove, setShowRemove] = useState(false);
  const [addressId, setAddressId] = useState(null);

  
  const handleCloseRemove = () => {
    setAddressId(null);
    setShowRemove(false);
  };
  const handleShowRemove = (id) => {
    setAddressId(id);
    setShowRemove(true);
  };

  useEffect(() => {
    dispatch(getAddresses());
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRemoveAddress = useCallback(async (id) => {
    await dispatch(removeAddress({ id }));
    handleCloseRemove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleUpdateAddress = useCallback(async (e, changeAddress) => {
    const { Id, Country, State, City, Address, Address2, Zip, Phone, Email } =
      changeAddress;
    const address = {
      id: Id,
      country: Country,
      state: State,
      city: City,
      address: Address,
      address2: Address2,
      zip: Zip,
      phone: Phone,
      email: Email,
      isDefaultAddress: e.target.checked,
    };

    await dispatch(updateAddress({ address }));
    handleCloseRemove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (message) {
      notify(message);
    }
    return () => dispatch(resetAddressMessage());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);
  return (
    <>
      <h1 className="title">Addresses </h1>
      <button
        onClick={() => navigate(PROFILE_ADDRESSES + "/1")}
        className="add-address"
      >
        Add address
      </button>
      {!addressesInfo.length && loading ? (
        <Spinner
          animation="border"
          style={{
            width: "2rem",
            height: "2rem",
            fontSize: "10px",
            color: "#D70B52",
            margin: "30px 0 0 0",
            display: "block",
          }}
        />
      ) : null}
      {error && <span className="text-danger">{error}</span>}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="addresses-list">
        {addressesInfo?.length > 0 &&
          addressesInfo.map((address, idx) => {
            return (
              <div className="address-item">
                <div className="item-heading">
                  <div className="choose-card w-100">
                    <input
                      id="address1"
                      name="address"
                      type="radio"
                      checked={address?.IsDefaultAddress}
                      onChange={(e) => handleUpdateAddress(e, address)}
                    />
                    <label htmlFor="address1" className="payment-method-label">
                      Default address
                    </label>
                  </div>
                  <div className="buttons">
                    <img
                      src={editImg}
                      alt="edit"
                      onClick={() =>
                        navigate(`/profile/addresses/${address.Id}`)
                      }
                    />

                    <img
                      src={recycleImg}
                      alt="delete"
                      data-toggle="modal"
                      data-target="#removeAddress"
                      onClick={() => handleShowRemove(address.Id)}
                    />
                  </div>
                </div>
                <div className="address-info">
                  <span className="country">
                    <b>Country:</b> {address?.Country}
                  </span>
                  <span className="state">
                    <b>State:</b> {address?.State}
                  </span>
                  <span className="city">
                    <b>City:</b> {address?.City}
                  </span>
                  <span className="first-address">
                    <b>Address:</b> {address?.Address}
                  </span>
                  <span className="second-address">
                    <b>Address 2:</b> {address?.Address2}
                  </span>
                  <span className="zip">
                    <b>ZIP:</b> {address?.Zip}
                  </span>
                  <span className="phone-number">
                    <b>Phone number:</b> {address?.Phone}
                  </span>
                  <span className="email">
                    <b>Email:</b> {address?.Email}
                  </span>
                </div>
              </div>
            );
          })}
      </div>
      {/* Modal */}
      <Modal
        className="modal fade cancel-order"
        id="removeAddress"
        show={showRemove}
        onHide={handleCloseRemove}
        tabIndex={-1}
        role="dialog"
        aria-labelledby="contained-modal-title-vcenter"
        ariaHidden="true"
        // aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            ></button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="cancel-order-title">Remove address</div>
          <span className="mb-4">Are you sure you want to remove address?</span>
          <button
            className="cancel-order-btn m-auto"
            onClick={() => handleRemoveAddress(addressId)}
          >
            Remove
          </button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddAddress;
