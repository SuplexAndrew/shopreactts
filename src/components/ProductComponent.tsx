import {Product} from "../models/models";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {useDispatch} from "react-redux";

interface IProductProps {
    item: Product;
    id: number;
}

const ProductComponent: React.FC<IProductProps> = ({item, id}) => {
    const dispatch = useDispatch()
    const onClick = () => {
        dispatch({type: 'ADD_PRODUCT', payload: item})
    }
    return (
        <div className="col">
            <div className="card shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="100"
                     xmlns="http://www.w3.org/2000/svg"
                     role="img" preserveAspectRatio="xMidYMid slice"
                     focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%"
                          fill="#006699">333
                    </rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">{item.name}</text>
                </svg>
                <div className="card-body">
                    <p className="card-text">Стоимость: {item.price}</p>
                    <button className='btn btn-info float-left'>Подробнее</button>
                    <button className='btn btn-danger float-right'
                          onClick={onClick}  >
                        Добавить в корзину</button>
                </div>
            </div>
        </div>
    )
}
export default ProductComponent;