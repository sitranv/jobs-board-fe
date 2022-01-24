import * as actions from '../../../constants/action-types/action.job-detail';

interface JobDetailState {
  job: object,
  isApplied: object
}

const initialState : JobDetailState = {
  job: {},
  isApplied: {}
}


export const jobDetailReducer = (state: JobDetailState = initialState, action: actions.JobDetailAction) => {

  switch(action.type) {
    case actions.GET_JOB_DETAIL:
      return {
        ...state
      }
    case actions.GET_JOB_DETAIL_REQUEST:
      return {
        ...state
      }
    case actions.GET_JOB_DETAIL_SUCCESS:
      return {
        ...state,
        job: action.response.jobDetail,
        isApplied: action.response.isApplied
      }
    default:
      return state;
  }
} 