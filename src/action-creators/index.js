import { push } from 'connected-react-router';

import {
    CHANGE_RATING,
    ADD_ITEM,
    REMOVE_ITEM,
    ADD_REVIEW,
    LOAD_ALL_RESTAURANTS,
    START,
    SUCCESS,
    ERROR,
    LOAD_ALL_REVIEWS,
    LOAD_RESTAURANT_MENU,
    LOAD_ALL_USERS,
    CHANGE_LOCATION,
} from '../constants/index';

const setNewRating = value => ({
    type: CHANGE_RATING,
    payload: {
        value: value,
    },
});

const addItem = (id, amount, price, name, restaurant) => ({
    type: ADD_ITEM,
    payload: { id, amount, price, name, restaurant },
});

const removeItem = (id, amount, price, name, restaurant) => ({
    type: REMOVE_ITEM,
    payload: { id, amount, price, name, restaurant },
});

const addReview = (text, rating, restaurantID) => ({
    type: ADD_REVIEW,
    payload: { text, rating, restaurantID },
    generateID: true,
});

// const loadAllRestaurants = () => ({
//     type: LOAD_ALL_RESTAURANTS,
//     callAPI: '/api/restaurants',
// });

const loadAllRestaurants = () => async dispatch => {
    try {
        dispatch({ type: LOAD_ALL_RESTAURANTS + START });

        const rawRes = await fetch('/api/restaurants');
        const response = await rawRes.json();

        dispatch({
            type: LOAD_ALL_RESTAURANTS + SUCCESS,
            response,
        });
    } catch (err) {
        dispatch({ type: LOAD_ALL_RESTAURANTS + ERROR, err });
    }
};

const loadAllReviews = () => async dispatch => {
    try {
        dispatch({ type: LOAD_ALL_REVIEWS + START });

        const rawRes = await fetch('/api/reviews');
        const response = await rawRes.json();

        dispatch({ type: LOAD_ALL_REVIEWS + SUCCESS, response });
    } catch (err) {
        dispatch({ type: LOAD_ALL_REVIEWS + ERROR, err });
    }
};

const loadRestaurantMenu = restaurantID => async (dispatch, getState) => {
    try {
        dispatch({
            type: LOAD_RESTAURANT_MENU + START,
            payload: {
                restaurantID,
            },
        });

        const rawRes = await fetch(`api/dishes?id=${restaurantID}`);
        const response = await rawRes.json();

        dispatch({
            type: LOAD_RESTAURANT_MENU + SUCCESS,
            response,
            payload: {
                restaurantID,
            },
        });
    } catch (err) {
        dispatch({
            type: LOAD_RESTAURANT_MENU + ERROR,
            err,
        });
    }
};

const loadAllUsers = () => async dispatch => {
    try {
        dispatch({
            type: LOAD_ALL_USERS + START,
        });

        const rawRes = await fetch('/api/users');
        const response = await rawRes.json();

        dispatch({
            type: LOAD_ALL_USERS + SUCCESS,
            response,
        });
    } catch (err) {
        dispatch({
            type: LOAD_ALL_USERS + ERROR,
            err,
        });
    }
};

const changeURL = path => async (dispatch, getState) => {
    try {
        dispatch(push(path));
    } catch (err) {
        dispatch({
            type: CHANGE_LOCATION + ERROR,
            error: err,
        });
    }
};

export {
    setNewRating,
    addItem,
    removeItem,
    addReview,
    loadAllRestaurants,
    loadAllReviews,
    loadRestaurantMenu,
    loadAllUsers,
    changeURL,
};
