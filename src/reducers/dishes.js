import { normalizedDishes } from '../fixtures';
import { toKeyValueStructure } from '../utils/index';

const defaultDishes = toKeyValueStructure(normalizedDishes);

export default (dishes = defaultDishes, action) => {
    switch (action.type) {
        default:
            return dishes;
    }
};
