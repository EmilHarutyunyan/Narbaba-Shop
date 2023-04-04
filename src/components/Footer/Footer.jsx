import React from "react";
import { Link, NavLink } from "react-router-dom";
import Newsletter from "../Newsletter";
import { companyList, quickList, shopList } from "./dataLinks";
// Styles
import { Wrapper } from "./Footer.styles";
// Img
import fcLogo from "../../assets/images/fb-logo.png";
import inLogo from "../../assets/images/instagram-logo.png";
import CopyRight from "../CopyRight/CopyRight";
const Footer = () => {
  return (
    <Wrapper>
      <div className="main-footer">
        <div className="page-container">
          <div className="footer-menu">
            <div className="first-footer-menu">
              <div className="shop-title">Shop</div>
              <ul className="shop-list">
                {shopList.map((item,idx) => {
                  return (
                    <li key={idx}>
                      <NavLink className="item" key={item.id} to={item.link}>
                        {item.text}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="second-footer-menu">
              <div className="company-title">Company</div>
              <ul className="company-list">
                {companyList.map((item,idx) => {
                  return (
                    <li key={idx}>
                      <NavLink className="item" key={item.id} to={item.link}>
                        {item.text}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="third-footer-menu">
              <div className="quick-links-title">Quick links</div>
              <ul className="quick-links-list">
                {quickList.map((item,idx) => {
                  return (
                    <li key={idx}>
                      <NavLink className="item" key={item.id} to={item.link}>
                        {item.text}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="forth-footer-menu">
              <Newsletter />
              <div className="social-items">
                <div className="facebook">
                  <Link to={"facebook.com"} target={"_blank"}>
                    <img src={fcLogo} alt="facebook logo" />
                  </Link>
                </div>
                <div className="instagram">
                  <Link to={"instagram.com"} target={"_blank"}>
                    <img src={inLogo} alt="instagram logo" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <CopyRight />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
