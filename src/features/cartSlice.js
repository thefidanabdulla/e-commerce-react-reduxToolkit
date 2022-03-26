import { createSlice } from "@reduxjs/toolkit";
import { galaxyS21 } from "../constants/images";
const initialState = {
    cartData: [
        {
            id: 1,
            productName: "Samsung Galaxy S21",
            productDescription: "Samsung Galaxy S21 FE 5G Cell Phone, Factory Unlocked Android Smartphone, 128GB, 120Hz Display, Pro Grade Camera, All Day Intelligent Battery, US Version, Graphite",
            productPrice: "$799.99",
            productImage: galaxyS21,
            category: "electronic"
        }
    ]
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) =>{
            state.push(action.payload)
        }
    }
})
export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;