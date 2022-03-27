import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cartData: []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) =>{
            state.cartData.push(action.payload)
        },
        deleteFromCart: (state, action) =>{
            state.cartData = state.cartData.filter((cartItem) => cartItem.id !== action.payload.id)
        }
    }
})
export const {addToCart, deleteFromCart} = cartSlice.actions;
export default cartSlice.reducer;