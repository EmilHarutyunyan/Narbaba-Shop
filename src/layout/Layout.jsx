import React from 'react'
import {Outlet} from "react-router-dom"
import Footer from '../components/Footer/Footer'
import Header from '../components/Header'
import { Wrapper } from './Layout.styles'
const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
      <Footer />
    </Wrapper>
  )
}

export default Layout