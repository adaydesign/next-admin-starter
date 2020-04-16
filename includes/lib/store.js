import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const exampleInitialState = {
  loginSuccess: false,
  id:0,
  username: '',
  fullName: '',
  roleId: 0,
  courtCode: '',
  courtName: '',
  token:''
}

export const actionTypes = {
  SAVE: 'SAVE',
  CLEAR: 'CLEAR',
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
    console.log(action.type)
    console.log(action.data)
  switch (action.type) {
    case actionTypes.SAVE:
      return {
        loginSuccess: true,
        id: action.data.id,
        username: action.data.username,
        fullName: action.data.full_name,
        roleId: action.data.role_id,
        courtCode: action.data.court_code,
        courtName: action.data.office.court_name,
        token: action.token
      };
    case actionTypes.CLEAR:
      return exampleInitialState;
    // case actionTypes.DECREMENT:
    //   return Object.assign({}, state, {
    //     count: state.count - 1,
    //   })
    // case actionTypes.RESET:
    //   return Object.assign({}, state, {
    //     count: exampleInitialState.count,
    //   })
    default:
      return state
  }
}

// ACTIONS
// export const serverRenderClock = isServer => dispatch => {
//   return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() })
// }

// export const startClock = dispatch => {
//   return setInterval(() => {
//     dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() })
//   }, 1000)
// }

// export const incrementCount = () => {
//   return { type: actionTypes.INCREMENT }
// }

// export const decrementCount = () => {
//   return { type: actionTypes.DECREMENT }
// }

// export const resetCount = () => {
//   return { type: actionTypes.RESET }
// }

export const saveLoginUser = (userData, token)=>{
    return {type: actionTypes.SAVE, data: userData, token: token}
}

export const clearUserData = ()=>{
    return {type: actionTypes.CLEAR}
}

export function initializeStore(initialState = exampleInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
