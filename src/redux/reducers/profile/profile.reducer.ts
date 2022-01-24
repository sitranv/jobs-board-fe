import * as actions from '../../../constants/action-types/action.profile'

interface ProfileState {
  currentUser: object;
  isLoggedIn: boolean;
  response: object;
  appliedJobs: object;
}

const initialState: ProfileState = {
  currentUser: {},
  isLoggedIn: false,
  response: {},
  appliedJobs: {}
};

export const profileReducer = (state: ProfileState = initialState, action: actions.ProfileAction) => {
  switch (action.type) {
    case actions.GET_PROFILE_REQUEST:
      return {
        ...state,
      };
    case actions.GET_PROFILE:
      return {
        ...state,
      }
    case actions.GET_PROFILE_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        currentUser: action.response.user,
        response: action.response,
        appliedJobs: action.response.userAppliedJobs
      }
    case actions.GET_PROFILE_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        currentUser: {}
      }
    case actions.CLEAR_PROFILE:
      return {
        ...state,
        isLoggedIn: false,
        currentUser: {},
        appliedJobs: {}
      }
    case actions.UPDATE_PROFILE:
      return {
        ...state
      }
    case actions.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
      }
    default:
      return state;
  }
}