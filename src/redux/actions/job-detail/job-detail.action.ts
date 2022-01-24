import * as actions from '../../../constants/action-types/action.job-detail';

export function getJobDetail(jobId: string): actions.GetJobDetailAction {
  return {
    type: actions.GET_JOB_DETAIL,
    jobId
  }
}

export function getJobDetailRequest(): actions.GetJobDetailRequestAction {
  return {
    type: actions.GET_JOB_DETAIL_REQUEST,
  }
}


export function getJobDetailSuccess(response: any): actions.GetJobDetailSuccessAction {
  return {
    type: actions.GET_JOB_DETAIL_SUCCESS,
    response
  }
}
