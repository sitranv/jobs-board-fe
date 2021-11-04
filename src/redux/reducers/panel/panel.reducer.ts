import * as actions from '../../../constants/action-types/action.panels'

interface PanelsState {
  panels: any;
}

const initialState: PanelsState = {
  panels: []
};

export const panelReducer = (state: PanelsState = initialState, action: actions.PanelsAction) => {
  switch (action.type) {
    case actions.GET_PANELS_REQUEST:
      return {
        ...state,
        // panels: action.panels
      };
    case actions.GET_PANELS:
      return {
        ...state,
      }
    case actions.GET_PANELS_SUCCESS:
      return {
        ...state,
        panels: action.panels
      }
    default:
      return state;
  }
}