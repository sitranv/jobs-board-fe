export const USER_APPLY_JOB_REQUEST = 'ApplyJobActionTypes/USER_APPLY_JOB_REQUEST';
export interface UserApplyJobRequestAction {
  type: typeof USER_APPLY_JOB_REQUEST;
}

export const USER_APPLY_JOB_SUCCESS = 'ApplyJobActionTypes/USER_APPLY_JOB_SUCCESS';
export interface UserApplyJobSuccessAction {
  type: typeof USER_APPLY_JOB_SUCCESS;
  response: any
}

export const USER_APPLY_JOB = 'ApplyJobActionTypes/USER_APPLY_JOB';
export interface UserApplyJobAction {
  type: typeof USER_APPLY_JOB;
  userCv: any,
  jobId: string
}

export const USER_APPLY_JOB_FAILED = 'ApplyJobActionTypes/EMPLOYER_CREATE_COMPANY_FAILED'
export interface UserApplyJobFailedAction {
  type: typeof USER_APPLY_JOB_FAILED;
}

export type ApplyJobAction =
UserApplyJobRequestAction |
UserApplyJobSuccessAction |
UserApplyJobAction |
UserApplyJobFailedAction;
