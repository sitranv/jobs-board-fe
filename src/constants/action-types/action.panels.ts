//get panels
export const GET_PANELS_REQUEST = 'panelsActionTypes/GET_PANELS_REQUEST';
export interface GetPanelsRequestAction {
  type: typeof GET_PANELS_REQUEST;
}

export const GET_PANELS_SUCCESS = 'panelsActionTypes/GET_PANELS_SUCCESS';
export interface GetPanelsSuccessAction {
  type: typeof GET_PANELS_SUCCESS;
  panels: any
}

export const GET_PANELS = 'panelsActionTypes/GET_PANELS';
export interface GetPanelsAction {
  type: typeof GET_PANELS;
}

export type PanelsAction = GetPanelsAction | GetPanelsRequestAction | GetPanelsSuccessAction;
