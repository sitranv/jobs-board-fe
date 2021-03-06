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
import { applyJobReducer } from './user/apply-job.reducer';
import { rsReducer } from './rs/rs.reducer';
import { jobRelatedReducer } from './job-detail/related-job.reducer';
import { appliedJobReducer } from './user/applied-job.reducer';
import { changePasswordReducer } from './user/change-password.reducer';

const rootReducer = combineReducers({
  panelReducer: panelReducer,
  jobGridReducer: jobGridReducer,
  loginReducer: loginReducer,
  progressReducer: progressReducer,
  profileReducer: profileReducer,
  jobRecentReducer: jobRecentReducer,
  jobDetailReducer: jobDetailReducer,
  registerReducer: registerReducer,
  createCompanyReducer: createCompanyReducer,
  applyJobReducer: applyJobReducer,
  rsReducer: rsReducer,
  jobRelatedReducer: jobRelatedReducer,
  appliedJobReducer: appliedJobReducer,
  changePasswordReducer: changePasswordReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;