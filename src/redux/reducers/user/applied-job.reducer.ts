import * as actions from '../../../constants/action-types/user/action.applied-job';

interface AppliedJobState {
  response: any,
  appliedJobs: any,
  deleteStatus: boolean
}

const initialState: AppliedJobState = {
  response: {},
  appliedJobs: [],
  deleteStatus: false
}

export const appliedJobReducer = (state: AppliedJobState = initialState, action: actions.GetAppliedJobAction) => {
  switch (action.type) {
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

    case actions.USER_DELETE_APPLIED_JOB:
      return {
        ...state,
        deleteStatus: false
      }
    case actions.USER_DELETE_APPLIED_JOB_SUCCESS:
      return {
        ...state,
        deleteStatus: true
      }
    case actions.USER_DELETE_APPLIED_JOB_FAILED:
      return {
        ...state,
      }
    default:
      return state;
  }
} 