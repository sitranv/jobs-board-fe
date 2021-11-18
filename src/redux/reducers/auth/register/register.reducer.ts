import * as actions from '../../../../constants/action-types/action.register';

interface RegisterState {
  userRequest: object;
  error: any;
  status: boolean;
  data: any;
}

const initialState: RegisterState = {
  userRequest: {},
  error: {},
  status: true,
  data: {}
}

export const registerReducer = (state: RegisterState = initialState, action: actions.RegisterAction) => {
  switch (action.type) {
    case actions.USER_REGISTER:
      return {
        ...state,
        userRequest: action.userRequest,
        error: {},
        status: true
      }
    case actions.USER_REGISTER_REQUEST:
      return {
        ...state
      }
    case actions.USER_REGISTER_SUCCESS:
      return {
        ...state,
        data: action.response,
        status: true
      }
    case actions.USER_REGISTER_FAILED:
      return {
        ...state,
        currentUser: {},
        error: action.response,
        status: false
      }
    default:
      return state;
  }
}