import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './root-reducer'
import rootSaga from './root-saga'

function configureStore(preloadedState, {isServer, req = null}) {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware),
    ),
  )

  if (req || !isServer) {
    store.sagaTask = sagaMiddleware.run(rootSaga)
  }

  return store
}

export default configureStore
