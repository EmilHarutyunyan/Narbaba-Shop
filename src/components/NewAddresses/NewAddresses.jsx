import React, { useEffect, useState } from "react";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
// Styles
import { Wrapper } from "./NewAddresses.styles";
// Img
import downArray from "../../assets/images/Down_Arrow.png";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema_address } from "./schema";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

// Img
import backArrow from "../../assets/images/back-arrow.png";
import { toast, ToastContainer } from "react-toastify";
import { resetAddressMessage, selectAddress } from "../../app/features/address/addressSlice";
import { useDispatch, useSelector } from "react-redux";
import { addAddress } from "../../app/features/address/addressActions";
const NewAddresses = () => {
  const navigate = useNavigate();
  const { error, message } = useSelector(selectAddress);
  const dispatch = useDispatch();
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
    setValue,
  } = useForm({
    resolver: yupResolver(schema_address),
  });
  
  console.log('errors :', errors);
   
  const notify = (message) =>
    toast.success(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const onSubmit = async (data) => {
    
    console.log(data);
    await dispatch(addAddress({address:data}));
    setCountry("")
    setRegion("")
    reset();
  };
  useEffect(() => {
    if (message) {
      notify(message);
    }
    return () => dispatch(resetAddressMessage());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);
  const handleInputChange = (name,val) => {
    setValue(name, val, { shouldDirty: true });
    clearErrors(name);
  };
  return (
    <div className="right-side addresses">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <h1 className="title payment-methods-title">
        <button onClick={() => navigate(-1)}>
          <img src={backArrow} alt="back arrow" />
        </button>
        Add a new address
      </h1>
      <form className="payment-methods-form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            {...register("country")}
            style={{ display: "none" }}
          />
          <CountryDropdown
            value={country}
            onChange={(val) => {
              handleInputChange("country", val);
              setCountry(val);
            }}
            style={{
              background: `url(
                  ${downArray}
                ) no-repeat`,
            }}
            id="country"
          />
          {errors.country && (
            <span className="text-danger">{errors.country.message}</span>
          )}
        </div>
        <div>
          <input
            type="text"
            {...register("state")}
            style={{ display: "none" }}
          />
          <RegionDropdown
            country={country}
            value={region}
            onChange={(val) => {
              handleInputChange("state", val);
              setRegion(val);
            }}
            name="state"
            id="state"
            style={{
              background: `url(
                ${downArray}
              ) no-repeat`,
            }}
          />
          {errors.state && (
            <span className="text-danger">{errors.state.message}</span>
          )}
        </div>

        <div className="city">
          <input type="text" placeholder="City" {...register("city")} />
          {errors.city && (
            <span className="text-danger">{errors.city.message}</span>
          )}
        </div>
        <div className="address">
          <input type="text" placeholder="Address" {...register("address")} />
          {errors.address && (
            <span className="text-danger">{errors.address.message}</span>
          )}
        </div>
        <div className="address">
          <input
            type="text"
            placeholder="Address 2"
            {...register("address2")}
          />
          {errors.address2 && (
            <span className="text-danger">{errors.address2.message}</span>
          )}
        </div>
        <div className="postal-code">
          <input
            type="text"
            placeholder="ZIP/Postal Code"
            {...register("zip")}
          />
          {errors.zip && (
            <span className="text-danger">{errors.zip.message}</span>
          )}
        </div>
        <div className="phone-num">
          <input
            type="text"
            placeholder="Phone number"
            {...register("phone")}
          />
          {errors.phone && (
            <span className="text-danger">{errors.phone.message}</span>
          )}
        </div>
        <div className="email">
          <input type="text" placeholder="Email" {...register("email")} />
          {errors.email && (
            <span className="text-danger">{errors.email.message}</span>
          )}
        </div>
        <div className="payment-methods-buttons">
          <button className="discard-btn" onClick={() => reset()}>
            Discard
          </button>
          <input type="submit" className="save-btn" value={"Save"} />
        </div>
      </form>
    </div>
  );
};

export default NewAddresses;
