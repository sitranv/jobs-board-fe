import React, { FC } from 'react'


interface Props {
  
}

const JobDetail : FC<Props> = () => {

  return (
    <section id="job-Details">
      <div className="container-fluid background-color-full-white job-Details">
        <div style={{
          paddingLeft: '50px',
          paddingBottom: '30px'
        }}>
          <i className="fas fa-arrow-left" style={{color: '#A22D3B'}}></i>
          Back to Jobs
        </div>
        <div className="Exclusive-Product row justify-content-between">
          <div className="col-md-8">
            <div className="job-details">
              <div className="restaurant-image">
                <img className="detail-icon-image" src="https://d1ic8ral6zeyya.cloudfront.net/public/restaurants%2Fedzn%3A1%3A8%2FCrockett%27s%20Public%20House.jpg" alt="" />
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
                  <div className="detail-time">
                    <i className="fa fa-clock" style={{ marginTop: '3px', marginRight: '3px' }}></i>
                    <span>posted today</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="Job-Description">
              <h4>Job Description / Responsibility</h4>
              <ul>
                <li className="list-style">Et vestibulum ullamcorper curae tellus consectetur erat pharetra et cubilia Nibh est
                  auctor lacus nam lacinia aptent</li>
                <li className="list-style">
                  Vitae sociosqu a nisi cubilia vulputate aliquam vulputate imperdiet tempor arcu fames</li>
                <li className="list-style">
                  Odio habitasse senectus morbi dapibus mauris non primis, nisl ante hendrerit consectetur nulla phasellus
                  eleifend, ad at scelerisque vulputate habitant tempor</li>
                <li className="list-style">
                  Dictum tortor praesent aliquam lectus est vestibulum, viverra arcu fringilla lectus luctus proin conubia, et
                  porta pellentesque donec mollisEt vestibulum ullamcorper curae tellus consectetur erat pharetra et cubilia
                </li>
                <li className="list-style">
                  Vitae sociosqu a nisi cubilia vulputate aliquam vulputate imperdiet tempor arcu fames</li>
                <li className="list-style">
                  Odio habitasse senectus morbi dapibus mauris non primis, nisl ante hendrerit consectetur nulla phasellus
                  eleifend, ad at scelerisque vulputate habitant tempor</li>
                <li className="list-style">
                  Dictum tortor praesent aliquam lectus est vestibulum, viverra arcu fringilla lectus luctus proin conubia
                </li>
              </ul>
              <div className="vertical-space-20"></div>
              <h4>Experience & Requirement</h4>
              <p className="margin-bottom">Suspendisse augue pulvinar placerat himenaeos odio nec turpis augue sem maecenas,
                faucibus erat lacinia consectetur sapien suscipit vestibulum venenatis himenaeos elit etiam lobortis luctus
                tempor phasellus vitae aliquam aenean tincidunt suscipit rhoncus mauris, lectus duis aenean fermentum aptent
                laoreet habitant suspendisse donec malesuada lectus quisque primis tristique donec mattis, per euismod quisque
                urna proin ornare, convallis litora curae dictumst.</p>
              <ul>
                <li className="list-style">Et vestibulum ullamcorper curae tellus consectetur erat pharetra et cubilia Nibh est
                  auctor lacus nam lacinia aptent</li>
                <li className="list-style">
                  Et vestibulum ullamcorper curae tellus consectetur erat pharetra et cubilia Nibh est auctor lacus nam
                  lacinia aptent</li>
                <li className="list-style">
                  Vitae sociosqu a nisi cubilia vulputate aliquam vulputate imperdiet tempor arcu fames</li>
                <li className="list-style">
                  Odio habitasse senectus morbi dapibus mauris non primis, nisl ante hendrerit consectetur nulla phasellus
                  eleifend, ad at scelerisque vulputate habitant temmollis</li>
              </ul>
            </div>
          </div>
          <div className="col-md-4" style={{ lineHeight: '60px' }}>
            <div style={{ height: '180px' }}>
              <a href="#" className="Apply-Now">Apply Now</a>
            </div>
            <div className="related-job">
              Related job
            </div>
            {/* <a href="#">View more similar jobs</a> */}
          </div>
        </div>

      </div>
    </section>
  )
}

export default JobDetail;