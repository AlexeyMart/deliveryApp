import { createSelector } from 'reselect';

const ratingSelector = store => store.rating;

const restaurantSelector = (store, { id }) => store.restaurants[id];

const restaurantsSelector = store => store.restaurants;

const dishSelector = (store, { id }) => store.dishes[id];

const reviewSelector = (store, { id }) => store.reviews[id];

const reviewsSelector = store => store.reviews;

const userSelector = (store, { id }) => store.users[store.reviews[id].userId].name;

const restaurantRatingSelector = (store, { id }) => {
    return Math.round(
        store.restaurants[id].reviews
            .map(id => store.reviews[id].rating)
            .reduce((acc, item, index, arr) => acc + item / arr.length, 0),
    );
};

const filtratedRestaurantsSelector = createSelector(
    ratingSelector,
    restaurantsSelector,
    reviewsSelector,
    (rating, restaurants, reviews) => {
        console.log(`------FILTER IS WORKING------`);
        return Object.keys(restaurants).filter(
            item =>
                Math.round(
                    restaurants[item].reviews
                        .map(item => reviews[item].rating)
                        .reduce((acc, item, index, arr) => acc + item / arr.length, 0),
                ) >= rating,
        );
    },
);

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
    restaurantSelector,
    dishSelector,
    reviewSelector,
    userSelector,
    restaurantRatingSelector,
    filtratedRestaurantsSelector,
};
