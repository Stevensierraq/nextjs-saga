import {delay, put, takeEvery} from 'redux-saga/effects'

import {
  INIT_ASYNC_REDUX_INFO,
  ASYNC_REDUX_SAGA_PROP_TEXT,
  GET_ASYNC_REDUX_SAGA_PROP_TYPE,
  GET_ASYNC_REDUX_SAGA_PROP_TYPE_SUCCESS,
} from '../test/constants'

const TEST = process.env.NODE_ENV === 'test'

function* getAsyncReduxSagaProp() {
  yield put({ type: INIT_ASYNC_REDUX_INFO })

  yield delay(TEST ? 100 : 2500)

  yield put({
    type: GET_ASYNC_REDUX_SAGA_PROP_TYPE_SUCCESS,
    data: ASYNC_REDUX_SAGA_PROP_TEXT,
  })
}

function* rootSaga() {
  yield takeEvery(GET_ASYNC_REDUX_SAGA_PROP_TYPE, getAsyncReduxSagaProp)
}

export default rootSaga
