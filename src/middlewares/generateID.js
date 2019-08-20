import uuid from 'uuid/v4';

export default store => next => action => {
    if (!action.generateID) {
        next(action);
    }

    next({ ...action, id: uuid() });
};
