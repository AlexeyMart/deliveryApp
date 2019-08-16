import { combineReducers } from 'redux';
import rating from './rating';
import order from './order';
import restaurants from './restaurants';
import dishes from './dishes';


export default combineReducers({
    rating,
    order,
    restaurants,
    dishes,
});
