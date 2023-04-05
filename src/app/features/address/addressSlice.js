import { createSlice } from '@reduxjs/toolkit'
import { addAddress, getAddress } from './addressActions';

const initialState = {
  loading: false,
  message: null,
  addressesInfo:[],
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    resetAddressMessage: (state) => {
      state.error = null;
      state.message = null;
    },
  },
  extraReducers: {
    [addAddress.pending]: (state) => {
      state.loading = true;
    },
    [addAddress.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.message = "Add Address";
    },
    [addAddress.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getAddress.pending]: (state) => {
      state.loading = true;
    },
    [getAddress.fulfilled]: (state, { payload }) => {
      state.loading = false;
      debugger
      state.addressesInfo = payload;
    },
    [getAddress.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { resetAddressMessage } = addressSlice.actions;

export const selectAddress = (state) => state.address;

export default addressSlice.reducer;
