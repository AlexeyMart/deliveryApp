import { START, SUCCESS, ERROR } from '../constants/index';

export default store => next => async action => {
    const { callAPI, type, ...rest } = action;

    // console.log(`type = `, type);
    // console.log('rest = ', rest);

    if (!callAPI) {
        return next(action);
    }

    try {
        next({
            ...rest,
            type: type + START,
        });

        const rawRes = await fetch(callAPI);
        const response = await rawRes.json();

        next({
            ...rest,
            type: type + SUCCESS,
            response,
        });
    } catch (err) {
        next({ ...rest, type: type + ERROR, err });
    }
};
