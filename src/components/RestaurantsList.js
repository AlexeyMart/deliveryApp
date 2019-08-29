import React, { useEffect } from 'react';
import Restaurant from './Restaurant';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    filtratedRestaurantsSelector,
    loadingRestaurants,
    loadingReviews,
} from '../selectors/index';
import { loadAllRestaurants, loadAllReviews } from '../action-creators/index';
import Loader from './Loader';

function RestaurantsList({
    restaurants,
    loadAllRestaurants,
    loadAllReviews,
    isRestaurantsLoading,
    isReviewsLoading,
}) {
    useEffect(() => {
        loadAllReviews();
        loadAllRestaurants();
    }, []);

    if (isRestaurantsLoading || isReviewsLoading) {
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
    isRestaurantsLoading: loadingRestaurants(store),
    isReviewsLoading: loadingReviews(store),
});

const mapDispatchToProps = {
    loadAllRestaurants,
    loadAllReviews,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RestaurantsList);
