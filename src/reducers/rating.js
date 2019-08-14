import { CHANGE_RATING } from '../constants/index';

export default (rating = 0, action) => {
    const { type, payload } = action;
    switch (type) {
        case CHANGE_RATING:
            return payload.value;
        default:
            return rating;
    }
};
