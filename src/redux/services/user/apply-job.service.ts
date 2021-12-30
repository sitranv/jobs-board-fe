import axios from "axios";

interface ApplyJobResponse {
}

export const applyJob = async (data: any, jobId: string): Promise<ApplyJobResponse> => {
  const token = localStorage.getItem('accessToken');
  return await axios.post(process.env.REACT_APP_SERVER_URL + `api/jobs/id/${jobId}`, data, {
    headers: {
        'Content-Type': 'multipart/form-data',
        'authorization': `Bearer ${token}`
    }
  })
}