import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import CardJob from "../card-job/card-job.component";

import { slick_responsive } from "../../constants/react-slick";
import {getJobRecent} from '../../redux/actions/recent-job/recent-job.action';


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

const RecentJob: FC<Props> = () => {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    initialSlide: 1,
    // swipeToSlide: true,
    rows: 1,
    prevArrow: (
      <PrevArrow className={undefined} style={undefined} onClick={undefined} />
    ),
    nextArrow: (
      <NextArrow className={undefined} style={undefined} onClick={undefined} />
    ),
    responsive: slick_responsive,
  };

  const dispatch = useDispatch();

  const jobs = useSelector((state: any) => {
    return state.jobRecentReducer.jobs;
  });

  useEffect(() => {
    dispatch(getJobRecent());
  }, []);

  return (
    <section id="resent-job-post" className="background-color-jobs">
      <div className="vertical-space-30"></div>
      <div className="container text-center w-4/6">
        <div className="text-left text-title" style={{ marginBottom: "20px" }}>
          Recently Added
        </div>
        <Slider {...settings}>
          {jobs &&
            jobs.map((job: any, index: number) => {
              return (
                <div className="mb-3">
                  <CardJob
                    jobName={job.title}
                    companyInfo={job.companyMetaData}
                    salary={job.salaryRange}
                    place={job.place}
                    createdDate={job.createdDate}
                    jobId={job.id}
                  />
                </div>
              );
            })}
        </Slider>
      </div>
      <div className="vertical-space-60"></div>
    </section>
  );
};

export default RecentJob;
