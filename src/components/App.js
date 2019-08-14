import React from 'react';
import '../index.css';
import 'antd/dist/antd.css';
import RestaurantsList from './RestaurantsList';
import OrderForm from './OrderForm';
import Filter from './Filter';
import Cart from './Cart';

export default function App() {
    return (
        <>
            <h1 className="app-title">Delivery App</h1>
            <Filter></Filter>
            <RestaurantsList></RestaurantsList>
            <Cart></Cart>
            <OrderForm></OrderForm>
        </>
    );
}
