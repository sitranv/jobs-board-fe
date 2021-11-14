//get panels
export const BEGIN_PROGRESS_BAR = 'progressActionTypes/BEGIN_PROGRESS_BAR';
export interface BeginProgressBarAction {
  type: typeof BEGIN_PROGRESS_BAR;
}

export const COMPLETE_PROGRESS_BAR = 'panelsActionTypes/COMPLETE_PROGRESS_BAR';
export interface CompleteProgressBarAction {
  type: typeof COMPLETE_PROGRESS_BAR;
}

export const RESET_PROGRESS_BAR = 'panelsActionTypes/RESET_PROGRESS_BAR';
export interface ResetProgressBarAction {
  type: typeof RESET_PROGRESS_BAR;
}

export type ProgressAction = BeginProgressBarAction | CompleteProgressBarAction | ResetProgressBarAction;
