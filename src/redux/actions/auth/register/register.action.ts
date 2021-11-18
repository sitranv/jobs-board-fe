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
