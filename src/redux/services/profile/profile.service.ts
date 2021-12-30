import axios from "axios";

interface profileResponse {
  user: any
}

export const fetchProfile = async (token: string): Promise<profileResponse> => {
  return await axios.get(process.env.REACT_APP_SERVER_URL + 'api/users/profile/get', {
    headers: {
      'authorization': `Bearer ${token}`
    }
  })
}