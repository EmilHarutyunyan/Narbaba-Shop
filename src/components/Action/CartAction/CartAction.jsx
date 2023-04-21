import React from 'react'
import { Link } from 'react-router-dom';
import cartIcon from "../../../assets/images/cart-icon.png";
import { useSelector } from 'react-redux';
import { selectCart } from '../../../app/features/cart/cartSlice';
const CartAction = () => {
  const {count} = useSelector(selectCart)
  return (
    <li className="nav-item active">
      <Link className="nav-link" to="cart">
        <img src={cartIcon} alt="Cart" />
        Cart
        <span className="cart-items">({count})</span>
      </Link>
    </li>
  );
}

export default CartAction