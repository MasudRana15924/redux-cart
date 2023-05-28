import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products/productsSlice";
import cartReducer from '../state/products/cartSlice'
 const store=configureStore({
    reducer:{
      products:productsSlice,
      cart: cartReducer,
    }
})
export default store;