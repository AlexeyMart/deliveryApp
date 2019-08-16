import { normalizedReviews } from '../fixtures';
import { toKeyValueStructure } from '../utils/index';

const defaultReviews = toKeyValueStructure(normalizedReviews);

export default (reviews = defaultReviews, action) => {
    switch (action.type) {
        default:
            return reviews;
    }
};
