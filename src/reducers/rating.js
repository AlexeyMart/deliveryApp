import { CHANGE_RATING } from '../constants/index';
import produce from 'immer';

export default produce((state, action) => {
    const { type, payload } = action;
    switch (type) {
        case CHANGE_RATING:
            return payload.value;

        // no default
    }
}, 0);
