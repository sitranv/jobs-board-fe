import axios from "axios";

interface jobResponse {
  job: any
}

export const fetchRelatedJobDetail = async (hashtags: any): Promise<jobResponse> => {
  return await axios.post(process.env.REACT_APP_SERVER_URL + 'api/jobs/get-related-jobs', hashtags)
}