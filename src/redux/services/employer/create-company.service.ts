import axios from "axios";

interface CreateCompanyResponse {
}

export const createCompany = async (data: any): Promise<CreateCompanyResponse> => {
  const token = localStorage.getItem('accessToken');
  return await axios.post(process.env.REACT_APP_SERVER_URL + 'api/company/create', data, {
    headers: {
        'Content-Type': 'multipart/form-data',
        'authorization': `Bearer ${token}`
    }
  })
}