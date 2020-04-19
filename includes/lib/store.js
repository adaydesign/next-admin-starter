import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const exampleInitialState = {
  loginSuccess: false,
  id:0,
  username: '',
  fullName: '',
  gender: 0,
  roleId: 0,
  courtCode: '',
  courtName: '',
  token:''
}

export const actionTypes = {
  SAVE: 'SAVE',
  DESTROY: 'DESTROY',
}

// REDUCERS
export const reducer = (state = exampleInitialState, action) => {
  // console.log('action type : '+action.type)
  switch (action.type) {
    case actionTypes.SAVE:
      return {
        loginSuccess: true,
        id: action.data.id,
        username: action.data.username,
        fullName: action.data.full_name,
        gender: action.data.gender,
        roleId: action.data.role_id,
        courtCode: action.data.court_code,
        courtName: action.data.office.court_name,
        token: action.token
      };
    case actionTypes.DESTROY:
      return exampleInitialState;
    default:
      return state
  }
}

export const saveLoginUser = (userData, token)=>{
    return {type: actionTypes.SAVE, data: userData, token: token}
}

export const clearUserData = ()=>{
    return {type: actionTypes.DESTROY}
}

export function initializeStore(initialState = exampleInitialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
