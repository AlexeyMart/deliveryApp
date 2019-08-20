import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/index';
import logger from '../middlewares/logger';
import generateID from '../middlewares/generateID';

const enhancer = applyMiddleware(logger, generateID);

const store = createStore(reducer, enhancer);

window.store = store;

export default store;
