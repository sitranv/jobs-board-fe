import axios from "axios";

interface jobsResponse {
  jobs: any
}

export const fetchJobsRecent = async (): Promise<jobsResponse> => {
  return await axios.get(process.env.REACT_APP_SERVER_URL + 'api/jobs/recent')
}