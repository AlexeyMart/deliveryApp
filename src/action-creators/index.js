import { CHANGE_RATING } from '../const/index';

const setNewRating = value => ({
    type: CHANGE_RATING,
    payload: {
        value: value,
    },
});

export { setNewRating };
