import React, {FC} from 'react'
import { Link } from 'react-router-dom';

interface Props {
  
}

const CardJob : FC<Props> =() => {
  return (
    <Link to="/job-detail" style={{textDecoration: 'none'}}>
      <div className="job-card text-left" style={{width: '195px', marginLeft:'3px'}}>
        <div className="job-details">
          <div className="restaurant-image">
            <img className="icon-image"src="https://d1ic8ral6zeyya.cloudfront.net/public/restaurants%2Fedzn%3A1%3A8%2FCrockett%27s%20Public%20House.jpg" alt=""/>
          </div>
          <div className="job-text-wrapper">
            <div className="job-name">Prep cook</div>
            <div className="restaurant">Crockett's Public House (Puyallup)</div>
            <div className="location">Puyallup, WA</div>
            <div className="flex-space"></div>
            <div className="job-comp mt-2">
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