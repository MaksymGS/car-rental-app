import { createSlice } from '@reduxjs/toolkit';

const favoriteSLice = createSlice({
  name: 'favorite',
  initialState: {
    favorAds: [],
  },
  reducers: {
    addFavorite(state, action) {
      const existAdsIndex = state.favorAds.findIndex(item => item.id === action.payload.id)
      console.log(existAdsIndex);
      if (existAdsIndex !== -1){
        state.favorAds.splice(existAdsIndex, 1);
        return
      }
      state.favorAds.push(action.payload);
    },
  },
});

export const favoriteReducer = favoriteSLice.reducer;
export const { addFavorite } = favoriteSLice.actions;
