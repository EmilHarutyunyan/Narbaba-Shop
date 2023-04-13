import React from 'react'
// Styles
import {NavWrapper} from "./Breadcrumbs.styles"
import { Link, useLocation } from 'react-router-dom';
const Breadcrumbs = () => {
  const location = useLocation();

  return (
    <NavWrapper>
      <Link
        to="/"
        className={
          location.pathname === "/"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Home 
      /</Link>
    </NavWrapper>
  );
};

export default Breadcrumbs;