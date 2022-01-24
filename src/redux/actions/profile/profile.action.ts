import * as actions from '../../../constants/action-types/action.profile'

//get profile

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


export function getProfileSuccess(response: any): actions.GetProfileSuccessAction {
  return {
      type: actions.GET_PROFILE_SUCCESS,
      response
  }
}

export function getProfileFailed(): actions.GetProfileFailedAction {
  return {
    type: actions.GET_PROFILE_FAILED
  }
}

export function clearProfile(): actions.ClearProfileAction {
  return {
    type: actions.CLEAR_PROFILE
  }
}


//update profile

export function updateProfile(userRequest: object): actions.UpdateProfileAction {
  return {
    type: actions.UPDATE_PROFILE,
    userRequest
  }
}


export function updateProfileSuccess(response: any): actions.UpdateProfileSuccessAction {
  return {
      type: actions.UPDATE_PROFILE_SUCCESS,
      response
  }
}