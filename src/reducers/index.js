import { combineReducers } from 'redux';
import rating from './rating';
import order from './order';
import restaurants from './restaurants';
import dishes from './dishes';
import reviews from './reviews';
import users from './users';

export default combineReducers({
    rating,
    order,
    restaurants,
    dishes,
    reviews,
    users,
});
