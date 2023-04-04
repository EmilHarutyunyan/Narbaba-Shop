import React from "react";
import { Link } from "react-router-dom";
// Styles
import { Wrapper } from "./CopyRight.styles";
import paypalImg from "../../assets/images/Paypal.png";
import visaImg from "../../assets/images/Visa.png";
import masterImg from "../../assets/images/Master.png";
import americaImg from "../../assets/images/american-express.png";
const CopyRight = () => {
  return (
    <>
      <span className="copyright">© 2023, Narbaba. All rights reserved.</span>
      <div className="payment-methods">
        <Link to={""}>
          <img src={paypalImg} alt="Paypal" />
        </Link>
        <Link to={""}>
          <img src={visaImg} alt="Visa" />
        </Link>
        <Link to={""}>
          <img src={masterImg} alt="Master" />
        </Link>
        <Link to={""}>
          <img src={americaImg} alt="American Express" />
        </Link>
      </div>
    </>
  );
};

export default CopyRight;
