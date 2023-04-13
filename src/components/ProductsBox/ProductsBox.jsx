import React from 'react'
// Styles
import {Wrapper} from "./ProductsBox.styles"
import SortBy from '../SortBy/SortBy';
import ProductsSingleBox from '../ProductsSingleBox/ProductsSingleBox';
const ProductsBox = () => {
  return (
    <div className="right-side">
      <div class="header">
        <h1 class="title">Deals Store</h1>
        <SortBy />
      </div>
      <div className="products-list">
        {[...Array(10)].map((item) => {
          return <ProductsSingleBox />;
        })}
      </div>
    </div>
  );
}

export default ProductsBox