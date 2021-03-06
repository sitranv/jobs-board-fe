import * as actions from '../../../constants/action-types/action.job-grid'

export function getJobGrid(numOfJobs: number, search: string): actions.GetJobGridAction {
  return {
    type: actions.GET_JOBS_GRID,
    numOfJobs,
    search
  }
}

export function getJobGridRequest(): actions.GetJobGridRequestAction {
  return {
    type: actions.GET_JOBS_GRID_REQUEST,
  }
}

export function getJobGridSuccess(jobs: any): actions.GetJobGridSuccessAction {
  return {
    type: actions.GET_JOBS_GRID_SUCCESS,
    jobs
  }
}
