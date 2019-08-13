import { CHANGE_RATING } from '../const/index';

export default (rating = 0, { type, payload }) => {
    switch (type) {
        case CHANGE_RATING:
            console.log('rating was changed');
            return payload.value;
        default:
            return rating;
    }
};
