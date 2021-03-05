import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink, useHistory} from "react-router-dom";

export const Navbar : React.FC = () => {
    const history = useHistory()
    return (
        <header
            className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <p className="h5 my-0 me-md-auto fw-normal">Product shop</p>
            <nav className="my-2 my-md-0 me-md-3 mx-lg-5 ml-5">
                <NavLink to="/">Категории</NavLink>
                <NavLink to="/cart">Корзина</NavLink>
            </nav>
            <a className="btn btn-outline-primary" onClick={() => history.push('/cart')}>Корзина</a>
        </header>
    )
}

