import { createSlice } from "@reduxjs/toolkit";

 const initialState = {
   count: 1,
 };


 const cartSlice = createSlice({
  name:'cart',
  initialState,
  reducers: {

  },
  extraReducers: {

  }
 });



 export const selectCart = (state) => state.cart;

 export default cartSlice.reducer;