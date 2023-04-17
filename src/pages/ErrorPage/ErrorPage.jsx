import React from 'react'
// Styles
import {Wrapper} from "./ErrorPage.styles"
import { Link } from 'react-router-dom';
import errorImg from "../../assets/images/error404.png"
const ErrorPage = () => {

  return (
    <Wrapper>
      <img src={errorImg}  alt={"Error"}/>
      <h1>Page Not Found</h1>
      <Link to="/">Home Page</Link>
    </Wrapper>
  );
}

export default ErrorPage