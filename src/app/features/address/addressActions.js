import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_ENDPOINT } from "../../../config/config";
import axiosInstance from "../../../services/axiosInstance";
import TokenService from "../../../services/token.service";

export const addAddress = createAsyncThunk(
  "address/addAddress",
  async ({ address }, { rejectWithValue }) => {
    try {
      const user = TokenService.getUser();
      const config = {
        headers: {
          Authorization: `Bearer ${user.JwtToken}`,
        },
      };

      const { data } = await axiosInstance.post(
        `${API_ENDPOINT}Account/AddAddress`,
        { ...address, isDefaultAddress: true },
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

export const getAddresses = createAsyncThunk(
  "address/getAddresses",
  async (_, { rejectWithValue }) => {
    try {
      
      const user = TokenService.getUser();
      const config = {
        headers: {
          Authorization: `Bearer ${user.JwtToken}`,
        },
      };

      const { data } = await axiosInstance.get(
        `${API_ENDPOINT}Account/GetAddresses`,
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

export const getOneAddress = createAsyncThunk(
  "address/getOneAddress",
  async ({id}, { rejectWithValue }) => {

    try {
      
      const user = TokenService.getUser();
      const config = {
        headers: {
          Authorization: `Bearer ${user.JwtToken}`,
        },
      };

      const { data } = await axiosInstance.get(
        `${API_ENDPOINT}Account/GetAddress?Id=${id}`,
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

export const removeAddress = createAsyncThunk(
  "address/removeAddress",
  async ({ id }, { rejectWithValue, dispatch }) => {
    try {
      
      const user = TokenService.getUser();
      const config = {
        headers: {
          Authorization: `Bearer ${user.JwtToken}`,
        },
      };

      const { data } = await axiosInstance.post(
        `${API_ENDPOINT}Account/RemoveAddress`,
        { id },
        config
      );
      await dispatch(getAddresses());
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

export const defaultAddress = createAsyncThunk(
  "address/defaultAddress",
  async ({ address }, { rejectWithValue, dispatch }) => {
    try {
      const user = TokenService.getUser();
      const config = {
        headers: {
          Authorization: `Bearer ${user.JwtToken}`,
        },
      };

      const { data } = await axiosInstance.post(
        `${API_ENDPOINT}Account/UpdateAddress`,
        { address, isDefaultAddress: true },
        config
      );
      await dispatch(getAddresses());
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

export const updateAddress = createAsyncThunk(
  "address/updateAddress",
  async ({ address }, { rejectWithValue, dispatch }) => {
    try {
      
      const user = TokenService.getUser();
      const config = {
        headers: {
          Authorization: `Bearer ${user.JwtToken}`,
        },
      };

      const { data } = await axiosInstance.post(
        `${API_ENDPOINT}Account/UpdateAddress`,
        address,
        config
      );
      await dispatch(getAddresses());
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
