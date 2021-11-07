import { combineReducers } from 'redux';
import { panelReducer } from './panel/panel.reducer';
import { jobGridReducer } from './job-grid/job-grid.reducer';
import { loginReducer } from './auth/login/login.reducer';

const rootReducer = combineReducers({
  panelReducer: panelReducer,
  jobGridReducer: jobGridReducer,
  loginReducer: loginReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;