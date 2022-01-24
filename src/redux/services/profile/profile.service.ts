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

export const updateProfile = async (userRequest: object): Promise<profileResponse> =>  {
  const token = localStorage.getItem("accessToken")
  return await axios.post(process.env.REACT_APP_SERVER_URL + 'api/users/profile', userRequest, {
    headers: {
      'authorization' : `Bearer ${token}`
    }
  })
}