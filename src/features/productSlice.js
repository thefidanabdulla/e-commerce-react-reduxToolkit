import { createSlice } from "@reduxjs/toolkit";
import products from "../constants/data";
const initialState = {
    products,
    filteredTelephone: [],
    filteredComputer: [],
    filteredArtCraft: [],
    filteredElectronicAccessories: [],
    filteredSmartHomeData: [],
    filteredCameraPhoto: []
}


const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        filteredComp: (state) => {
            state.products.filteredComputer += state.products.filter((item) => item.category === 'computer&accessories');
        },
        filteredTell: (state) => {
            state.products.filteredTelephone += state.products.filter((item) => item.category === 'telephone&tablet');
        },
        filteredCamera: (state) => {
            state.products.filteredCameraPhoto += state.products.filter((item) => item.category === 'camera&photography');
        },
        filteredArt: (state) => {
            state.products.filteredArtCraft += state.products.filter((item) => item.category === 'art&crafts');
        },
        filteredSmartHome: (state) => {
            state.products.filteredSmartHomeData += state.products.filter((item) => item.category === 'smartHome');
        },
        filteredElectronic: (state) => {
            state.products.filteredElectronicAccessories += state.products.filter((item) => item.category === 'electronic_accessories')
        }
    }
})
export const { filteredComp, filteredCamera, filteredArt, filteredSmartHome, filteredTell, filteredElectronic } = productSlice.actions;
export default productSlice.reducer;