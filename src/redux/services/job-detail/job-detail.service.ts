import axios from "axios";

interface jobResponse {
  job: any
}

export const fetchJobDetail = async (jobId: string): Promise<jobResponse> => {
  return await axios.get(process.env.REACT_APP_SERVER_URL + 'api/jobs/id/' + jobId)
}