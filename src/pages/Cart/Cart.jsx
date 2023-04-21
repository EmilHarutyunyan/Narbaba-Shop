import React, { useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import CartItem from "../../components/CartItem/CartItem";
import { CartItems } from "./Cart.styles";
import { useSelector } from "react-redux";
import { selectCart } from "../../app/features/cart/cartSlice";
import { Modal } from "react-bootstrap";

import eyeShow from "../../assets/images/mdi_eye-outline.png";
import eyeHide from "../../assets/images/mdi_eye-off-outline.png";

const Cart = () => {
  const { count } = useSelector(selectCart);
const [showRemove, setShowRemove] = useState(false);
   const handleCloseRemove = () => {
    
     setShowRemove(false);
   };
   const handleShowRemove = (id) => {
     
     setShowRemove(true);
   };

  return (
    <section className="cart-section">
      <div className="page-container">
        <Breadcrumbs />
        {count ? (
          <div className="cart-list">
            <div className="title">Cart</div>
            <a href className="remove-products">
              Remove all products
            </a>
            <div className="cart-content">
              <CartItems>
                {[...Array(count)].map((item, idx) => {
                  return <CartItem key={idx} />;
                })}
              </CartItems>
              <div className="right-side">
                <div className="items">
                  <span>Items ({1})</span>
                  <span>$1,799.00</span>
                </div>
                <div className="shipping">
                  <span>Shipping</span>
                  <span>Will be counted in checkout page</span>
                </div>
                <div className="total">
                  <span>Total</span>
                  <span>$1,799.00</span>
                </div>
                <button
                  className="checkout-btn"
                  data-toggle="modal"
                  data-target="#checkoutModal"
                  onClick={() => handleShowRemove()}
                >
                  Go to checkout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div class="cart-list">
            <div class="title">Cart</div>
            <div class="favorite-empty">Your cart is empty. </div>
            <button class="shop-btn">Shop in Deal’s Store</button>
          </div>
        )}
      </div>

      <Modal
        className="modal checkout-modal fade"
        id="checkoutModal"
        tabIndex={-1}
        show={showRemove}
        onHide={handleCloseRemove}
        role="dialog"
        ariaLabelledby="contained-modal-title-vcenter"
        ariaHidden="true"
      >
        
        <div className="modal-content">
          <Modal.Header closeButton>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            ></button>
          </Modal.Header>
          <Modal.Body className="modal-body">
            <div className="title">Checkout as a Guest</div>
           <div className="privacy-checkbox">
  <input id="checkbox" name type="checkbox"  />
  <label htmlFor="checkbox" className="privacy-label">By clicking “Continue” I agree with companies <a href>Privacy</a> and <a href>Terms of Use.</a></label>
</div>

            <button className="continue-btn">Continue</button>
            <div className="sign-in">
              <div className="title">Sign in to checkout</div>
              <form action>
                <div className="email-input">
                  <input id="email" type="text" placeholder="Email" />
                </div>
                <div className="password-input">
                  <span className="show-password">
                    <img
                      src={eyeShow}
                      className="show-password-eye"
                      alt="show password eye"
                    />
                    <img
                      src={eyeHide}
                      className="hide-password-eye"
                      alt="hide password eye"
                    />
                  </span>
                  <input id="password" type="password" placeholder="Password" />
                </div>
                <a href className="forget-password" target="_blank">
                  Forgot password?
                </a>
                <button className="signIn-btn">Sign In</button>
                <span className="join-us">
                  Don’t have an account yet?{" "}
                  <a href="sign-up.html" target="_blank">
                    Join Us
                  </a>
                </span>
              </form>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </section>
  );
};

export default Cart;
