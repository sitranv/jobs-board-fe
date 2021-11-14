//get panels
export const USER_LOGIN_REQUEST = 'LoginActionTypes/USER_LOGIN_REQUEST';
export interface UserLoginRequestAction {
  type: typeof USER_LOGIN_REQUEST;
}

export const USER_LOGIN_SUCCESS = 'LoginActionTypes/USER_LOGIN_SUCCESS';
export interface UserLoginSuccessAction {
  type: typeof USER_LOGIN_SUCCESS;
  response: any
}

export const USER_LOGIN = 'LoginActionTypes/USER_LOGIN';
export interface UserLoginAction {
  type: typeof USER_LOGIN;
  userRequest: object
}

export const USER_LOGIN_FAILED = 'LoginActionTypes/USER_LOGIN_FAILED'
export interface UserLoginFailedAction {
  type: typeof USER_LOGIN_FAILED;
}


export type LoginAction = UserLoginRequestAction | UserLoginSuccessAction | UserLoginAction | UserLoginFailedAction;
