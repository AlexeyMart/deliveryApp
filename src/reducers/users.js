import { toKeyValueStructure } from '../utils/index';
import { ADD_REVIEW, LOAD_ALL_USERS, SUCCESS, ERROR } from '../constants/index';
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

        case LOAD_ALL_USERS + ERROR:
            state.error = err;
            return;

        case LOAD_ALL_USERS + SUCCESS:
            return toKeyValueStructure(response);

        // no default
    }
}, {});
