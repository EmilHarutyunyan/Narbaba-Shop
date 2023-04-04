import React from 'react'
import DailyDeals from '../../components/DailyDeals/DailyDeals';
import HomeSlider from '../../components/HomeSlider'
import ProductLists from '../../components/ProductLists/ProductLists';
// Styles
import {Wrapper} from "./Home.styles"
const Home = () => {
  return (
    <Wrapper>
      <HomeSlider />
      <ProductLists />
      <DailyDeals />
    </Wrapper>
  );
}

export default Home