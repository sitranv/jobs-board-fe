import * as actions from '../../../constants/action-types/user/action.change-password';

export function changePassword(request: any): actions.UserChangePasswordAction {
  return {
    type: actions.USER_CHANGE_PASSWORD,
    request
  }
}

export function changePassworddFailed(): actions.UserChangePasswordFailedAction {
  return {
    type: actions.USER_CHANGE_PASSWORD_FAILED,
  }
}


export function changePassworddSuccess(response: object): actions.UserChangePasswordSuccessAction {
  return {
    type: actions.USER_CHANGE_PASSWORD_SUCCESS,
    response
  }
}
