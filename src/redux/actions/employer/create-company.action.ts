import * as actions from '../../../constants/action-types/employer/action.create-company';

export function createCompany(companyRequest: object): actions.EmployerCreateCompanyAction {
  return {
    type: actions.EMPLOYER_CREATE_COMPANY,
    companyRequest
  }
}

export function createCompanyRequest(): actions.CreateCompanyRequestAction {
  return {
    type: actions.EMPLOYER_CREATE_COMPANY_REQUEST,
  }
}


export function createCompanySuccess(response: object): actions.CreateCompanySuccessAction {
  return {
    type: actions.EMPLOYER_CREATE_COMPANY_SUCCESS,
    response
  }
}

