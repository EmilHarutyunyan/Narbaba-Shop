import React from 'react'
import BrandSliders from '../../components/BrandSliders';
import DailyDeals from '../../components/DailyDeals/DailyDeals';
import HomeSlider from '../../components/HomeSlider'
import ProductLists from '../../components/ProductLists/ProductLists';
import ShopByCategory from '../../components/ShopByCategory/ShopByCategory';
import WhyBuy from '../../components/WhyBuy/WhyBuy';
// Styles
import {Wrapper} from "./Home.styles"
const Home = () => {
  return (
    <Wrapper>
      <HomeSlider />
      <ProductLists />
      <DailyDeals />
      <WhyBuy />
      <ShopByCategory />
      <BrandSliders />
    </Wrapper>
  );
}

export default Home