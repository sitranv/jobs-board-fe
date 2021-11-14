import * as actions from '../../../constants/action-types/action.profile'

export function getProfile(token: string): actions.GetProfileAction {
  return {
    type: actions.GET_PROFILE,
    token
  }
}

export function getProfileRequest(): actions.GetProfileRequestAction {
  return {
      type: actions.GET_PROFILE_REQUEST,
  }
}


export function getProfileSuccess(user: any): actions.GetProfileSuccessAction {
  return {
      type: actions.GET_PROFILE_SUCCESS,
      user
  }
}

export function getProfileFailed(): actions.GetProfileFailedAction {
  return {
    type: actions.GET_PROFILE_FAILED
  }
}
