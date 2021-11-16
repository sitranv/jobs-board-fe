import * as actions from '../../../constants/action-types/action.recent-job'

export function getJobRecent(): actions.GetRecentJobAction {
  return {
    type: actions.GET_RECENT_JOB,
  }
}

export function getJobRecentRequest(): actions.GetRecentJobRequestAction {
  return {
    type: actions.GET_RECENT_JOB_REQUEST,
  }
}


export function getJobRecentSuccess(jobs: any): actions.GetRecentJobSuccessAction {
  return {
    type: actions.GET_RECENT_JOB_SUCCESS,
    jobs
  }
}
