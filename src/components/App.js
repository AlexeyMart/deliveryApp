import React, { useState } from 'react';
import '../index.css';
import 'antd/dist/antd.css';
import RestaurantsList from './RestaurantsList';
import { restaurants } from '../fixtures';
import OrderForm from './OrderForm';
import Filter from './Filter';

export default function App() {
    const [rating, setRating] = useState(0);

    const handleChangeRating = value => {
        setRating(value);
    };

    return (
        <>
            <h1 className="app-title">Delivery App</h1>
            <Filter handleChangeRating={handleChangeRating}></Filter>
            <RestaurantsList rating={rating} restaurants={restaurants}></RestaurantsList>
            <OrderForm></OrderForm>
        </>
    );
}
