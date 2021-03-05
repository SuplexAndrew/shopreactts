import {Product} from "../models/models";

export type AddProductAction = {type: 'ADD_PRODUCT', payload: Product}

const addProduct = (item: Product):AddProductAction => {
    return {type: 'ADD_PRODUCT', payload: item}
}
