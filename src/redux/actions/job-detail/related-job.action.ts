import * as actions from '../../../constants/action-types/action.related-job'

export function getJobRelated(hashtags: object): actions.GetRelatedJobAction {
  return {
    type: actions.GET_RELATED_JOB,
    hashtags
  }
}

export function getJobRelatedRequest(): actions.GetRelatedJobRequestAction {
  return {
    type: actions.GET_RELATED_JOB_REQUEST,
  }
}


export function getJobRelatedSuccess(jobs: any): actions.GetRelatedJobSuccessAction {
  return {
    type: actions.GET_RELATED_JOB_SUCCESS,
    jobs
  }
}
