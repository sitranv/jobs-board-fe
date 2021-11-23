//get panels
export const EMPLOYER_CREATE_COMPANY_REQUEST = 'CreateCompanyActionTypes/EMPLOYER_CREATE_COMPANY_REQUEST';
export interface CreateCompanyRequestAction {
  type: typeof EMPLOYER_CREATE_COMPANY_REQUEST;
}

export const EMPLOYER_CREATE_COMPANY_SUCCESS = 'CreateCompanyActionTypes/USER_LOGIN_SUCCESS';
export interface CreateCompanySuccessAction {
  type: typeof EMPLOYER_CREATE_COMPANY_SUCCESS;
  response: any
}

export const EMPLOYER_CREATE_COMPANY = 'CreateCompanyActionTypes/EMPLOYER_CREATE_COMPANY';
export interface EmployerCreateCompanyAction {
  type: typeof EMPLOYER_CREATE_COMPANY;
  companyRequest: object
}

export const EMPLOYER_CREATE_COMPANY_FAILED = 'CreateCompanyActionTypes/EMPLOYER_CREATE_COMPANY_FAILED'
export interface CreateCompanyFailedAction {
  type: typeof EMPLOYER_CREATE_COMPANY_FAILED;
}

export type CreateCompanyAction =
CreateCompanyRequestAction |
CreateCompanySuccessAction |
EmployerCreateCompanyAction |
CreateCompanyFailedAction;
