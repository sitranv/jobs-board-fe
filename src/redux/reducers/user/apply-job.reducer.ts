import * as actions from '../../../constants/action-types/user/action.apply-job';

interface ApplyJobState {
  
}

const initialState : ApplyJobState = {
 
}

export const applyJobReducer = (state: ApplyJobState = initialState, action: actions.ApplyJobAction) => {
  switch(action.type) {
    case actions.USER_APPLY_JOB:
      return {
        ...state,
      }
    case actions.USER_APPLY_JOB_REQUEST:
      return {
        ...state
      }
    case actions.USER_APPLY_JOB_SUCCESS:
      return {
        ...state,
      }
    case actions.USER_APPLY_JOB_FAILED:
      return {
        ...state,
      }
    default:
      return state;
  }
} 