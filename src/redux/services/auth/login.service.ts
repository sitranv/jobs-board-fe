import axios from "axios";

interface loginResponse {
}

export const login = async (userRequest: any): Promise<loginResponse> => {
  return await axios.post(process.env.REACT_APP_SERVER_URL + 'api/authenticate', userRequest, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
}