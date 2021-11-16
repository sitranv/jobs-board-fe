import { stat } from "fs";
import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getJobDetail } from "../../redux/actions/job-detail/job-detail.action";
interface Props {
  jobId: string;
}

const JobDetail: FC<Props> = (props: any) => {
  const jobId = props.jobId;
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getJobDetail(jobId));
  }, []);

  const job = useSelector((state: any) => {
    return state.jobDetailReducer.job;
  });

  return (
    <section id="job-Details">
      <div className="container-fluid background-color-full-white job-Details">
        <div
          style={{
            paddingLeft: "50px",
            paddingBottom: "30px",
          }}
        >
          <i className="fas fa-arrow-left" style={{ color: "#A22D3B" }}></i>
          Back to Jobs
        </div>
        <div className="Exclusive-Product row justify-content-between">
          <div className="col-md-8">
            <div className="job-details">
              <div className="restaurant-image">
                <img
                  className="detail-icon-image"
                  src={job.companyMetaData ? job.companyMetaData.companyLogo : ""}
                  alt="company-logo"
                />
              </div>
              <div className="job-text-wrapper">
                <div className="job-name">{job.title}</div>
                <div className="restaurant">{job.companyMetaData ? job.companyMetaData.name : ""}</div>
                <div className="location">
                  {job.place &&
                    job.place.map((element: any, index: any) => {
                      if (index < job.place.length - 1) return element + ", ";
                      else return element;
                    })}
                </div>
                <div className="flex-space"></div>
                <div className="job-comp mt-2">
                  <div className="salary">{job.salaryRange}</div>
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
            <div className="Job-Description">
              <div>
                <h4>Job Description / Responsibility</h4>
                <div>
                  {`${job.description.replaceAll("\\n","<br/>")}`}
                </div>
              </div>
              
              <div>
                <h4>Experience & Requirement</h4>
                <p className="margin-bottom">
                  {job.request}
                </p>
              </div>
              <div>
                <h4>Benefit</h4>
                <p className="margin-bottom">
                  {job.benefit}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4" style={{ lineHeight: "60px" }}>
            <div style={{ height: "180px" }}>
              <a href="#" className="Apply-Now">
                Apply Now
              </a>
            </div>
            <div className="related-job">Related job</div>
            {/* <a href="#">View more similar jobs</a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetail;
