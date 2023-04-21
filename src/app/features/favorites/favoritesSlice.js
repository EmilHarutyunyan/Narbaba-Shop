import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 2,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
  
  },
  extraReducers: {
   
  },
});

// export const {} = favoritesSlice.actions;

export const selectFavorites = (state) => state.favorites;

export default favoritesSlice.reducer;
