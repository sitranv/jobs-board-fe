import React, { } from 'react'

const Intro = () => {
  return (
    <section id="intro">
      <div className="carousel-item active">
        <div className="carousel-background"><img src="https://smartdev-sunny-bucket.s3.ap-southeast-1.amazonaws.com/image.png" alt=""/></div>
          <div className="carousel-container">
            <div className="carousel-content">
              <h2 className="font-color-white">Find Jobs Now more Easy Way</h2>
              <h5 className="font-color-white">From front-of-house positions to back-of-house roles. All in one spot.</h5>
              {/* <a href="#" data-toggle="modal" data-target="#myModal"><i className=" material-icons play">play_arrow</i></a> */}
            </div>
          </div>
        </div>
    </section>
  );
}

export default Intro;