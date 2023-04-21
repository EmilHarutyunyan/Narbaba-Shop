import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, NavLink } from "react-router-dom";
// Img
import narLogo from "../../assets/images/narbaba-logo.png";
import englishLn from "../../assets/images/english.png";
import turkishLn from "../../assets/images/turkish.png";
import germanLn from "../../assets/images/german.png";
import profileIcon from "../../assets/images/profile-icon.png";
import { categorySearch, navLinks } from "./dataLinks";
import { useSelector } from "react-redux";
import { selectUser } from "../../app/features/user/userSlice";
import FavoriteAction from "../Action/FavoriteAction/FavoriteAction";
import CartAction from "../Action/CartAction/CartAction";
const Header = () => {
  const {userInfo} = useSelector(selectUser)
  
  return (
    <>
        <header>
          <div className="page-container header-container">
            <div className="main-header">
              <nav className="navbar navbar-expand-lg w-100">
                <div className="navbar-mobile-left-side d-flex mb-3">
                  <Link className="navbar-brand" to="/">
                    <img src={narLogo} alt="narbaba logo" />
                  </Link>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarToggler"
                  >
                    <span className="navbar-toggler-icon my-toggler" />
                  </button>
                </div>
                <div className="header-left-side d-flex mobile-header-search-bar mb-3">
                  <Dropdown className="search-dropdown dropdown">
                    <Dropdown.Toggle
                      variant="success"
                      className="dropdown-toggle"
                      type="button"
                    >
                      All
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu">
                      {categorySearch.map((item) => {
                        return (
                          <Dropdown.Item
                            className="dropdown-item"
                            key={item.id}
                            to={item.link}
                          >
                            {item.text}
                          </Dropdown.Item>
                        );
                      })}
                    </Dropdown.Menu>
                  </Dropdown>
                  <form className="search-form">
                    <input
                      className="search-input form-control"
                      type="search"
                      placeholder="Search for product"
                      aria-label="Search"
                    />
                  </form>
                </div>
                <div className="collapse navbar-collapse" id="navbarToggler">
                  <div className="header-left-side d-flex">
                    <Dropdown className="search-dropdown dropdown">
                      <Dropdown.Toggle
                        variant="success"
                        className="dropdown-toggle"
                        type="button"
                      >
                        All
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu">
                        {categorySearch.map((item) => {
                          return (
                            <Dropdown.Item
                              className="dropdown-item"
                              key={item.id}
                              href={item.link}
                            >
                              {item.text}
                            </Dropdown.Item>
                          );
                        })}
                      </Dropdown.Menu>
                    </Dropdown>
                    <form className="search-form">
                      <input
                        className="search-input form-control"
                        type="search"
                        placeholder="Search for product"
                        aria-label="Search"
                      />
                    </form>
                  </div>
                  <div className="header-right-side">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                      <CartAction />
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={"/profile/my-orders"}
                        >
                          <img src={profileIcon} alt="Profile" />
                          {userInfo?.fullName ? userInfo?.fullName : "Profile"}
                        </Link>
                      </li>
                      <li className="nav-item">
                        <FavoriteAction />
                      </li>

                      <Dropdown className="dropdown language-dropdown">
                        <Dropdown.Toggle
                          variant="transparent"
                          className="btn dropdown-toggle"
                          type="button"
                          id="languageDropdown"
                        >
                          <img src={englishLn} alt="english" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          className="dropdown-menu"
                          aria-labelledby="languageDropdown"
                        >
                          <Dropdown.Item className="dropdown-item" to="#">
                            <img src={turkishLn} alt="turkish" />
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item" to="#">
                            <img src={germanLn} alt="german" />
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>

                      <Dropdown className="dropdown currency-dropdown">
                        <Dropdown.Toggle
                          variant="transparent"
                          className="btn dropdown-toggle"
                          type="button"
                          id="currencyDropdown"
                        >
                          $ - USD
                        </Dropdown.Toggle>
                        <Dropdown.Menu
                          className="dropdown-menu"
                          aria-labelledby="languageDropdown"
                        >
                          <Dropdown.Item className="dropdown-item" to="#">
                            ₺ - TL
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item" to="#">
                            € - EUR
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </header>
        <section className="second-header">
          <div className="page-container">
            <div className="second-header-list">
              {navLinks.map((item) => {
                return (
                  <NavLink
                    className="second-header-item"
                    key={item.id}
                    to={item.link}
                  >
                    {item.text}
                  </NavLink>
                );
              })}
              
            </div>
          </div>
        </section>
    </>
  );
};

export default Header;
