import React from 'react';
import 'antd/dist/antd.css';
import Restaurant from './Restaurant';

export default function RestaurantsList({ restaurants }) {
    return restaurants.map(restaurant => (
        <Restaurant restaurant={restaurant} key={restaurant.id}></Restaurant>
    ));
}
