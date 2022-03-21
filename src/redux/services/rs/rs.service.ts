import axios from "axios";

interface RSResponse {
}

export const getRS = async (data: any): Promise<RSResponse> => {
  const token = localStorage.getItem('accessToken');
  return await axios.post(process.env.REACT_APP_SERVER_URL + `api/jobs/fast-apply/cv`, data, {
    headers: {
        'Content-Type': 'multipart/form-data',
        'authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyQGxvY2FsaG9zdC5jb20iLCJhdXRoIjoiUk9MRV9VU0VSIiwiZXhwIjoxNjQxNzE0NDM3fQ.9FwnrsboBT0B3CmvDYCnuHizSAy8rrhU2hR2j8xG0hw`
    }
  })
}