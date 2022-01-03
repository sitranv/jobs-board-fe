//get panels
export const GET_JOBS_GRID_REQUEST = 'JobGridActionTypes/GET_JOBS_GRID_REQUEST';
export interface GetJobGridRequestAction {
  type: typeof GET_JOBS_GRID_REQUEST;
}

export const GET_JOBS_GRID_SUCCESS = 'JobGridActionTypes/GET_JOBS_GRID_SUCCESS';
export interface GetJobGridSuccessAction {
  type: typeof GET_JOBS_GRID_SUCCESS;
  jobs: any
}

export const GET_JOBS_GRID = 'JobGridActionTypes/GET_JOBS_GRID';
export interface GetJobGridAction {
  type: typeof GET_JOBS_GRID;
  numOfJobs: number,
  search: string
}

export type JobGridAction = GetJobGridRequestAction | GetJobGridSuccessAction | GetJobGridAction;
