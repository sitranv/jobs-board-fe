import * as actions from '../../../../constants/action-types/action.login';

interface LoginState {
  currentUser: object;
  userRequest: object;
  isLoggedIn: boolean
}

const initialState : LoginState = {
  userRequest: {},
  currentUser: {},
  isLoggedIn: false
}

export const loginReducer = (state: LoginState = initialState, action: actions.LoginAction) => {
  switch(action.type) {
    case actions.USER_LOGIN:
      return {
        ...state,
        userRequest: action.userRequest,
        isLoggedIn: false
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
        isLoggedIn: true
      }
    case actions.USER_LOGIN_FAILED:
      return {
        ...state,
        currentUser: {},
        isLoggedIn: false
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