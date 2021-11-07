import { object } from 'yup/lib/locale';
import * as actions from '../../../../constants/action-types/action.login';

interface LoginState {
}

const initialState : LoginState = {
  userRequest: object
}

export const loginReducer = (state: LoginState = initialState, action: actions.LoginAction) => {
  switch(action.type) {
    case actions.USER_LOGIN:
      return {
        ...state,
        userRequest: action.userRequest 
      }
    case actions.USER_LOGIN_REQUEST:
      return {
        ...state
      }
    case actions.USER_LOGIN_SUCCESS:
      return {
        ...state,
      }
    default:
      return state;
  }
} 