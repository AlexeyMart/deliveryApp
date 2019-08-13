import { createStore } from 'redux';
import reducer from '../reducers/index';

const store = createStore(reducer);

window.store = store;

export default store;
