import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/index';
import logger from '../middlewares/logger';
import generateID from '../middlewares/generateID';
import { composeWithDevTools } from 'redux-devtools-extension';
import api from '../middlewares/api';
import thunk from 'redux-thunk';

const enhancer = applyMiddleware(thunk, generateID, api, logger);

const store = createStore(reducer, composeWithDevTools(enhancer));

window.store = store;

export default store;
