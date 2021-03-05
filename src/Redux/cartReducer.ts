import {Product} from "../models/models";
import {AddProductAction} from "./Actions";

export interface CartState {
    cartItems: Product[]
}

const InitialState = {
    cartItems: []
}

export const cartReducer = (state: CartState = InitialState, action: AddProductAction) => {
    switch (action.type) {
        case "ADD_PRODUCT": {
            return {...state, cartItems: [...state.cartItems, action.payload]}
        }
        default:
            return state
    }
}