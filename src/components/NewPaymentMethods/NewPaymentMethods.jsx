import React, { useEffect, useState } from "react";
import { useCreditCardValidator, images } from "react-creditcard-validator";
// Styles
import { Wrapper } from "./NewPaymentMethods.styles";
// Img
import backArrow from "../../assets/images/back-arrow.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPaymentMethod } from "../../app/features/paymentMethods/paymentMethodsActions";
import { ToastContainer } from "react-toastify";
import { resetPaymentMethodsMessage, selectPaymentMethods } from "../../app/features/paymentMethods/paymentMethodsSlice";
import { notify } from "../../utils/helper/helper";
const initialCard = {
  nameOfCard: "",
  cardNumber: "",
  expiryDate: "",
  cvc: "",
};

const NewPaymentMethods = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, message } = useSelector(selectPaymentMethods);
  const {
    getCardNumberProps,
    getCardImageProps,
    getCVCProps,
    getExpiryDateProps,
    meta: { erroredInputs },
  } = useCreditCardValidator();

  const [cardState, setCardState] = useState(initialCard);

  useEffect(() => {
    if (message) {
      notify(message);
      
    }
    return () => dispatch(resetPaymentMethodsMessage());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValidFlag = true;
    for (let key in cardState) {
      if (cardState[key] === "") {
        isValidFlag = false;
      }
    }
    if (isValidFlag) {
      const { expiryDate } = cardState;
      const splitExpiryData = expiryDate.split("/");
      const expirationDateYear = parseInt(splitExpiryData[1]);
      const expirationDateMonth = parseInt(splitExpiryData[0]);
      if (expirationDateMonth && expirationDateYear) {
        setCardState(initialCard);
        await dispatch(
          addPaymentMethod({
            ...cardState,
            expirationDateYear,
            expirationDateMonth,
          })
        );
      }
    }
  };
  return (
    <Wrapper className="right-side">
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
      <h1 className="title payment-methods-title">
        <button onClick={() => navigate(-1)}>
          <img src={backArrow} alt="back arrow" />
        </button>
        Add new payment methods
      </h1>
      {error && <span className="text-danger">{error}</span>}
      <form className="payment-methods-form" onSubmit={handleSubmit}>
        <div className="card-name">
          <input
            placeholder="Name Card"
            name="nameOfCard"
            required
            value={cardState.nameOfCard}
            onChange={(e) =>
              setCardState({
                ...cardState,
                [e.target.name]: e.target.value.toLocaleUpperCase(),
              })
            }
          />
        </div>
        <div className="card-number">
          <small className="text-danger">
            {erroredInputs.cardNumber && erroredInputs.cardNumber}
          </small>
          <svg {...getCardImageProps({ images })} />
          <input
            required
            {...getCardNumberProps({
              onChange: (e) =>
                setCardState({
                  ...cardState,
                  [e.target.name]: e.target.value,
                }),
                
            })}
          />
        </div>
        <div className="card-name">
          <small className="text-danger">
            {erroredInputs.expiryDate && erroredInputs.expiryDate}
          </small>
          <input
            required
            {...getExpiryDateProps({
              onChange: (e) =>
                setCardState({
                  ...cardState,
                  [e.target.name]: e.target.value,
                }),
            })}
          />
        </div>
        <div className="expiration-date"></div>
        <div className="cvv">
          <small className="text-danger">
            {erroredInputs.cvc && erroredInputs.cvc}
          </small>
          <input
            required
            name="cvv"
            {...getCVCProps({
              onChange: (e) =>
                setCardState({
                  ...cardState,
                  [e.target.name]: e.target.value,
                }),
            })}
          />
        </div>
        <div className="payment-methods-buttons">
          <button className="discard-btn" type="button">Discard</button>
          <button className="save-btn" type="submit">Save</button>
        </div>
      </form>
      
    </Wrapper>
  );
};

export default NewPaymentMethods;
