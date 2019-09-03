import { toKeyValueStructure } from '../utils/index';
import { ADD_REVIEW, LOAD_ALL_USERS, SUCCESS, ERROR, START } from '../constants/index';
import produce from 'immer';

export default produce((state, action) => {
    const { type, id, response, err } = action;
    switch (type) {
        case ADD_REVIEW:
            state[id] = {
                id,
                name: 'User',
            };
            return;

        case LOAD_ALL_USERS + START:
            state.loaded = false;
            return;

        case LOAD_ALL_USERS + ERROR:
            state.error = err;
            return;

        case LOAD_ALL_USERS + SUCCESS:
            for (let key in toKeyValueStructure(response)) {
                state[key] = toKeyValueStructure(response)[key];
            }
            state.loaded = true;
            return;

        // no default
    }
}, {});
