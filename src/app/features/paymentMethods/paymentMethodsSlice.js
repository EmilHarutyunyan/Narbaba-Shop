import { createSlice } from "@reduxjs/toolkit";
import { addPaymentMethod, getPaymentMethods, removePaymentMethods } from "./paymentMethodsActions";


const initialState = {
  loading: false,
  message: null,
  paymentMethodsInfo: [],
  paymentMethodsChange: {},
};

const paymentMethodsSlice = createSlice({
  name: "paymentMethods",
  initialState,
  reducers: {
    resetPaymentMethodsMessage: (state) => {
      state.error = null;
      state.message = null;
      state.paymentMethodsInfo = [];
      state.paymentMethodsChange ={};
    },
  },
  extraReducers: {
    [addPaymentMethod.pending]: (state) => {
      state.loading = true;
    },
    [addPaymentMethod.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.message = "Add Payment Method";
    },
    [addPaymentMethod.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [getPaymentMethods.pending]: (state) => {
      state.loading = true;
    },
    [getPaymentMethods.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.paymentMethodsInfo = payload;
    },
    [getPaymentMethods.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [removePaymentMethods.pending]: (state) => {
      state.loading = true;
    },
    [removePaymentMethods.fulfilled]: (state, { payload }) => {
      state.loading = false;

      state.message = "Remove Payment";
    },
    [removePaymentMethods.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { resetPaymentMethodsMessage } = paymentMethodsSlice.actions;

export const selectPaymentMethods = (state) => state.paymentMethods;

export default paymentMethodsSlice.reducer;
