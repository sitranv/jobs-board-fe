import * as actions from '../../../../constants/action-types/action.register';

interface RegisterState {
  userRequest: object;
  error: any;
  status: boolean;
  data: any;
  confirmStatus: boolean;
  confirmResponse: object
}

const initialState: RegisterState = {
  userRequest: {},
  error: {},
  status: true,
  data: {},
  confirmStatus: false,
  confirmResponse: {}
}

export const registerReducer = (state: RegisterState = initialState, action: actions.RegisterAction) => {
  switch (action.type) {
    case actions.USER_REGISTER:
      return {
        ...state,
        userRequest: action.userRequest,
        error: {},
        status: true,
        confirmStatus: false
      }
    case actions.USER_REGISTER_REQUEST:
      return {
        ...state
      }
    case actions.USER_REGISTER_SUCCESS:
      return {
        ...state,
        data: action.response,
        status: true,
        confirmStatus: true
      }
    case actions.USER_REGISTER_FAILED:
      return {
        ...state,
        currentUser: {},
        error: action.response,
        status: false
      }
    case actions.USER_CONFIRM_EMAIL:
      return {
        ...state,
      }
    case actions.USER_CONFIRM_EMAIL_SUCCESS:
      return {
        ...state,
        confirmResponse: action.response,
        confirmStatus: true
      }
    case actions.USER_CONFIRM_EMAIL_FAILED:
      return {
        ...state,
        confirmStatus: true
      }
    default:
      return state;
  }
}