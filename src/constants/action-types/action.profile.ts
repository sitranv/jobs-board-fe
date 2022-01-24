//get profile
export const GET_PROFILE_REQUEST = 'profileActionTypes/GET_PROFILE_REQUEST';
export interface GetProfileRequestAction {
  type: typeof GET_PROFILE_REQUEST;
}

export const GET_PROFILE_SUCCESS = 'profileActionTypes/GET_PROFILE_SUCCESS';
export interface GetProfileSuccessAction {
  type: typeof GET_PROFILE_SUCCESS;
  response: any
}

export const GET_PROFILE = 'profileActionTypes/GET_PROFILE';
export interface GetProfileAction {
  type: typeof GET_PROFILE;
  token: string
}

export const GET_PROFILE_FAILED = 'profileActionTypes/GET_PROFILE_FAILED';
export interface GetProfileFailedAction {
  type: typeof GET_PROFILE_FAILED;
}

export const CLEAR_PROFILE = 'profileActionTypes/CLEAR_PROFILE'
export interface ClearProfileAction {
  type: typeof CLEAR_PROFILE
}


//update profile
export const UPDATE_PROFILE_SUCCESS = 'profileActionTypes/UPDATE_PROFILE_SUCCESS';
export interface UpdateProfileSuccessAction {
  type: typeof UPDATE_PROFILE_SUCCESS;
  response: any
}

export const UPDATE_PROFILE = 'profileActionTypes/UPDATE_PROFILE';
export interface UpdateProfileAction {
  type: typeof UPDATE_PROFILE;
  userRequest: object
}


export type ProfileAction =
  GetProfileAction |
  GetProfileSuccessAction |
  GetProfileRequestAction |
  GetProfileFailedAction|
  UpdateProfileSuccessAction|
  UpdateProfileAction|
  ClearProfileAction;
