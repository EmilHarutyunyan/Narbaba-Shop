import React from "react";
import ProductsSingleBox from "../../components/ProductsSingleBox/ProductsSingleBox";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../app/features/favorites/favoritesSlice";

const Favorites = () => {
  const { count } = useSelector(selectFavorites);
  return (
    <section className="cart-section">
      <div className="page-container">
        <Breadcrumbs />
        <div className="cart-list">
          <div className="title">Favorites</div>
          {count > 0 ? (
            <div className="favorite-products products-list">
              {[...Array(2)].map((item) => {
                return <ProductsSingleBox />;
              })}
            </div>
          ) : (
            <>
              <div className="favorite-empty">
                Your favorite list is empty. Go to new releases page o find a
                product you can like.
              </div>
              <button className="goTo-newRelease">New Releases</button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Favorites;
