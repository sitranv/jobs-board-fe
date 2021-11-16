import * as actions from '../../../constants/action-types/action.recent-job';

interface JobRecentState {
  jobs: Array<any>
}

const initialState : JobRecentState = {
  jobs: []
}


export const jobRecentReducer = (state: JobRecentState = initialState, action: actions.RecentJobAction) => {

  switch(action.type) {
    case actions.GET_RECENT_JOB:
      return {
        ...state
      }
    case actions.GET_RECENT_JOB_REQUEST:
      return {
        ...state
      }
    case actions.GET_RECENT_JOB_SUCCESS:
      return {
        ...state,
        jobs: action.jobs
      }
    default:
      return state;
  }
} 