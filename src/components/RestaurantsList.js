import React from 'react';
import 'antd/dist/antd.css';
import Restaurant from './Restaurant';
import { getAverageRestaurantRating } from '../utils/index';
import propTypes from 'prop-types';

export default function RestaurantsList({ restaurants, rating }) {
    return restaurants
        .filter(restaurant => getAverageRestaurantRating(restaurant) >= rating)
        .map(restaurant => <Restaurant restaurant={restaurant} key={restaurant.id}></Restaurant>);
}

RestaurantsList.propTypes = {
    restaurants: propTypes.array.isRequired,
    rating: propTypes.number,
};
