import React from 'react'
import {Category, Product} from "../models/models"
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductComponent from './ProductComponent';
import {RouteComponentProps, useParams} from 'react-router-dom';

interface IProductsFormProps {
    items: Product[];
}

interface IParams {
    id?: string
}

export const ProductsForm: React.FC<IProductsFormProps> = ({items}) => {
    const {id} = useParams<IParams>()
    return (
        <>
            <h4>{items[0].category.name}</h4>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 col-lg-10">
                {
                    items.filter(x => x.category.id === Number(id)).map(item => {
                        return (
                            <ProductComponent key={item.id} id={item.id} item={item}/>
                        )
                    })
                }
            </div>
        </>
    )
}