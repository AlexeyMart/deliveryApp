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

export { deepCloneArray, getAverageRestaurantRating };
