//get panels
export const GET_RECENT_JOB_REQUEST = 'RecentJobActionTypes/GET_RECENT_JOB_REQUEST';
export interface GetRecentJobRequestAction {
  type: typeof GET_RECENT_JOB_REQUEST;
}

export const GET_RECENT_JOB_SUCCESS = 'RecentJobActionTypes/GET_RECENT_JOB_SUCCESS';
export interface GetRecentJobSuccessAction {
  type: typeof GET_RECENT_JOB_SUCCESS;
  jobs: any
}

export const GET_RECENT_JOB = 'RecentJobActionTypes/GET_RECENT_JOB';
export interface GetRecentJobAction {
  type: typeof GET_RECENT_JOB;
}

export type RecentJobAction = GetRecentJobRequestAction | GetRecentJobSuccessAction | GetRecentJobAction;
