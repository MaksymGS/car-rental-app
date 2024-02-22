import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
// import { filterReducer } from './filterSlice';
import { advertsReducer } from './advertsSlice';
import { favoriteReducer } from './favoriteSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const favoritePersistConfig = {
  key: 'favorite',
  storage,
  whitelist: ['favorAds'],
};

export const store = configureStore({
  reducer: {
    favorite: persistReducer(favoritePersistConfig, favoriteReducer),
    adverts: advertsReducer,
    // filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
