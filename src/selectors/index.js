// import { getAverageRestaurantRating } from '../utils/index';
// import { createSelector } from 'reselect';

const ratingSelector = store => store.rating;

const restaurantsSelector = store => Object.keys(store.restaurants);

const restaurantSelector = (store, { id }) => store.restaurants[id];

const dishSelector = (store, { id }) => store.dishes[id];

const reviewSelector = (store, { id }) => store.reviews[id];

const userSelector = (store, { id }) => store.users[store.reviews[id].userId].name;

// const filtratedRestaurantsSelector = createSelector(
//     ratingSelector,
//     restaurantsSelector,
//     (rating, restaurants) => {
//         return restaurants.filter(restaurant => getAverageRestaurantRating(restaurant) >= rating);
//     },
// );

const orderCartSelector = ({ order }) => {
    let [totalAmount, totalPrice] = [0, 0];
    for (let key in order) {
        totalAmount += order[key].amount;
        totalPrice += order[key].amount * order[key].price;
    }
    return [totalAmount, totalPrice];
};

const orderFormSelector = ({ order }) => {
    let objectToLog = {};
    let totalPrice = 0;
    for (let key in order) {
        objectToLog[order[key].name] = {
            amount: order[key].amount,
            price: order[key].price,
            DishPrice: order[key].amount * order[key].price,
        };
    }

    for (let key in objectToLog) {
        objectToLog.totalPrice = totalPrice += objectToLog[key].DishPrice;
    }

    return objectToLog;
};

export {
    ratingSelector,
    orderCartSelector,
    orderFormSelector,
    restaurantsSelector,
    restaurantSelector,
    dishSelector,
    reviewSelector,
    userSelector,
};
