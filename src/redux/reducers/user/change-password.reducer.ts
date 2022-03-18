import * as actions from '../../../constants/action-types/user/action.change-password';

interface ChangePasswordState {
  status: boolean,
  changed: boolean,
  errorMessage: any,
}

const initialState : ChangePasswordState = {
  status: false,
  changed: false,
  errorMessage: ""
}

export const changePasswordReducer = (state: ChangePasswordState = initialState, action: actions.ChangePasswordAction) => {
  switch(action.type) {
    case actions.USER_CHANGE_PASSWORD:
      return {
        ...state,
        status: false,
        changed: false
      }
    case actions.USER_CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        changed: true
      }
    case actions.USER_CHANGE_PASSWORD_FAILED:
      return {
        ...state,
        status: true,
        changed: false,
        errorMessage: action.response.message
      }
    default:
      return state;
  }
} 