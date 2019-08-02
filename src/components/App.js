import React from 'react';
import 'antd/dist/antd.css';
import RestaurantsList from './RestaurantsList';
import { restaurants } from '../fixtures';
import OrderForm from './OrderForm';

export default function App() {
    return (
        <>
            <h1>Delivery App</h1>
            <RestaurantsList restaurants={restaurants}></RestaurantsList>
            <OrderForm></OrderForm>
        </>
    );
}
