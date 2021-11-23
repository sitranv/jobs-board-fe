import { put, call, takeEvery, all, fork } from "redux-saga/effects";

import * as actionTypes from '../../../constants/action-types/employer/action.create-company';
import * as actionCreators from '../../actions/employer/create-company.action';
import * as progressAction from '../../actions/progress/progress.action';
// import * as profileAction from '../../actions/profile/profile.action';
import { createCompany } from "../../services/employer/create-company.service";

function* onCreateCompany({companyRequest}: actionTypes.EmployerCreateCompanyAction) {
  try {
    yield put(progressAction.beginProgress());
    const { data } = yield call(createCompany, companyRequest);
    console.log(data);
    yield put(actionCreators.createCompanySuccess(data))
  } catch (e: any) {
    console.log(e.response.data);
  } finally {
    yield put(progressAction.completeProgress());
  }
}

function* watchOnCreateCompany() {
  yield takeEvery(actionTypes.EMPLOYER_CREATE_COMPANY, onCreateCompany);
}

export default function* createCompanySaga() {
  yield (all([fork(watchOnCreateCompany)]))
}