import { createReducer, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const initialState = {
  status: {
    items: false,
    item: false,
  },
  items: [],
  item: null,
};

export const fetchProducts = createAsyncThunk(
  'product/fetch',
  async () => {
    const response = await axios('/api/products');
    
    return response.data;
  }
);

export const fetchProductOne = createAsyncThunk(
  'product/fetch/one',
  async (id) => {
    const response = await axios(`/api/products/${id}`);
    // 의도적인 딜레이 코드
    await delay(random(300, 3500));
    return response.data;
  }
);

export const productReducer = createSlice({
  name: 'product',
  initialState,
  reducers: { },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status.items = false;
       })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        const { result } = action.payload;
        
        state.items = result;
        state.status.items = true;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status.item = false;
       })
      .addCase(fetchProductOne.pending, (state) => { 
        state.status.item = false;
      })
      .addCase(fetchProductOne.fulfilled, (state, action) => {
        const { result } = action.payload;

        state.item = result;
        state.status.item = true;
      })
      .addCase(fetchProductOne.rejected, (state) => { 
        state.status.item = true;
      })
  }
});

export const { search } = productReducer.actions;

export default productReducer.reducer;