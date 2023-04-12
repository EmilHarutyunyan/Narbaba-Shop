import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  orders:[],
}


const myOrderSlice = createSlice({
  name:"myOrders",
  initialState,
  reducers: {

  },
  extraReducers: {

  }
})

// export const {  } = myOrderSlice.actions;

export const selectMyOrders = (state) => state.myOrders;

export default myOrderSlice.reducer;