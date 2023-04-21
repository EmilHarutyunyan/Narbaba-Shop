import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectFavorites } from '../../../app/features/favorites/favoritesSlice';

import favoriteIcon from "../../../assets/images/favorite-icon.png";
const FavoriteAction = () => {
  const {count} = useSelector(selectFavorites)
  return (
    <Link className="nav-link" to="favorites">
      <img src={favoriteIcon} alt="Favorites" />
      Favorites
      <span className="favorites-items">({count})</span>
    </Link>
  );
}

export default FavoriteAction