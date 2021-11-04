import { combineReducers } from 'redux';
import {panelReducer}  from './panel/panel.reducer';
const rootReducer = combineReducers({
  panels: panelReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;