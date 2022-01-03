import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Upload, Form } from "antd";
import { Link } from "react-router-dom";

import { getJobDetail } from "../../redux/actions/job-detail/job-detail.action";
import { formatText } from '../../helpers/helpers';
import { applyJob } from '../../redux/actions/user/apply-job.action'
import { getBase64 } from '../../helpers/helpers';

interface Props {
  jobId: string;
}

const JobDetail: FC<Props> = (props: any) => {
  
  const [cv, setCv] = useState(null);
  const [cvName, setCvName] = useState("");
  const jobId = props.jobId;
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getJobDetail(jobId));
  }, []);

  const job = useSelector((state: any) => {
    return state.jobDetailReducer.job;
  });

  const handleChange = (e: any) => {
    if (e.file.status !== "uploading") {
      if (e.file.type !== 'application/pdf'){
        setCvName("PDF is required!")
      } else {
        getBase64(e.file.originFileObj, () => {
          setCvName(e.file.originFileObj.name)
          setCv(e.file.originFileObj);
        });
      }
    } 
  }

  const applyJobFinish = (data: any) => {
    let fd = new FormData();
    if (cv !== null) {
      fd.append('userCv', cv);
      setCv(null);
    } else {
      setCvName("<p style='color: red'>Import your PDF CV!</p>")
    }
    dispatch(applyJob(fd, jobId));
  }

  return (
    <section id="job-Details">
      <div className="container-fluid background-color-full-white job-Details">
          <div
            style={{
              color: 'black',
              paddingLeft: "50px",
              paddingBottom: "30px",
            }}
          >
            <Link to={{pathname: "/job-list"}}>
              <i className="fas fa-arrow-left" style={{ color: "#A22D3B", marginRight:'2px' }}></i>
            </Link>
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
            <div className="Job-Description">
              <div>
                <h4 className="job-detail-title">Job Description / Responsibility</h4>
                <div>
                  {
                    job.description && job.description.includes("\n") ? 
                    formatText(job.description) : 
                    <div style ={{lineHeight: '5px'}} dangerouslySetInnerHTML={{ __html: job.description}} />
                  }
                  {/* {job.description ? formatText(job.description) : ""} */}
                </div>
              </div>
              
              <div>
                <h4 className="job-detail-title">Experience & Requirement</h4>
                <p className="margin-bottom">
                {job.request ? formatText(job.request) : ""}
                </p>
              </div>
              <div>
                <h4 className="job-detail-title">Benefit</h4>
                <p className="margin-bottom">
                {job.benefit ? formatText(job.benefit) : ""}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4" style={{ lineHeight: "60px" }}>
            <Form onFinish={applyJobFinish}>
              <div style={{ height: "180px" }}>
              <Form.Item>
                <Upload
                onChange={handleChange}
                showUploadList={false}
                >
                  <div style={{
                    // marginLeft: '25px',
                    color: "#A22D3B"
                  }}>
                    <i className="fas fa-paperclip mr-1"> Attach your CV (PDF only)</i>
                  </div>
                </Upload>
                {cvName && <div dangerouslySetInnerHTML={{ __html: cvName}}/>}
              </Form.Item>
                <div 
                  className="Apply-Now"
                  onClick={applyJobFinish}
                >
                  Apply Now
                </div>
              </div>
            </Form>
            <div className="related-job">Related job</div>
            {/* <a href="#">View more similar jobs</a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetail;
