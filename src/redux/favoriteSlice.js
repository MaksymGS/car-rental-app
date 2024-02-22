import { createSlice } from '@reduxjs/toolkit';

const filterSLice = createSlice({
  name: 'favorite',
  initialState: {
    favorAds: [],
  },
  reducers: {},
});

export const favoriteReducer = filterSLice.reducer;
