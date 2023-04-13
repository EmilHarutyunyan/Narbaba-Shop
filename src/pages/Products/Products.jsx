import React from 'react'
// Styles
import {Wrapper} from "./Products.styles"
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import ProductsFilter from '../../components/ProductsFilter/ProductsFilter'
import ProductsBox from '../../components/ProductsBox/ProductsBox'
const Products = () => {
  const {category} = useParams()
  
  return (
    <Wrapper className="home-main-section">
      <div className="page-container">
        <Breadcrumbs />
        <div className="content">
          <ProductsFilter />
          <ProductsBox />
        </div>
      </div>
    </Wrapper>
  );
}

export default Products