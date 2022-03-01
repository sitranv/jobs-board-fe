export const USER_CHANGE_PASSWORD_REQUEST = 'ChangePasswordActionTypes/USER_CHANGE_PASSWORD_REQUEST';
export interface UserChangePasswordRequestAction {
  type: typeof USER_CHANGE_PASSWORD_REQUEST;
}

export const USER_CHANGE_PASSWORD_SUCCESS = 'ChangePasswordActionTypes/USER_CHANGE_PASSWORD_SUCCESS';
export interface UserChangePasswordSuccessAction {
  type: typeof USER_CHANGE_PASSWORD_SUCCESS;
  response: any
}

export const USER_CHANGE_PASSWORD = 'ChangePasswordActionTypes/USER_CHANGE_PASSWORD';
export interface UserChangePasswordAction {
  type: typeof USER_CHANGE_PASSWORD;
  request: any
}

export const USER_CHANGE_PASSWORD_FAILED = 'ChangePasswordActionTypes/USER_CHANGE_PASSWORD_FAILED'
export interface UserChangePasswordFailedAction {
  type: typeof USER_CHANGE_PASSWORD_FAILED;
}

export type ChangePasswordAction =
UserChangePasswordRequestAction |
UserChangePasswordSuccessAction |
UserChangePasswordAction |
UserChangePasswordFailedAction;
