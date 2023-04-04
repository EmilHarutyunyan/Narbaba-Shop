import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
// Styles
import { Wrapper } from "./Header.styles";
// Img
import narLogo from "../../assets/images/narbaba-logo.png";
import englishLn from "../../assets/images/english.png";
import turkishLn from "../../assets/images/turkish.png";
import germanLn from "../../assets/images/german.png";
import cartIcon from "../../assets/images/cart-icon.png";
import profileIcon from "../../assets/images/profile-icon.png";
import favoriteIcon from "../../assets/images/favorite-icon.png";
import { categorySearch } from "./dataLinks";
import { useSelector } from "react-redux";
import { selectUser } from "../../app/features/user/userSlice";
const Header = () => {
  const {userInfo} = useSelector(selectUser)
  
  return (
    <Wrapper>
      <div>
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
                      <li className="nav-item active">
                        <Link className="nav-link" to="cart">
                          <img src={cartIcon} alt="Cart" />
                          Cart
                          <span className="cart-items">(0)</span>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to={userInfo ? "profile/my-orders" : "login"}
                        >
                          <img src={profileIcon} alt="Profile" />
                          {userInfo?.fullName ? userInfo?.fullName : "Profile"}
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="favorites">
                          <img src={favoriteIcon} alt="Favorites" />
                          Favorites
                          <span className="favorites-items">(0)</span>
                        </Link>
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
                          <Dropdown.Item className="dropdown-item" href="#">
                            <img src={turkishLn} alt="turkish" />
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item" href="#">
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
                          <Dropdown.Item className="dropdown-item" href="#">
                            ₺ - TL
                          </Dropdown.Item>
                          <Dropdown.Item className="dropdown-item" href="#">
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
              <Link to={""} className="second-header-item">
                Best Sellers
              </Link>
              <Link to={""} className="second-header-item">
                Deals Store
              </Link>
              <Link to={""} className="second-header-item">
                New Releases
              </Link>
              <Link to={""} className="second-header-item">
                Customer Service
              </Link>
              <Link to={""} className="second-header-item">
                Electronics
              </Link>
              <Link to={""} className="second-header-item">
                Gift Ideas
              </Link>
              <Link to={""} className="second-header-item active">
                Home
              </Link>
              <Link to={""} className="second-header-item">
                Sell
              </Link>
              <Link to={""} className="second-header-item">
                Toys &amp; Games
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

export default Header;