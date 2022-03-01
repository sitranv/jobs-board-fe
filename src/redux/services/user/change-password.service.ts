import axios from "axios";

interface ChangePasswordResponse {
}

export const changePassword = async (request: any): Promise<ChangePasswordResponse> => {
  const token = localStorage.getItem('accessToken');
  return await axios.post(process.env.REACT_APP_SERVER_URL + `api/users/changePassword`, request, {
    headers: {
        'authorization': `Bearer ${token}`
    }
  })
}