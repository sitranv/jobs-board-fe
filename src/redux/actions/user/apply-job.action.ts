import * as actions from '../../../constants/action-types/user/action.apply-job';

export function applyJob(userCv: any, jobId: string): actions.UserApplyJobAction {
  return {
    type: actions.USER_APPLY_JOB,
    userCv,
    jobId
  }
}

export function applyJobRequest(): actions.UserApplyJobRequestAction {
  return {
    type: actions.USER_APPLY_JOB_REQUEST,
  }
}


export function applyJobSuccess(response: object): actions.UserApplyJobSuccessAction {
  return {
    type: actions.USER_APPLY_JOB_SUCCESS,
    response
  }
}

