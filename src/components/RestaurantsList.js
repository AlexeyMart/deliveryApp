import React from 'react';
import 'antd/dist/antd.css';
import Restaurant from './Restaurant';
import { getAverageRestaurantRating } from '../utils/index';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

function RestaurantsList({ restaurants, rating }) {
    return restaurants
        .filter(restaurant => getAverageRestaurantRating(restaurant) >= rating)
        .map(restaurant => <Restaurant restaurant={restaurant} key={restaurant.id}></Restaurant>);
}

RestaurantsList.defaultProps = {
    rating: 0,
};

RestaurantsList.propTypes = {
    restaurants: propTypes.array.isRequired,
    rating: propTypes.number,
};

const mapStateToProps = store => ({
    rating: store.rating,
});

export default connect(mapStateToProps)(RestaurantsList);
