import * as actions from '../../../constants/action-types/employer/action.create-company';

interface CreateCompanyState {
  
}

const initialState : CreateCompanyState = {
 
}

export const createCompanyReducer = (state: CreateCompanyState = initialState, action: actions.CreateCompanyAction) => {
  switch(action.type) {
    case actions.EMPLOYER_CREATE_COMPANY:
      return {
        ...state,
      }
    case actions.EMPLOYER_CREATE_COMPANY_REQUEST:
      return {
        ...state
      }
    case actions.EMPLOYER_CREATE_COMPANY_SUCCESS:
      return {
        ...state,
      }
    case actions.EMPLOYER_CREATE_COMPANY_FAILED:
      return {
        ...state,
      }
    default:
      return state;
  }
} 