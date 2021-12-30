import React, {FC} from 'react'
import { Link } from 'react-router-dom';

import { formatDate } from '../../../helpers/helpers';

interface Props {
  job: any
}

const CardJob : FC<Props> = (props) => {

  const {job} = props;

  return (
    <Link 
      to={{
        // pathname :'/job-detail/' + jobName.toLowerCase().replaceAll(" ", "-") + '/' + jobId,
        // state: {
        //   jobId: jobId
        // }
      }} 
      style={{textDecoration: 'none'}}
    >
      <div className="job-details">
        <div className="restaurant-image">
          <img
            className="detail-icon-image"
            src={job.companyMetaData ? job.companyMetaData.companyLogo : ""}
            style={{
              width: '140px',
              height: '140px'
            }}
            alt="company-logo"
          />
        </div>
        <div className="job-information">
          <div className="job-name"
            style={{
              fontSize: '20px',
              marginTop: 0,
            }}
          >
            {job.title}
          </div>
          <div className="restaurant"
            style={{
              fontSize: '16px',
              fontWeight: 500,
              margin: 0
            }}
          >
            {job.companyMetaData ? job.companyMetaData.name : ""}
          </div>
          <div className="location"
            style={{
              color: "#9b9b9b",
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            {job.place &&
              job.place.map((element: any, index: any) => {
                if (index < job.place.length - 1) return element + ", ";
                else return element;
              })}
          </div>
          {/* <div className="flex-space"></div> */}
          <div className="job-comp mt-2">
            {/* <div className="salary">{job.salaryRange}</div> */}
            <div className="detail-time">
              <i
                className="fa fa-clock"
                style={{ marginTop: "3px", marginRight: "3px" }}
              ></i>
              <span>posted today</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CardJob;