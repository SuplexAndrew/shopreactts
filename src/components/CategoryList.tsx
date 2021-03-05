import React from 'react'
import {Category} from "../models/models"
import {CategoryComponent} from "./CategoryComponent"
import 'bootstrap/dist/css/bootstrap.min.css';

interface ICategoryListProps {
    items: Category[];
}

export const CategoryList: React.FC<ICategoryListProps> = ({items}) => {
    return (
        <>
            <h4>Категории</h4>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 col-lg-10">
                {
                    items.map(item => {
                        return (
                            <CategoryComponent key={item.id} id={item.id} name={item.name}/>
                        )
                    })
                }
            </div>
        </>
    )
}