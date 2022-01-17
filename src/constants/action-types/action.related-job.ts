//get panels
export const GET_RELATED_JOB_REQUEST = 'RelatedJobActionTypes/GET_RELATED_JOB_REQUEST';
export interface GetRelatedJobRequestAction {
  type: typeof GET_RELATED_JOB_REQUEST;
}

export const GET_RELATED_JOB_SUCCESS = 'RelatedJobActionTypes/GET_RELATED_JOB_SUCCESS';
export interface GetRelatedJobSuccessAction {
  type: typeof GET_RELATED_JOB_SUCCESS;
  jobs: any
}

export const GET_RELATED_JOB = 'RelatedJobActionTypes/GET_RELATED_JOB';
export interface GetRelatedJobAction {
  type: typeof GET_RELATED_JOB;
  hashtags: object
}

export type RelatedJobAction = GetRelatedJobRequestAction | GetRelatedJobSuccessAction | GetRelatedJobAction;
