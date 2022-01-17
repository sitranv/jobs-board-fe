import axios from "axios";

interface jobsResponse {
  jobs: any
}

export const fetchJobs = async (numOfJobs: number, search: string): Promise<jobsResponse> => {
  return await axios.get(process.env.REACT_APP_SERVER_URL + `api/jobs/${numOfJobs}/${search}`)
}