import { getAverageRestaurantRating } from '../utils/index';

const ratingSelector = store => store.rating;

const filtratedRestaurantsSelector = store => {
    return store.restaurants.filter(
        restaurant => getAverageRestaurantRating(restaurant) >= store.rating,
    );
};

const orderCartSelector = store => {
    let [totalAmount, totalPrice] = [0, 0];
    for (let key in store.order) {
        totalAmount += store.order[key].amount;
        totalPrice += store.order[key].amount * store.order[key].price;
    }
    return [totalAmount, totalPrice];
};

const orderFormSelector = store => {
    let objectToLog = {};
    let totalPrice = 0;
    for (let key in store.order) {
        objectToLog[store.order[key].name] = {
            amount: store.order[key].amount,
            price: store.order[key].price,
            DishPrice: store.order[key].amount * store.order[key].price,
        };
    }

    for (let key in objectToLog) {
        objectToLog.totalPrice = totalPrice += objectToLog[key].DishPrice;
    }

    return objectToLog;
};

export { ratingSelector, filtratedRestaurantsSelector, orderCartSelector, orderFormSelector };
