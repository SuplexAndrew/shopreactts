import React, {useState} from 'react';
import './App.css';
import {Category, Product} from "./models/models";
import {CategoryList} from "./components/CategoryList";
import {Navbar} from "./components/Navbar";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Cart} from "./components/Cart";
import {ProductsForm} from "./components/ProductsForm";

function App() {
    const [categories, setCategories] = useState<Category[]>([
        {id: 1, name: 'Молочные'},
        {id: 2, name: 'Мучное'}
    ])
    const [products, setProducts] = useState<Product[]>([
        {id: 1, name: 'Молоко',price: 55, category: categories[0]},
        {id: 3, name: 'Сметана',price: 76, category: categories[0]},
        {id: 2, name: 'Хлеб',price: 35, category: categories[1]},
        {id: 4, name: 'Булочка',price: 20, category: categories[1]},
    ])
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={() => <CategoryList items={categories}/>}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/products/:id" component=
                        {() => <ProductsForm items={products}/>}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
