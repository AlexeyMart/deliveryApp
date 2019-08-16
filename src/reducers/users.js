import { normalizedUsers } from '../fixtures';
import { toKeyValueStructure } from '../utils/index';

const defaultUsers = toKeyValueStructure(normalizedUsers);

export default (users = defaultUsers, action) => {
    switch (action.type) {
        default:
            return users;
    }
};
