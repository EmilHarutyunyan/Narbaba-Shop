import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_ENDPOINT } from "../../../config/config";
import axiosInstance from "../../../services/axiosInstance";
import TokenService from "../../../services/token.service";

export const addPaymentMethod = createAsyncThunk(
  "paymentMethods/addPaymentMethod",
  async (
    {
      nameOfCard,
      cardNumber,
      expirationDateMonth,
      expirationDateYear,
      cvc: cvv,
    },
    { rejectWithValue }
  ) => {
    try {
      
      const user = TokenService.getUser();
      const config = {
        headers: {
          Authorization: `Bearer ${user.JwtToken}`,
        },
      };

      const { data } = await axiosInstance.post(
        `${API_ENDPOINT}Account/AddPaymentMethod`,
        {
          nameOfCard,
          cardNumber,
          expirationDateMonth,
          expirationDateYear,
          cvv,
        },
        config
      );

      return data.Item;
    } catch (error) {
      debugger
      // return custom error message from API if any
      if (error.response && error.response.data.errorMessage) {
        return rejectWithValue(error.response.data.errorMessage);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getPaymentMethods = createAsyncThunk(
  "paymentMethods/getPaymentMethods",
  async (_, { rejectWithValue }) => {
    
    try {
      const user = TokenService.getUser();
      const config = {
        headers: {
          Authorization: `Bearer ${user.JwtToken}`,
        },
      };

      const { data } = await axiosInstance.get(
        `${API_ENDPOINT}Account/GetPaymentMethods`,
        config
      );

      return data.Item;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.errorMessage) {
        return rejectWithValue(error.response.data.errorMessage);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);


export const removePaymentMethods = createAsyncThunk(
  "paymentMethods/removePaymentMethods",
  async ({ id }, { rejectWithValue, dispatch }) => {
    try {
      const user = TokenService.getUser();
      const config = {
        headers: {
          Authorization: `Bearer ${user.JwtToken}`,
        },
      };

      const { data } = await axiosInstance.post(
        `${API_ENDPOINT}Account/RemovePaymentMethod`,
        { id },
        config
      );
      await dispatch(getPaymentMethods());
      return data.Item;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.errorMessage) {
        return rejectWithValue(error.response.data.errorMessage);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

