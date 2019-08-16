import { normalizedRestaurants } from '../fixtures';
import {toKeyValueStructure} from '../utils/index';

const defaultRestaurants = toKeyValueStructure(normalizedRestaurants)

export default (restaurants = defaultRestaurants, action) => {
    switch(action.type) {
        default:
            return restaurants
    }
};
