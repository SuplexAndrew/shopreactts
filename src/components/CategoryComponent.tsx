import React from 'react'
import {Category} from "../models/models";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory} from 'react-router-dom';

export const CategoryComponent : React.FC<Category> = ({id, name}) => {
    const history = useHistory()
    const clickHandler = () => {
        history.push(`/products/${id}`)
    }
    return (
        <div className="col" onClick={clickHandler}>
            <div className="card shadow-sm">
                <svg className="bd-placeholder-img card-img-top" width="100%" height="100"
                     xmlns="http://www.w3.org/2000/svg"
                     role="img" preserveAspectRatio="xMidYMid slice"
                     focusable="false">
                    <title>Placeholder</title>
                    <rect width="100%" height="100%"
                          fill="#006699">333</rect>
                    <text x="50%" y="50%" fill="#eceeef" dy=".3em">{name}</text>
                </svg>
                <div className="card-body">
                    <p className="card-text"> {id}</p>
                </div>
            </div>
        </div>
    )
}