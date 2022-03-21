import axios from "axios";

interface RSResponse {
}

export const getRS = async (data: any): Promise<RSResponse> => {
  const token = localStorage.getItem('accessToken');
  return await axios.post(process.env.REACT_APP_SERVER_URL + `api/jobs/fast-apply/cv`, data, {
    headers: {
        'Content-Type': 'multipart/form-data',
        'authorization': `Bearer ${token}`
    }
  })
}