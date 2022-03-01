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


export function loginSuccess(data: object): actions.UserLoginSuccessAction {
  return {
    type: actions.USER_LOGIN_SUCCESS,
    response: data
  }
}

export function loginFailed(): actions.UserLoginFailedAction {
  return {
    type: actions.USER_LOGIN_FAILED,
  }
}


export function logout(): actions.UserLogoutAction {
  return {
    type: actions.USER_LOGOUT
  }
}
