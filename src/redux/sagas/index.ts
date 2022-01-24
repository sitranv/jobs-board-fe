import { all, fork } from 'redux-saga/effects';

import panelsSaga from './panel/panel.saga';
import jobGridSaga from './job-grid/job-grid.saga';
import loginSaga from './auth/login/login.saga';
import profileSaga from './profile/profile.saga';
import jobsRecentSaga from './recent-job/recent-job.saga';
import logoutSaga from './auth/logout/logout.saga';
import jobDetailSaga from './job-detail/job-detail.saga';
import registerSaga from './auth/register/register.saga';
import createCompanySaga from './employer/create-company.saga';
import applyJobSaga from './user/apply-job.saga';
import rsSaga from './rs/rs.saga';
import relatedJobSaga from './job-detail/related-job.saga'
import appliedJobSaga from './user/applied-job.saga';

export default function* rootSaga() {
  yield all([
    fork(panelsSaga), 
    fork(jobGridSaga), 
    fork(loginSaga), 
    fork(profileSaga),
    fork(jobsRecentSaga),
    fork(logoutSaga),
    fork(jobDetailSaga),
    fork(registerSaga),
    fork(createCompanySaga),
    fork(applyJobSaga),
    fork(rsSaga),
    fork(relatedJobSaga),
    fork(appliedJobSaga)
  ])
}