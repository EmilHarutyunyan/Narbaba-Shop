import { createAsyncThunk } from '@reduxjs/toolkit'
import { API_ENDPOINT } from '../../../config/config'
import axiosInstance from '../../../services/axiosInstance';
import TokenService from '../../../services/token.service';

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
        address,
        config
      );

      return data.Item;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);


export const getAddress = createAsyncThunk(
  "address/getAddress",
  async (_,{ rejectWithValue }) => {
    try {
      debugger;
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
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

