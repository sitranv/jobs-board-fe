import React, {FC} from 'react'
import { Link } from 'react-router-dom';

interface Props {
  jobName: string;
  companyInfo: any,
  salary: string,
  place: any
}

const CardJob : FC<Props> = (props) => {

  const {jobName, companyInfo, salary, place} = props;

  return (
    <Link to="/job-detail" style={{textDecoration: 'none'}}>
      <div className="job-card text-left" style={{width: '195px', marginLeft:'3px'}}>
        <div className="job-details">
          <div className="restaurant-image">
            <img className="icon-image"src={companyInfo.companyLogo} alt=""/>
          </div>
          <div className="job-text-wrapper">
            <div className="job-name">{jobName}</div>
            <div className="restaurant">{companyInfo.name}</div>
            <div className="location">{
              place && place.map((element:any, index: any) => {
                if (index < place.length - 1) return element + ", ";
                else return element;
              })
            }</div>
            <div className="flex-space"></div>
            <div className="job-comp mt-1">
              <div className="salary">
                Salary: {salary}
              </div>
              <div className="time">
                <i className="fa fa-clock" style={{marginTop: '3px', marginRight: '3px'}}></i>
                <span>posted today</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CardJob;