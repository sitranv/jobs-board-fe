import React, { } from 'react'
import Slider from "react-slick";
import CardJob from '../card-job/card-job.component';

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <i class="fas fa-chevron-left" style={{ marginTop: '3px' }}></i>
    </div>
  );
}

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <i class="fas fa-chevron-right" style={{ marginTop: '3px', marginLeft: '2px' }}></i>
    </div>
  );
}

const RecentJob = () => {

  const settings = {
    infinite: true,
    slidesToShow: 5.5,
    initialSlide: 0.5,
    swipeToSlide: true,
    // afterChange: function (index) {
    //   console.log(
    //     `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    //   );
    // },
    rows: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 1.5,
        // slidesToScroll: 1,
        initialSlide: 0.6,
        rows: 1,
        arrows: false,
      }
    }]
  };

  let jobs = [];
  for (let i = 0; i < 10; i++) {
    jobs.push(<CardJob />)
  }

  return (
    <section id="resent-job-post" class="">
      <div class="vertical-space-30"></div>
      <div class="container text-center">
        <div class="text-left text-title">Recently Added</div>
        <div class="vertical-space-30"></div>
        <Slider {...settings}>
          {jobs}
        </Slider>
      </div>
      <div class="vertical-space-60"></div>
    </section>
  )
}

export default RecentJob;