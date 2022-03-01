import * as actions from '../../../../constants/action-types/action.login';

interface LoginState {
  currentUser: object;
  userRequest: object;
  response: object;
  isLoggedIn: boolean;
  status: boolean
}

const initialState : LoginState = {
  userRequest: {},
  currentUser: {},
  response: {},
  isLoggedIn: false,
  status: true
}

export const loginReducer = (state: LoginState = initialState, action: actions.LoginAction) => {
  switch(action.type) {
    case actions.USER_LOGIN:
      return {
        ...state,
        userRequest: action.userRequest,
        isLoggedIn: false,
        status: true
      }
    case actions.USER_LOGIN_REQUEST:
      return {
        ...state
      }
    case actions.USER_LOGIN_SUCCESS:
      localStorage.setItem("accessToken", action.response.token);
      return {
        ...state,
        currentUser: action.response.user,
        response: action.response,
        isLoggedIn: true,
        status: true
      }
    case actions.USER_LOGIN_FAILED:
      return {
        ...state,
        currentUser: {},
        isLoggedIn: false,
        status: false
      }
    case actions.USER_LOGOUT:
      localStorage.removeItem("accessToken");
      return {
        ...state,
        currentUser: {},
        isLoggedIn: false
      }
    default:
      return state;
  }
} 