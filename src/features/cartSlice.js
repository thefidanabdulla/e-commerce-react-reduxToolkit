import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
    cartData: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) =>{
            const itemIndex = state.cartData.findIndex((item) => item.id === action.payload.id);
            if( itemIndex >= 0 ){
                state.cartData[itemIndex].cartQuantity += 1;
                toast.info("Increased product quantity", {
                    position: 'bottom-left'
                })
            }else{
                const tempProduct = {...action.payload, cartQuantity: 1};
                state.cartData.push(tempProduct);
                toast.success("Product added to cart successfully", {
                    position: 'bottom-left'
                })
            }
        },
        deleteFromCart: (state, action) =>{
            state.cartData = state.cartData.filter((cartItem) => cartItem.id !== action.payload.id);
            toast.warning("Product removed from cart", {
                position: 'bottom-left'
            })
        },
        incrementCartItemQuantity: (state, action) =>{
            const itemIndex = state.cartData.findIndex((item) => item.id === action.payload);
            state.cartData[itemIndex].cartQuantity += 1
        },
        decrementCartItemQuantity: (state, action) =>{
            const itemIndex = state.cartData.findIndex((item) => item.id === action.payload);
            state.cartData[itemIndex].cartQuantity -= 1
        },
    }
})
export const {addToCart, deleteFromCart, incrementCartItemQuantity, decrementCartItemQuantity} = cartSlice.actions;
export default cartSlice.reducer;