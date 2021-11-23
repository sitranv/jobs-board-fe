import { combineReducers } from 'redux';
import { panelReducer } from './panel/panel.reducer';
import { jobGridReducer } from './job-grid/job-grid.reducer';
import { loginReducer } from './auth/login/login.reducer';
import { progressReducer } from './progress/progress.reducer';
import { profileReducer } from './profile/profile.reducer';
import { jobRecentReducer } from './recent-job/recent-job.reducer';
import { jobDetailReducer } from './job-detail/job-detail.reducer';
import { registerReducer } from './auth/register/register.reducer';
import { createCompanyReducer } from './employer/create-company.reducer';

const rootReducer = combineReducers({
  panelReducer: panelReducer,
  jobGridReducer: jobGridReducer,
  loginReducer: loginReducer,
  progressReducer: progressReducer,
  profileReducer: profileReducer,
  jobRecentReducer: jobRecentReducer,
  jobDetailReducer: jobDetailReducer,
  registerReducer: registerReducer,
  createCompanyReducer: createCompanyReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;