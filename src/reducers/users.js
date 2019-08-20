import { normalizedUsers } from '../fixtures';
import { toKeyValueStructure } from '../utils/index';
import { ADD_REVIEW } from '../constants/index';

const defaultUsers = toKeyValueStructure(normalizedUsers);

export default (users = defaultUsers, action) => {
    const { type, id } = action;
    switch (type) {
        case ADD_REVIEW: {
            return {
                ...users,
                [id]: {
                    id,
                    name: 'User',
                },
            };
        }

        default:
            return users;
    }
};
