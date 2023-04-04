import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import TokenService from '../../../services/token.service'
import { API_ENDPOINT } from '../../../config/config'
import axiosInstance from '../../../services/axiosInstance';

export const userLogin = createAsyncThunk(
  "user/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${API_ENDPOINT}Account/Authorize`,
        { email, password },
        config
      );

      // store user's token in local storage
      // localStorage.setItem('userToken', data.userToken)
      TokenService.setUser(data?.Item);

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

export const registerUser = createAsyncThunk(
  "user/register",
  async ({ fullName, email, password, role = 0 }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
       await axios.post(
        `${API_ENDPOINT}Account/Register`,
        { fullName, email, password, role },
        config
        );
        
    } catch (error) {
      if (error.response && error.response.data.errorMessage) {
        return rejectWithValue(error.response.data.errorMessage);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getUserDetails = createAsyncThunk(
  'user/getUserDetails',
  async (arg, { getState, rejectWithValue }) => {
    try {
      const { user } = getState()
      const config = {
        headers: {
          Authorization: `Bearer ${user.userToken}`,
        },
      }

      const { data } = await axiosInstance.get(`${API_ENDPOINT}Account/Get`, config)
      TokenService.setUserInfo(data?.item);
      return data.item
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
);
export const forgotPassword = createAsyncThunk(
  "user/forgot-password",
  async ({email}, { getState, rejectWithValue }) => {
    try {
     const config = {
       headers: {
         "Content-Type": "application/json",
       },
     };
     const {data} = await axios.post(
       `${API_ENDPOINT}Account/RestorePassword`,
       { email },
       config
     );
     return data.item
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const userUpdate = createAsyncThunk(
  "user/user-update",
  async ({ fullName }, { getState, rejectWithValue }) => {
    try {
      debugger;
      const { user } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${user.userToken}`,
        },
      };

      const res = await axiosInstance.put(
        `${API_ENDPOINT}Account/Update`,
        { fullName },
        config
        );
        
        if(res.status === 200) {
          const userInfo = TokenService.getUserInfo()
          TokenService.setUserInfo({
            ...userInfo,
            fullName,
          });
          
          return { ...userInfo, fullName };
        }
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const userUpdatePassword = createAsyncThunk(
  "user/user-update-password",
  async ({ oldPassword, newPassword }, { getState, rejectWithValue }) => {
    try {
      debugger;
      const { user } = getState();
      const config = {
        headers: {
          Authorization: `Bearer ${user.userToken}`,
        },
      };

      const res = await axiosInstance.put(
        `${API_ENDPOINT}Account/ChangePassword`,
        { oldPassword, newPassword },
        config
      );

      if(res.status === 200) {
          return "Change Password";
      }
      
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
