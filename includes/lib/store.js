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
    default:
      return state
  }
}

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
