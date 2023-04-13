import React from 'react'
// Img
import fiveStarIcon from "../../assets/images/fivestars.png";
import fourStarIcon from "../../assets/images/fourstars.png";
import threeStarIcon from "../../assets/images/threestars.png";
import twoStarIcon from "../../assets/images/twostars.png";
import oneStarIcon from "../../assets/images/onestar.png";
// Styles
import {Wrapper} from "./ProductsFilter.styles"
// Components
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
const ProductsFilter = () => {
  return (
    <>
      <div className="mobile-filtering w-100">
        <button data-toggle="modal" data-target="#filteringModal">
          Filters
        </button>
      </div>
      <div className="left-side">
        <div className="reset-filters">Reset filters</div>
        <div className="filter-list">
          <div className="filter-item">
            <div className="filter-title">Department</div>
            <div className="filter-option">
              <div className="filter-option-item">
                <input id="filter1" name type="checkbox" defaultChecked />
                <label htmlFor="filter1" className="left-side-labels">
                  Department
                </label>
              </div>
              <div className="filter-option-item">
                <input id="filter2" name type="checkbox" />
                <label htmlFor="filter2" className="left-side-labels">
                  Department
                </label>
              </div>
              <div className="filter-option-item">
                <input id="filter3" name type="checkbox" />
                <label htmlFor="filter3" className="left-side-labels">
                  Department
                </label>
              </div>
              <div className="filter-option-item">
                <input id="filter4" name type="checkbox" />
                <label htmlFor="filter4" className="left-side-labels">
                  Department
                </label>
              </div>
              <div className="filter-option-item">
                <input id="filter5" name type="checkbox" />
                <label htmlFor="filter5" className="left-side-labels">
                  Department
                </label>
              </div>
              <div className="filter-option-item">
                <input id="filter6" name type="checkbox" />
                <label htmlFor="filter6" className="left-side-labels">
                  Department
                </label>
              </div>
            </div>
          </div>
          <div className="filter-item">
            <div className="filter-title">Availability</div>
            <div className="filter-option">
              <div className="filter-option-item">
                <input id="inStock" name type="checkbox" />
                <label htmlFor="inStock" className="left-side-labels">
                  In stock
                </label>
              </div>
              <div className="filter-option-item">
                <input id="outOfStock" name type="checkbox" />
                <label htmlFor="outOfStock" className="left-side-labels">
                  Out of stock
                </label>
              </div>
            </div>
          </div>
          <div className="filter-item">
            <div className="filter-title">Price</div>
            <div className="filter-option">
              <div className="filter-option-item">
                <input
                  id="price1"
                  name="reviews"
                  className="reviews"
                  type="checkbox"
                />
                <label htmlFor="price1" className="left-side-labels">
                  Under $25
                </label>
              </div>
              <div className="filter-option-item">
                <input
                  id="price2"
                  name="reviews"
                  className="reviews"
                  type="checkbox"
                />
                <label htmlFor="price2" className="left-side-labels">
                  $25 to $50
                </label>
              </div>
              <div className="filter-option-item">
                <input
                  id="price3"
                  name="reviews"
                  className="reviews"
                  type="checkbox"
                />
                <label htmlFor="price3" className="left-side-labels">
                  $50 to $100
                </label>
              </div>
              <div className="filter-option-item">
                <input
                  id="price4"
                  name="reviews"
                  className="reviews"
                  type="checkbox"
                />
                <label htmlFor="price4" className="left-side-labels">
                  $100 to $200
                </label>
              </div>
              <div className="filter-option-item">
                <input
                  id="price5"
                  name="reviews"
                  className="reviews"
                  type="checkbox"
                />
                <label htmlFor="price2" className="left-side-labels">
                  $200 &amp; Above
                </label>
              </div>
            </div>
          </div>
          <div className="filter-item">
            <div className="filter-title">Reviews</div>
            <div className="filter-option">
              <div className="filter-option-item">
                <input id="fiveStars" name type="checkbox" />
                <label htmlFor="fiveStars" className="left-side-labels">
                  <img src={fiveStarIcon} alt="rating stars" />
                  <span className="rate-num">64</span>
                </label>
              </div>
              <div className="filter-option-item">
                <input id="fourStars" name type="checkbox" />
                <label htmlFor="fourStars" className="left-side-labels">
                  <img src={fourStarIcon} alt="rating stars" />
                  <span className="rate-num">320</span>
                </label>
              </div>
              <div className="filter-option-item">
                <input id="threeStars" name type="checkbox" />
                <label htmlFor="threeStars" className="left-side-labels">
                  <img src={threeStarIcon} alt="rating stars" />
                  <span className="rate-num">320</span>
                </label>
              </div>
              <div className="filter-option-item">
                <input id="twoStars" name type="checkbox" />
                <label htmlFor="twoStars" className="left-side-labels">
                  <img src={twoStarIcon} alt="rating stars" />
                  <span className="rate-num">320</span>
                </label>
              </div>
              <div className="filter-option-item">
                <input id="oneStar" name type="checkbox" />
                <label htmlFor="oneStar" className="left-side-labels">
                  <img src={oneStarIcon} alt="rating stars" />
                  <span className="rate-num">320</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductsFilter