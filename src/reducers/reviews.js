import { normalizedReviews } from '../fixtures';
import { toKeyValueStructure } from '../utils/index';
import { ADD_REVIEW } from '../constants/index';

const defaultReviews = toKeyValueStructure(normalizedReviews);

export default (reviews = defaultReviews, action) => {
    const { type, payload, generateID, id } = action;
    switch (type) {
        case ADD_REVIEW: {
            console.log(type, payload.text, payload.rating, payload.restaurantID, generateID, id);
            return {
                ...reviews,
                [id]: {
                    id,
                    userId: id,
                    text: payload.text,
                    rating: payload.rating,
                },
            };
        }
        default:
            return reviews;
    }
};
