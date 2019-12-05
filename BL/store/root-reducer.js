import {
  INIT_ASYNC_REDUX_INFO,
  GET_SYNC_REDUX_PROP_TYPE,
  GET_ASYNC_REDUX_SAGA_PROP_TYPE_SUCCESS,
} from '../test/constants'

const initialState = {}

const reducer = {
  [INIT_ASYNC_REDUX_INFO]: (state) => ({
    ...state,
    asyncLoading: true
  }),
  [GET_SYNC_REDUX_PROP_TYPE]: (state, action) => ({
    ...state,
    syncReduxProp: action.data
  }),
  [GET_ASYNC_REDUX_SAGA_PROP_TYPE_SUCCESS]: (state, action) => ({
    ...state,
    asyncLoading: false,
    asyncReduxSagaProp: action.data
  })
}

function rootReducer(state = initialState, action) {
  // switch (action.type) {
  //   case INIT_ASYNC_REDUX_INFO:
  //     return {...state, asyncLoading: true}
  //   case GET_SYNC_REDUX_PROP_TYPE:
  //     return {...state, syncReduxProp: action.data}
  //   case GET_ASYNC_REDUX_SAGA_PROP_TYPE_SUCCESS:
  //     return {...state, asyncReduxSagaProp: action.data, asyncLoading: false}
  //   default:
  //     return state
  // }

  if(!reducer[action.type]) return state
  return reducer[action.type](state, action)
}

export default rootReducer
