import React from 'react';
import '../index.css';
import 'antd/dist/antd.css';
import RestaurantsList from './RestaurantsList';
import { restaurants } from '../fixtures';
import OrderForm from './OrderForm';

export default function App() {
    return (
        <>
            <h1 className="app-title">Delivery App</h1>
            <RestaurantsList restaurants={restaurants}></RestaurantsList>
            <OrderForm></OrderForm>
        </>
    );
}
