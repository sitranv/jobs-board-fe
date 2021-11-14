import * as actions from '../../../constants/action-types/action.progress';

export function beginProgress(): actions.BeginProgressBarAction {
  return {
    type: actions.BEGIN_PROGRESS_BAR,
  }
}

export function completeProgress(): actions.CompleteProgressBarAction {
  return {
      type: actions.COMPLETE_PROGRESS_BAR,
  }
}


export function resetProgressBar() : actions.ResetProgressBarAction {
  return {
    type: actions.RESET_PROGRESS_BAR,
  }
}