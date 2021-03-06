import React, { FC } from "react";
import Slider from "react-slick";
import CardJob from "../card-job/card-job.component";
import { slick_responsive } from "../../constants/react-slick";

const PrevArrow = (props: { className: any; style: any; onClick: any }) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <i className="fas fa-chevron-left" style={{ marginTop: "3px" }}></i>
    </div>
  );
};

const NextArrow = (props: { className: any; style: any; onClick: any }) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <i
        className="fas fa-chevron-right"
        style={{ marginTop: "3px", marginLeft: "2px" }}
      ></i>
    </div>
  );
};

interface Props {}

const FilterJob: FC<Props> = () => {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    initialSlide: 1,
    swipeToSlide: true,
    // afterChange: function (index) {
    //   console.log(
    //     `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    //   );
    // },
    rows: 1,
    prevArrow: (
      <PrevArrow className={undefined} style={undefined} onClick={undefined} />
    ),
    nextArrow: (
      <NextArrow className={undefined} style={undefined} onClick={undefined} />
    ),
    responsive: slick_responsive,
  };

  let jobs = [];
  for (let i = 0; i < 10; i++) {
    jobs.push(
      <CardJob
        jobName={""}
        companyInfo={{
          restaurantAddress: {
          }
        }}
        salary={""}
        place=""
        createdDate={"2021-11-12T16:50:27.832Z"}
        jobId=""
      />
    );
  }

  return (
    <section id="resent-job-post" className="background-color-white">
      <div className="vertical-space-30"></div>
      <div className="container text-center w-4/6">
        <div className="text-left text-title">$17/hr And Up</div>
        <div className="vertical-space-30"></div>
        <Slider {...settings}>{jobs}</Slider>
      </div>
      <div className="vertical-space-60"></div>
    </section>
  );
};

export default FilterJob;
