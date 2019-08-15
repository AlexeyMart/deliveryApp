import React from 'react';
import 'antd/dist/antd.css';
import Restaurant from './Restaurant';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { filtratedRestaurantsSelector } from '../selectors/index';

function RestaurantsList({ restaurants }) {
    return restaurants.map(restaurant => (
        <Restaurant restaurant={restaurant} key={restaurant.id}></Restaurant>
    ));
}

RestaurantsList.defaultProps = {
    rating: 0,
};

RestaurantsList.propTypes = {
    restaurants: propTypes.array.isRequired,
    rating: propTypes.number,
};

const mapStateToProps = store => ({
    restaurants: filtratedRestaurantsSelector(store),
});

export default connect(mapStateToProps)(RestaurantsList);
