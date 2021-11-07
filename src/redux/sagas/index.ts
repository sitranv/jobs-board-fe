import { all, fork } from 'redux-saga/effects';

import panelsSaga from './panel/panel.saga';
import jobGridSaga from './job-grid/job-grid.saga';
import loginSaga from './auth/login/login.saga';

export default function* rootSaga() {
  yield all([fork(panelsSaga), fork(jobGridSaga), fork(loginSaga)])
}