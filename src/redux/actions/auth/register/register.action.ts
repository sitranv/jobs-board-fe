import * as actions from '../../../../constants/action-types/action.register';

export function register(userRequest: object): actions.UserRegisterAction {
  return {
    type: actions.USER_REGISTER,
    userRequest
  }
}

export function registerRequest(): actions.UserRegisterRequestAction {
  return {
    type: actions.USER_REGISTER_REQUEST,
  }
}


export function registerSuccess(data: object): actions.UserRegisterSuccessAction {
  return {
    type: actions.USER_REGISTER_SUCCESS,
    response: data
  }
}

export function registerFailed(data: object): actions.UserRegisterFailedAction {
  return {
    type: actions.USER_REGISTER_FAILED,
    response: data
  }
}

export function confirm(token: any): actions.UserConfirmEmailAction {
  return {
    type: actions.USER_CONFIRM_EMAIL,
    token
  }
}

export function confirmSuccess(response: any): actions.UserConfirmEmailActionSuccess {
  return {
    type: actions.USER_CONFIRM_EMAIL_SUCCESS,
    response
  }
}

export function confirmFailed(response: any): actions.UserConfirmEmailActionFailed {
  return {
    type: actions.USER_CONFIRM_EMAIL_FAILED,
    response
  }
}