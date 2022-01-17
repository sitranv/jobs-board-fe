import * as actions from '../../../constants/action-types/action.related-job';

interface JobRelatedState {
  jobs: Array<any>
}

const initialState : JobRelatedState = {
  jobs: []
}

export const jobRelatedReducer = (state: JobRelatedState = initialState, action: actions.RelatedJobAction) => {

  switch(action.type) {
    case actions.GET_RELATED_JOB:
      return {
        ...state
      }
    case actions.GET_RELATED_JOB_REQUEST:
      return {
        ...state
      }
    case actions.GET_RELATED_JOB_SUCCESS:
      return {
        ...state,
        jobs: action.jobs
      }
    default:
      return state;
  }
} 