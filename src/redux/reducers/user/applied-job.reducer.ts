import * as actions from '../../../constants/action-types/user/action.applied-job';

interface AppliedJobState {
  response: any,
  appliedJobs: any
}

const initialState : AppliedJobState = {
  response: {},
  appliedJobs: []
}

export const appliedJobReducer = (state: AppliedJobState = initialState, action: actions.GetAppliedJobAction) => {
  switch(action.type) {
    case actions.USER_GET_APPLIED_JOB:
      return {
        ...state,
      }
    case actions.USER_GET_APPLIED_JOB_REQUEST:
      return {
        ...state
      }
    case actions.USER_GET_APPLIED_JOB_SUCCESS:
      return {
        ...state,
        response: action.response,
        appliedJobs: action.response.appliedJobs
      }
    case actions.USER_GET_APPLIED_JOB_FAILED:
      return {
        ...state,
      }
    default:
      return state;
  }
} 