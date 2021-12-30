import * as actions from '../../../constants/action-types/action.rs'

interface RSState {
}

const initialState: RSState = {
  jobs: []
};

export const rsReducer = (state: RSState = initialState, action: actions.RSAction) => {
  switch (action.type) {
    case actions.GET_RS:
      return {
        ...state,
        // panels: action.panels
      };
    case actions.GET_RS_REQUEST:
      return {
        ...state,
      }
    case actions.GET_RS_SUCCESS:
      console.log(action.jobs);
      
      return {
        ...state,
        jobs: action.jobs
      }
    default:
      return state;
  }
}