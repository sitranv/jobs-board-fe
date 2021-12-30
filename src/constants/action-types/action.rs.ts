//get panels
export const GET_RS_REQUEST = 'rsActionTypes/GET_RS_REQUEST';
export interface GetRSRequestAction {
  type: typeof GET_RS_REQUEST;
}

export const GET_RS_SUCCESS = 'rsActionTypes/GET_RS_SUCCESS';
export interface GetRSSuccessAction {
  type: typeof GET_RS_SUCCESS;
  jobs: any
}

export const GET_RS = 'rsActionTypes/GET_RS';
export interface GetRSAction {
  type: typeof GET_RS;
  userCv: any
}

export type RSAction = GetRSRequestAction | GetRSSuccessAction | GetRSAction;
