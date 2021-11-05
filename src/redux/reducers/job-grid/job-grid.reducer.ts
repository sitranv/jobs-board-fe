import * as actions from '../../../constants/action-types/action.job-grid';

interface JobGridState {
  jobs: Array<any>
}

const initialState : JobGridState = {
  jobs: []
}

export const jobGridReducer = (state: JobGridState = initialState, action: actions.JobGridAction) => {
  switch(action.type) {
    case actions.GET_JOBS_GRID:
      return {
        ...state
      }
    case actions.GET_JOBS_GRID_REQUEST:
      return {
        ...state
      }
    case actions.GET_JOBS_GRID_SUCCESS:
      return {
        ...state,
        jobs: action.jobs
      }
    default:
      return state;
  }
} 