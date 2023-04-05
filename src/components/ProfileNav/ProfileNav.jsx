import React from "react";
// Img

import logIcon from "../../assets/images/log-out_1.png";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../app/features/user/userSlice";
import { useDispatch } from "react-redux";
import { dataLinks } from "./dataLinks";

const ProfileNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(logout());
    navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  };
  return (
    <>
      <div className="side-navbar">
        <div className="side-navbar-list">
          {dataLinks.map((item,idx) => {
            return (
              <NavLink to={item.link} key={idx} className="side-navbar-item">
                <img src={item.icon} alt="open box" />
                <span>{item.text}</span>
              </NavLink>
            );
          })}
          <button onClick={handleLogOut} className="side-navbar-item">
            <img src={logIcon} alt="log out" />
            <span>Log out</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileNav;
