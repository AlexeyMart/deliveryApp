import { ADD_ITEM, REMOVE_ITEM } from '../constants/index';

export default (order = {}, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_ITEM:
            return {
                ...order,
                [payload.id]: {
                    amount: payload.amount + 1,
                    price: payload.price,
                    name: payload.name,
                },
            };

        case REMOVE_ITEM:
            if (payload.amount - 1 <= 0) {
                let nextState = { ...order };
                delete nextState[payload.id];
                return nextState;
            }

            return {
                ...order,
                [payload.id]: {
                    amount: Math.max(payload.amount - 1, 0),
                    price: payload.price,
                    name: payload.name,
                },
            };

        default:
            return order;
    }
};
