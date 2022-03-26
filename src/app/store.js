import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/productSlice";
const store = configureStore({
    reducer: {
        products: productSlice,
    }
})

export default store;