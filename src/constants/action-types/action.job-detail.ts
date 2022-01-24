//get panels
export const GET_JOB_DETAIL_REQUEST = 'JobDetailActionTypes/GET_JOB_DETAIL_REQUEST';
export interface GetJobDetailRequestAction {
  type: typeof GET_JOB_DETAIL_REQUEST;
}

export const GET_JOB_DETAIL_SUCCESS = 'JobDetailActionTypes/GET_JOB_DETAIL_SUCCESS';
export interface GetJobDetailSuccessAction {
  type: typeof GET_JOB_DETAIL_SUCCESS;
  response: any
}

export const GET_JOB_DETAIL = 'JobDetailActionTypes/GET_JOB_DETAIL';
export interface GetJobDetailAction {
  type: typeof GET_JOB_DETAIL;
  jobId: string
}

export type JobDetailAction = GetJobDetailRequestAction | GetJobDetailSuccessAction | GetJobDetailAction;
