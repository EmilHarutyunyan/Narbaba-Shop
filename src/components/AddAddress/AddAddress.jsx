import React from 'react'
import { useNavigate } from 'react-router-dom';
import { PROFILE_ADDRESSES } from '../../router/route-path';
// Styles
import {Wrapper} from "./AddAddress.styles"
const AddAddress = () => {
  const navigate = useNavigate()
  return (
    <>
      <h1 className="title">Addresses </h1>
      <button
        onClick={() => navigate(PROFILE_ADDRESSES + "/1")}
        className="add-address"
      >
        Add address
      </button>
    </>
  );
}

export default AddAddress;