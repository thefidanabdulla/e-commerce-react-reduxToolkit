import { createSlice } from "@reduxjs/toolkit";
import products from "../constants/data";
const initialState = {products }


const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
        
    }
})
export const {filteredComputer} = productSlice.actions;
export default productSlice.reducer;