import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import rootReducer from './rootReducer';

const middlewares = [logger, thunk, promise];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
