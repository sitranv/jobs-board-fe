import axios from "axios";

interface panelsResponse {
  panels: any
}

export const fetchPanels = async (): Promise<panelsResponse> => {
  return await axios.get(process.env.REACT_APP_SERVER_URL + 'api/jobs/panels')
}