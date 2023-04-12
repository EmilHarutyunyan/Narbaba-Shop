import { createSlice } from "@reduxjs/toolkit";
import { addAddress, getAddresses, getOneAddress, removeAddress } from "./addressActions";

const initialState = {
  loading: false,
  message: null,
  addressesInfo: [],
  addressesChange:{},
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    resetAddressMessage: (state) => {
      state.error = null;
      state.message = null;
      state.addressesInfo = []
      state.addressesChange ={}
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
    [getAddresses.pending]: (state) => {
      state.loading = true;
    },
    [getAddresses.fulfilled]: (state, { payload }) => {
      state.loading = false;

      state.addressesInfo = payload;
    },
    [getAddresses.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getOneAddress.pending]: (state) => {
      state.loading = true;
    },
    [getOneAddress.fulfilled]: (state, { payload }) => {
      state.loading = false;

      state.addressesChange = payload;
    },
    [getOneAddress.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [removeAddress.pending]: (state) => {
      state.loading = true;
    },
    [removeAddress.fulfilled]: (state, { payload }) => {
      state.loading = false;

      state.message = "Remove Address";
    },
    [removeAddress.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { resetAddressMessage } = addressSlice.actions;

export const selectAddress = (state) => state.address;

export default addressSlice.reducer;
