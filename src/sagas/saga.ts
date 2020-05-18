import * as action from '../action/action';
import { put, call, takeEvery } from 'redux-saga/effects';


export default function* watchFetchDog() {
    yield takeEvery('FETCHED_DOG', fetchDogAsync);
  }
  
  function* fetchDogAsync() {
    try {
      yield put(action.requestDog());
      const data = yield call(() => {
        return fetch('https://dog.ceo/api/breeds/image/random')
                .then(res => res.json())
        }
      );
      yield put(action.requestDogSuccess(data));
    } catch (error) {
      yield put(action.requestDogError());
    }
  }
  