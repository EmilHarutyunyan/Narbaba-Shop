import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { getAddress } from "../../app/features/address/addressActions";
import { selectAddress } from "../../app/features/address/addressSlice";
import AddAddress from "../../components/AddAddress";
import NewAddresses from "../../components/NewAddresses/NewAddresses";
import {
  PROFILE_ADDRESSES,
  PROFILE_NEW_ADDRESSES,
} from "../../router/route-path";

const ProfileAddresses = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { addressesInfo } = useSelector(selectAddress);
  console.log("addressesInfo :", addressesInfo);
  useEffect(() => {
    dispatch(getAddress());
  }, []);
  const renderAddress = useCallback(() => {
    if (id === "1") {
      return <NewAddresses />;
    }
    if (!id) {
      return <AddAddress />;
    }
  }, [id]);

  return (
    <div className="right-side addresses">
      {renderAddress()}
      <div className="addresses-list">
      {addressesInfo?.length > 0 &&
        addressesInfo.map((address, idx) => {
        console.log('address :', address);
          return (
            <div className="address-item">
                <div className="item-heading">
                  <div className="choose-card w-100">
                    <input
                      id="address1"
                      name="address"
                      type="radio"
                      defaultChecked
                    />
                    <label htmlFor="address1" className="payment-method-label">
                      Default address
                    </label>
                  </div>
                  <div className="buttons">
                    <img src="assets/images/edit-vector.png" alt="edit" />
                    <img
                      src="assets/images/recycle.png"
                      alt="delete"
                      data-toggle="modal"
                      data-target="#removeAddress"
                    />
                  </div>
                </div>
                <div className="address-info">
                  <span className="country">
                    <b>Country:</b> {address?.Country}
                  </span>
                  <span className="state">
                    <b>State:</b> {address?.State}
                  </span>
                  <span className="city">
                    <b>City:</b> {address?.City}
                  </span>
                  <span className="first-address">
                    <b>Address:</b> {address?.Address}
                  </span>
                  <span className="second-address">
                    <b>Address 2:</b> {address?.Address2}
                  </span>
                  <span className="zip">
                    <b>ZIP:</b> {address?.Zip}
                  </span>
                  <span className="phone-number">
                    <b>Phone number:</b> {address?.Phone}
                  </span>
                  <span className="email">
                    <b>Email:</b> {address?.Email}
                  </span>
                </div>
              </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileAddresses;
