//get panels
export const GET_PROFILE_REQUEST = 'profileActionTypes/GET_PROFILE_REQUEST';
export interface GetProfileRequestAction {
  type: typeof GET_PROFILE_REQUEST;
}

export const GET_PROFILE_SUCCESS = 'profileActionTypes/GET_PROFILE_SUCCESS';
export interface GetProfileSuccessAction {
  type: typeof GET_PROFILE_SUCCESS;
  user: any
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


export type PanelsAction = GetProfileAction | GetProfileSuccessAction | GetProfileRequestAction | GetProfileFailedAction;
