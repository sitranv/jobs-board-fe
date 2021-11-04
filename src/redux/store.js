import {applyMiddleware, createStore} from 'redux'
import rootReducer from './reducers'
// import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from "./sagas/index";

import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;