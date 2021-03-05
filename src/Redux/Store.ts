import {cartReducer} from "./cartReducer";
import {createStore} from "redux";

export const Store = createStore(cartReducer)