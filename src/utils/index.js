function deepCloneArray(array) {
    return array.map(item => item.slice());
}

function getAverageRestaurantRating(restaurant) {
    return Math.round(
        restaurant.reviews
            .map(item => item.rating)
            .reduce((sum, item, index, arr) => sum + item / arr.length, 0),
    );
}

function getDataforCart(store) {
    let [totalAmount, totalPrice] = [0, 0];
    for (let key in store) {
        totalAmount += store[key].amount;
        totalPrice += store[key].amount * store[key].price;
    }
    return [totalAmount, totalPrice];
}

function getDataForOrderForm(store) {
    let objectToLog = {};
    let totalPrice = 0;
    for (let key in store) {
        objectToLog[store[key].name] = {
            amount: store[key].amount,
            price: store[key].price,
            DishesPrice: store[key].amount * store[key].price,
        };
    }
    for (let key in objectToLog) {
        objectToLog.totalPrice = totalPrice += objectToLog[key].DishesPrice;
    }
    return objectToLog;
}

export { deepCloneArray, getAverageRestaurantRating, getDataforCart, getDataForOrderForm };
