import { createStore, applyMiddleware } from 'redux';
import { reducer } from '../reducer/reducer';
import createSagaMiddleware from 'redux-saga';
import watchFetchDog from '../sagas/saga';

export const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(watchFetchDog);