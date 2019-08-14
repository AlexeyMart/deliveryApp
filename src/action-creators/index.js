import { CHANGE_RATING, ADD_ITEM, REMOVE_ITEM } from '../constants/index';

const setNewRating = value => ({
    type: CHANGE_RATING,
    payload: {
        value: value,
    },
});

const addItem = (id, amount, price, name) => ({
    type: ADD_ITEM,
    payload: { id, amount, price, name },
});

const removeItem = (id, amount, price, name) => ({
    type: REMOVE_ITEM,
    payload: { id, amount, price, name },
});

export { setNewRating, addItem, removeItem };
