import { combineReducers } from 'redux';
import rating from './rating';
import order from './order';

export default combineReducers({
    rating,
    order,
});
