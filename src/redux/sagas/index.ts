import { all, fork } from 'redux-saga/effects';

import panelsSaga from './panel/panel.saga';
import jobGridSaga from './job-grid/job-grid.saga';
import loginSaga from './auth/login/login.saga';
import profileSaga from './profile/profile.saga';

export default function* rootSaga() {
  yield all([
    fork(panelsSaga), 
    fork(jobGridSaga), 
    fork(loginSaga), 
    fork(profileSaga)
  ])
}