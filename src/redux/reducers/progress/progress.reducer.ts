import * as actions from '../../../constants/action-types/action.progress'

interface ProgressState {
  progress: number
}

const initialState: ProgressState = {
  progress: 0
};

export const progressReducer = (state: ProgressState = initialState, action: actions.ProgressAction) => {
  switch (action.type) {
    case actions.BEGIN_PROGRESS_BAR:
      let i = Math.floor(Math.random() * 40) + 10
      return {
        ...state,
        progress: i
      };
    case actions.COMPLETE_PROGRESS_BAR:
      return {
        ...state,
        progress: 100
      }
    case actions.RESET_PROGRESS_BAR:
      return {
        ...state,
        progress: 0
      }
    default:
      return state;
  }
}