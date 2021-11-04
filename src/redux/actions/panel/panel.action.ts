import * as actions from '../../../constants/action-types/action.panels'

export function getPanels(): actions.GetPanelsAction {
  return {
    type: actions.GET_PANELS,
  }
}

export function getPanelsRequest(): actions.GetPanelsRequestAction {
  return {
      type: actions.GET_PANELS_REQUEST,
  }
}


export function getPanelsSuccess(panels: any): actions.GetPanelsSuccessAction {
  return {
      type: actions.GET_PANELS_SUCCESS,
      panels
  }
}
