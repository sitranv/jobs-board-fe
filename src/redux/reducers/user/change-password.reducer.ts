import * as actions from '../../../constants/action-types/user/action.change-password';

interface ChangePasswordState {
  status: boolean
}

const initialState : ChangePasswordState = {
  status: false
}

export const changePasswordReducer = (state: ChangePasswordState = initialState, action: actions.ChangePasswordAction) => {
  switch(action.type) {
    case actions.USER_CHANGE_PASSWORD:
      return {
        ...state,
        status: false
      }
    case actions.USER_CHANGE_PASSWORD_SUCCESS:
      return {
        ...state
      }
    case actions.USER_CHANGE_PASSWORD_FAILED:
      return {
        ...state,
        status: true
      }
    default:
      return state;
  }
} 