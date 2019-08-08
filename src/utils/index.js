function deepCloneArray(array) {
    return array.map(item => item.slice());
}

function getAverageRestaurantRating(restaurant) {
    return Math.round(
        restaurant.reviews.map(item => item.rating).reduce((sum, item) => sum + item, 0) /
            restaurant.reviews.length,
    );
}

export { deepCloneArray, getAverageRestaurantRating };
