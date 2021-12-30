import * as actions from '../../../constants/action-types/action.rs';

export function getRs(userCv: any): actions.GetRSAction {
  return {
    type: actions.GET_RS,
    userCv
  }
}

export function getRsRequest(): actions.GetRSRequestAction {
  return {
      type: actions.GET_RS_REQUEST,
  }
}


export function getRsSuccess(jobs: any): actions.GetRSSuccessAction {
  return {
      type: actions.GET_RS_SUCCESS,
      jobs
  }
}
