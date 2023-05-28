import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        try {
            const response = await axios.get("https://sandbox.psapi.co/random-pro");
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
    
);
export const productsSlice = createSlice({
    name: 'products',
    initialState:{
        products: [],
        isError : false,
        isLoading:false,
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.isLoading = false
                
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = true
                state.products = [];
                state.isError = true;
                state.error = action.payload.error?.message;
            })
    }
});

export default productsSlice.reducer;