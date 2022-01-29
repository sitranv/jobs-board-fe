import axios from "axios";

interface jobResponse {
  job: any
}

export const fetchJobDetail = async (jobId: string): Promise<jobResponse> => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    return await axios.get(process.env.REACT_APP_SERVER_URL + 'api/jobs/id/' + jobId, {
      headers: {
        'authorization': `Bearer ${token}`
      }
    })
  }
  return await axios.get(process.env.REACT_APP_SERVER_URL + 'api/jobs/id/' + jobId)
}