import { toKeyValueStructure } from '../utils/index';
import { ADD_REVIEW, LOAD_ALL_REVIEWS, ERROR, START, SUCCESS } from '../constants/index';
import produce from 'immer';

export default produce(
    (state, action) => {
        const { type, payload, id, response, err } = action;
        switch (type) {
            case ADD_REVIEW:
                state[id] = {
                    id,
                    userId: id,
                    text: payload.text,
                    rating: payload.rating,
                };
                return;

            case LOAD_ALL_REVIEWS + START:
                state.loading = true;
                return;

            case LOAD_ALL_REVIEWS + SUCCESS:
                let draft = toKeyValueStructure(response);
                draft.loading = false;
                return draft;

            case LOAD_ALL_REVIEWS + ERROR:
                state.loading = false;
                state.error = err;
                return;

            // no default
        }
    },
    { loading: false },
);
