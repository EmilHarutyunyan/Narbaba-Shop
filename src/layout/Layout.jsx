import React from 'react'
import {Outlet} from "react-router-dom"
import Header from '../components/Header'
import { Wrapper } from './Layout.styles'
const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  )
}

export default Layout