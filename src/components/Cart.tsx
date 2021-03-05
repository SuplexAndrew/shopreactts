import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { CartState } from '../Redux/cartReducer';
import {Product} from "../models/models";

export const Cart = () => {
    const items = useSelector<CartState, CartState['cartItems']>(state => state.cartItems)
    let temp:[Product, number][] = []
    for (let i of items){
        let t = temp.find(x => i === x[0])
        t === undefined ? temp.push([i, 1]) : t[1]++
    }
    return (
        <table>
            <thead>
            <tr>
                <th>id</th>
                <th>name</th>
            </tr>
            </thead>
            <tbody>
            {
                temp.map(item =>
                <tr>
                    <td>{item[0].name}</td>
                    <td>{item[1]}</td>
                    <td>{item[1] * item[0].price}</td>
                </tr>)
            }
            </tbody>
        </table>
    )
}

