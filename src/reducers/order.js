import { ADD_ITEM, REMOVE_ITEM } from '../constants/index';
import produce from 'immer';

export default produce((state, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_ITEM:
            state[payload.id] = {
                amount: payload.amount + 1,
                price: payload.price,
                name: payload.name,
                restaurant: payload.restaurant,
            };
            return;
        case REMOVE_ITEM:
            payload.amount - 1 <= 0
                ? delete state[payload.id]
                : (state[payload.id] = {
                      amount: Math.max(payload.amount - 1, 0),
                      price: payload.price,
                      name: payload.name,
                      restaurant: payload.restaurant,
                  });
        // no default
    }
}, {});

// export default (order = {}, action) => {
//     const { type, payload } = action;

//     switch (type) {
//         case ADD_ITEM:
//             return {
//                 ...order,
//                 [payload.id]: {
//                     amount: payload.amount + 1,
//                     price: payload.price,
//                     name: payload.name,
//                 },
//             };

//         case REMOVE_ITEM:
//             if (payload.amount - 1 <= 0) {
//                 let nextState = { ...order };
//                 delete nextState[payload.id];
//                 return nextState;
//             }

//             return {
//                 ...order,
//                 [payload.id]: {
//                     amount: Math.max(payload.amount - 1, 0),
//                     price: payload.price,
//                     name: payload.name,
//                 },
//             };

//         default:
//             return order;
//     }
// };
