export const USER_REGISTER_REQUEST = 'RegisterActionTypes/USER_REGISTER_REQUEST';
export interface UserRegisterRequestAction {
  type: typeof USER_REGISTER_REQUEST;
}

export const USER_REGISTER_SUCCESS = 'RegisterActionTypes/USER_REGISTER_SUCCESS';
export interface UserRegisterSuccessAction {
  type: typeof USER_REGISTER_SUCCESS;
  response: any
}

export const USER_REGISTER = 'RegisterActionTypes/USER_REGISTER';
export interface UserRegisterAction {
  type: typeof USER_REGISTER;
  userRequest: object
}

export const USER_REGISTER_FAILED = 'RegisterActionTypes/USER_REGISTER_FAILED'
export interface UserRegisterFailedAction {
  type: typeof USER_REGISTER_FAILED;
  response: any
}

export type RegisterAction =
  UserRegisterRequestAction |
  UserRegisterSuccessAction |
  UserRegisterAction |
  UserRegisterFailedAction;