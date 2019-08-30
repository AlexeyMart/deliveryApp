import produce from 'immer';
import { toKeyValueStructure } from '../utils/index';
import { START, SUCCESS, ERROR, LOAD_RESTAURANT_MENU } from '../constants/index';

export default produce(
    (state, action) => {
        const { type, payload, response, err } = action;
        switch (type) {
            case LOAD_RESTAURANT_MENU + START:
                state.loading[payload.restaurantID] = true;
                state.loaded[payload.restaurantID] = false;
                return;

            case LOAD_RESTAURANT_MENU + SUCCESS:
                for (let key in toKeyValueStructure(response)) {
                    state[key] = toKeyValueStructure(response)[key];
                }
                state.loading[payload.restaurantID] = false;
                state.loaded[payload.restaurantID] = true;
                return;

            case LOAD_RESTAURANT_MENU + ERROR:
                state.error = err;
                return;

            // no default
        }
    },
    { loading: {}, loaded: {} },
);
