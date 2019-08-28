import { toKeyValueStructure } from '../utils/index';
import { ADD_REVIEW, LOAD_ALL_RESTAURANTS, SUCCESS } from '../constants/index';
import produce from 'immer';

export default produce((state, action) => {
    const { type, payload, id, response } = action;

    switch (type) {
        case ADD_REVIEW:
            state[payload.restaurantID].reviews.push(id);
            return;

        case LOAD_ALL_RESTAURANTS + SUCCESS:
            return toKeyValueStructure(response);
        //no default
    }
}, {});

// import { normalizedRestaurants } from '../fixtures';
// const defaultRestaurants = toKeyValueStructure(normalizedRestaurants);

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
