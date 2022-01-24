import * as actions from '../../../constants/action-types/user/action.applied-job';

export function getAppliedJob(): actions.UserGetAppliedJobAction {
  return {
    type: actions.USER_GET_APPLIED_JOB,

  }
}

export function getAppliedJobRequest(): actions.UserGetAppliedJobRequestAction {
  return {
    type: actions.USER_GET_APPLIED_JOB_REQUEST,
  }
}


export function getAppliedJobSuccess(response: object): actions.UserGetAppliedJobSuccessAction {
  return {
    type: actions.USER_GET_APPLIED_JOB_SUCCESS,
    response
  }
}

