import { toKeyValueStructure } from '../utils/index';
import { ADD_REVIEW, LOAD_ALL_RESTAURANTS, SUCCESS, START, ERROR } from '../constants/index';
import produce from 'immer';

export default produce(
    (state, action) => {
        const { type, payload, id, response, err } = action;

        switch (type) {
            case ADD_REVIEW:
                state[payload.restaurantID].reviews.push(id);
                return;

            case LOAD_ALL_RESTAURANTS + START:
                state.loading = true;
                return;

            case LOAD_ALL_RESTAURANTS + ERROR:
                state.error = err;
                state.loading = false;
                return;

            case LOAD_ALL_RESTAURANTS + SUCCESS:
                let draft = toKeyValueStructure(response);
                draft.loading = false;
                return draft;

            // for (let key in toKeyValueStructure(response)){
            //     state[key] = toKeyValueStructure(response)[key]
            // };
            // state.loading = false;
            // state.isLoaded = true;
            // return;

            //no default
        }
    },
    { loading: false },
);
