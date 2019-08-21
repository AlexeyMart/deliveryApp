import { normalizedRestaurants } from '../fixtures';
import { toKeyValueStructure } from '../utils/index';
import { ADD_REVIEW } from '../constants/index';
import produce from 'immer';

const defaultRestaurants = toKeyValueStructure(normalizedRestaurants);

export default produce((state, action) => {
    const { type, payload, id } = action;
    switch (type) {
        case ADD_REVIEW:
            state[payload.restaurantID].reviews.push(id);
        //no default
    }
}, defaultRestaurants);

// export default (restaurants = defaultRestaurants, action) => {
//     const { type, payload, id } = action;
//     switch (type) {
//         case ADD_REVIEW:
//             let newState = { ...restaurants };
//             newState[payload.restaurantID].reviews = newState[payload.restaurantID].reviews.concat(
//                 id,
//             );
//             return newState;

//         default:
//             return restaurants;
//     }
// };
