import * as actions from '../../../../constants/action-types/action.login'

export function login(userRequest: object): actions.UserLoginAction {
  return {
    type: actions.USER_LOGIN,
    userRequest
  }
}

export function loginRequest(): actions.UserLoginRequestAction {
  return {
    type: actions.USER_LOGIN_REQUEST,
  }
}


export function loginSuccess(): actions.UserLoginSuccessAction {
  return {
    type: actions.USER_LOGIN_SUCCESS,
  }
}
