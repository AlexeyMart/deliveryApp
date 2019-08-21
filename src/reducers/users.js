import { normalizedUsers } from '../fixtures';
import { toKeyValueStructure } from '../utils/index';
import { ADD_REVIEW } from '../constants/index';
import produce from 'immer';

const defaultUsers = toKeyValueStructure(normalizedUsers);

export default produce((state, action) => {
    const { type, id } = action;
    switch (type) {
        case ADD_REVIEW:
            state[id] = {
                id,
                name: 'User',
            };
        // no default
    }
}, defaultUsers);

// export default (users = defaultUsers, action) => {
//     const { type, id } = action;
//     switch (type) {
//         case ADD_REVIEW: {
//             return {
//                 ...users,
//                 [id]: {
//                     id,
//                     name: 'User',
//                 },
//             };
//         }

//         default:
//             return users;
//     }
// };
