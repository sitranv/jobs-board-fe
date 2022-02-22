import axios from "axios";

interface AppliedJobResponse {
}

export const getAppliedJobs = async (): Promise<AppliedJobResponse> => {
  const token = localStorage.getItem('accessToken');
  return await axios.get(process.env.REACT_APP_SERVER_URL + `api/users/applied-jobs`, {
    headers: {
        'authorization': `Bearer ${token}`
    }
  })
}

export const deleteAppliedJob = async (jobId: string): Promise<AppliedJobResponse> => {
  const token = localStorage.getItem('accessToken');
  return await axios.delete(process.env.REACT_APP_SERVER_URL + `api/users/applied-jobs/${jobId}`, {
    headers: {
        'authorization': `Bearer ${token}`
    }
  })
}