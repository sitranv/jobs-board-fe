import React, { FC, useEffect } from 'react'
import CardJob from '../card-job/card-job.component';

interface Props {
  
}

const JobGrid : FC<Props> = () => {

  useEffect(() => {
  }, [])
  let jobs = [];
  for (let i = 0; i < 30; i++) {
    jobs.push(
      <div className="mb-3">
        <CardJob />
      </div>
    )
  }

  return (
    <div className="col-lg-10">
      <div className="detail">
        <div className="grid b1814:grid-cols-6 b1524:grid-cols-5 b1280:grid-cols-4 b1000:grid-cols-3">
          {jobs}
        </div>
      </div>

      <div className="vertical-space-20"></div>
      <div className="vertical-space-25"></div>
      {/* <div className="job-list">
        <ul className="pagination justify-content-end margin-auto">
          <li className="page-item"><a className="page-link pdding-none" href="javascript:void(0);"><i
            className=" material-icons keyboard_arrow_left_right">keyboard_arrow_left</i></a></li>
          <li className="page-item"><a className="page-link active" href="javascript:void(0);">1</a></li>
          <li className="page-item"><a className="page-link" href="javascript:void(0);">2</a></li>
          <li className="page-item"><a className="page-link" href="javascript:void(0);">3</a></li>
          <li className="page-item"><a className="page-link" href="javascript:void(0);">4</a></li>
          <li className="page-item">
            <a className="page-link pdding-none" href="javascript:void(0);"> <i
              className=" material-icons keyboard_arrow_left_right">keyboard_arrow_right</i></a>
          </li>
        </ul>
      </div> */}
    </div>
  )
}

export default JobGrid;