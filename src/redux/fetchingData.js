import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://656cc3c4e1e03bfd572eb9f4.mockapi.io';

export const fetchAdverts = createAsyncThunk(
  'adverts/fetchAll',
  async (params, thunkAPI) => {
    try {
      if (!params.get('page')) {
        params.set('page', '1');
      }
      const limit = params.get('limit') ?? 'limit=12';
      const resp = await axios.get(`/adverts?${params}&${limit}`);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
