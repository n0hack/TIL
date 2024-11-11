import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  status: false,
  config: {},
};

export const fetchConfig = createAsyncThunk(
  'config/fetch',
  async () => {
    const response = await axios('/config');

    return response.data;
  }
);

export const configReducer = createSlice({
  name: 'config',
  initialState,
  reducers: { },

  extraReducers: (builder) => {
    builder
      .addCase(fetchConfig.pending, (state) => {})
      .addCase(fetchConfig.fulfilled, (state, action) => {
        const { result } = action.payload;
        state.server = result.server;
        state.status = true;
      })
  }
});

export default configReducer.reducer;