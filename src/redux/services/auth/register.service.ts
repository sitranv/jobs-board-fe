import axios from "axios";

interface RegisterResponse {
}

export const register = async (userRequest: any): Promise<RegisterResponse> => {
  return await axios.post(process.env.REACT_APP_SERVER_URL + 'api/users/register', userRequest, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}