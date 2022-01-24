export const USER_GET_APPLIED_JOB_REQUEST = 'GetAppliedJobActionTypes/USER_GET_APPLIED_JOB_REQUEST';
export interface UserGetAppliedJobRequestAction {
  type: typeof USER_GET_APPLIED_JOB_REQUEST;
}

export const USER_GET_APPLIED_JOB_SUCCESS = 'GetAppliedJobActionTypes/USER_GET_APPLIED_JOB_SUCCESS';
export interface UserGetAppliedJobSuccessAction {
  type: typeof USER_GET_APPLIED_JOB_SUCCESS;
  response: any
}

export const USER_GET_APPLIED_JOB = 'GetAppliedJobActionTypes/USER_GET_APPLIED_JOB';
export interface UserGetAppliedJobAction {
  type: typeof USER_GET_APPLIED_JOB;
}

export const USER_GET_APPLIED_JOB_FAILED = 'GetAppliedJobActionTypes/USER_GET_APPLIED_JOB_FAILED'
export interface UserGetAppliedJobFailedAction {
  type: typeof USER_GET_APPLIED_JOB_FAILED;
}

export type GetAppliedJobAction =
UserGetAppliedJobRequestAction |
UserGetAppliedJobSuccessAction |
UserGetAppliedJobAction |
UserGetAppliedJobFailedAction;
