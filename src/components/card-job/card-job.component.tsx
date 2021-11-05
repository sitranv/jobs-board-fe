import React, {FC} from 'react'
import { Link } from 'react-router-dom';

interface Props {
  jobName: string;
  restaurantInfo: any,
  salary: string,
}

const CardJob : FC<Props> = (props) => {

  const {jobName, restaurantInfo, salary} = props;

  return (
    <Link to="/job-detail" style={{textDecoration: 'none'}}>
      <div className="job-card text-left" style={{width: '195px', marginLeft:'3px'}}>
        <div className="job-details">
          <div className="restaurant-image">
            <img className="icon-image"src={restaurantInfo.restaurantLogoUrl} alt=""/>
          </div>
          <div className="job-text-wrapper">
            <div className="job-name">{jobName}</div>
            <div className="restaurant">{restaurantInfo.restaurantName}</div>
            <div className="location">{restaurantInfo.restaurantAddress.city}, {restaurantInfo.restaurantAddress.state}</div>
            <div className="flex-space"></div>
            <div className="job-comp mt-4">
              <div className="salary">
                $17 - $20/hr
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