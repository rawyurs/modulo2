// store.js
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import imagesReducer from './reducers/reducer';

const store = createStore(imagesReducer, applyMiddleware(thunk));

export default store;
