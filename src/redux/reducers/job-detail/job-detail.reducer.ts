import * as actions from '../../../constants/action-types/action.job-detail';

interface JobDetailState {
  job: object
}

const initialState : JobDetailState = {
  job: {}
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
        job: action.job
      }
    default:
      return state;
  }
} 