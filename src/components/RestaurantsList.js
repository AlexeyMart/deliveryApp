import React, { useEffect } from 'react';
import Restaurant from './Restaurant';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    filtratedRestaurantsSelector,
    loadingRestaurants,
    loadedRestaurants,
} from '../selectors/index';
import { loadAllRestaurants, loadAllReviews } from '../action-creators/index';
import Loader from './Loader';

function RestaurantsList({ restaurants, loadAllRestaurants, loadAllReviews, loading, loaded }) {
    useEffect(() => {
        if (!loaded) {
            loadAllReviews();
            loadAllRestaurants();
        }
    }, []);

    if (loading) {
        return <Loader></Loader>;
    }

    return restaurants.map(restaurant => (
        <Restaurant id={restaurant} key={restaurant}></Restaurant>
    ));
}

RestaurantsList.propTypes = {
    restaurants: propTypes.array.isRequired,
};

const mapStateToProps = store => ({
    restaurants: filtratedRestaurantsSelector(store),
    loading: loadingRestaurants(store),
    loaded: loadedRestaurants(store),
});

const mapDispatchToProps = {
    loadAllRestaurants,
    loadAllReviews,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RestaurantsList);
