import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PROFILE_PAYMENT_METHODS } from "../../router/route-path";
import { useDispatch, useSelector } from "react-redux";
import {
  resetPaymentMethodsMessage,
  selectPaymentMethods,
} from "../../app/features/paymentMethods/paymentMethodsSlice";
import { ToastContainer } from "react-toastify";
import { cardType, notify } from "../../utils/helper/helper";
import { getPaymentMethods, removePaymentMethods } from "../../app/features/paymentMethods/paymentMethodsActions";
import { Modal, Spinner } from "react-bootstrap";
// Img
import recycleImg from "../../assets/images/recycle.png";

const AddPaymentMethods = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { paymentMethodsInfo, error, message, loading } =
    useSelector(selectPaymentMethods);
  const [showRemove, setShowRemove] = useState(false);
  const [paymentId, setPaymentId] = useState(null);

  const handleCloseRemove = () => {
    setPaymentId(null);
    setShowRemove(false);
  };
  const handleShowRemove = (id) => {
    setPaymentId(id);
    setShowRemove(true);
  };

  const handleRemovePayment = useCallback(async (id) => {
    await dispatch(removePaymentMethods({ id }));
    handleCloseRemove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

   useEffect(() => {
     dispatch(getPaymentMethods());
     
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
  useEffect(() => {
    if (message) {
      notify(message);
    }
    return () => dispatch(resetPaymentMethodsMessage());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

 
  return (
    <div className="right-side">
      <h1 className="title">Payment methods</h1>
      <button
        className="add-payment-method"
        onClick={() => navigate(PROFILE_PAYMENT_METHODS + "/1")}
      >
        Add new payment method
      </button>
      {loading   ? (
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
      {paymentMethodsInfo?.length > 0 &&
        paymentMethodsInfo.map((payment,idx) => {
          const paymentCardNumber = payment?.CardNumber.split(" ");
          const cardTypeInfo = cardType(payment?.CardNumber);
          
          return (
            <div className="card added" key={idx}>
              <div className="card-info">
                <div className="card-type">
                  {cardTypeInfo?.img ? (
                    <img src={cardTypeInfo?.img} alt={cardTypeInfo.cardType} />
                  ) : (
                    <span>{cardTypeInfo.cardType.toLocaleUpperCase()}</span>
                  )}
                </div>
                <span className="card-num">
                  {cardTypeInfo.cardType.toLocaleUpperCase()} (
                  {paymentCardNumber[0]} **** **** {paymentCardNumber.at(-1)})
                </span>
                <div
                  className="delete-card"
                  data-toggle="modal"
                  data-target="#removePaymentMethod"
                >
                  <img
                    src={recycleImg}
                    onClick={() => handleShowRemove(payment.Id)}
                    alt="recycle bin"
                  />
                </div>
              </div>
              <div className="choose-card">
                <input
                  id="payment1"
                  name="payment"
                  type="radio"
                  checked={payment?.IsDefaultAddress}
                  // onChange={(e) => handleUpdateAddress(e, address)}
                />
                <label htmlFor="payment1" className="payment-method-label">
                  Default payment method
                </label>
              </div>
            </div>
          );
        })}
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
          <div className="cancel-order-title">Remove payment method</div>
          <span className="mb-4">Are you sure you want to remove address?</span>
          <button
            className="cancel-order-btn m-auto"
            onClick={() => handleRemovePayment(paymentId)}
          >
            Remove
          </button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddPaymentMethods;
