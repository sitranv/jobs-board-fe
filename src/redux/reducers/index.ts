import { combineReducers } from 'redux';
import {panelReducer}  from './panel/panel.reducer';
import { jobGridReducer } from './job-grid/job-grid.reducer';

const rootReducer = combineReducers({
  panelReducer: panelReducer,
  jobGridReducer: jobGridReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;