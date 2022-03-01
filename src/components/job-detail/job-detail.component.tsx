import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Upload, Form } from "antd";
import { Link, useLocation  } from "react-router-dom";

import { getJobDetail } from "../../redux/actions/job-detail/job-detail.action";
import { formatText, formatDate } from "../../helpers/helpers";
import { applyJob } from "../../redux/actions/user/apply-job.action";
import { getBase64 } from "../../helpers/helpers";
import { getJobRelated } from "../../redux/actions/job-detail/related-job.action";

import "./job-detail.css";
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
  }, [jobId]);

  const { job, isApplied } = useSelector((state: any) => {
    return state.jobDetailReducer;
  });

  const jobsRelated = useSelector((state: any) => {
    return state.jobRelatedReducer.jobs;
  });

  const { isLoggedIn } = useSelector((state: any) => {
    return state.profileReducer;
  });


  const { status } = useSelector((state: any) => {
    return state.applyJobReducer;
  });

  const handleChange = (e: any) => {
    if (e.file.status !== "uploading") {
      if (e.file.type !== "application/pdf") {
        setCvName("PDF is required!");
      } else {
        getBase64(e.file.originFileObj, () => {
          setCvName(e.file.originFileObj.name);
          setCv(e.file.originFileObj);
        });
      }
    }
  };

  const applyJobFinish = (data: any) => {
    let fd = new FormData();
    if (!isLoggedIn) {
      setCvName("<p style='color: red'>You need to login!</p>");
    } else {
      if (cv !== null) {
        fd.append("userCv", cv);
        setCv(null);
      } else {
        setCvName("<p style='color: red'>Import your PDF CV!</p>");
      }
      dispatch(applyJob(fd, jobId));
    }
  };

  return (
    <section id="job-Details">
      <div className="container-fluid background-color-full-white job-Details">
        <div
          style={{
            color: "black",
            paddingLeft: "50px",
            paddingBottom: "30px",
          }}
        >
          <Link to={{ pathname: "/job-list" }}>
            <i
              className="fas fa-arrow-left"
              style={{ color: "#A22D3B", marginRight: "2px" }}
            ></i>
          </Link>
          Back to Jobs
        </div>
        <div className="Exclusive-Product row justify-content-between">
          <div className="col-md-8">
            <div className="job-details">
              <div className="restaurant-image">
                <img
                  className="detail-icon-image"
                  src={
                    job.companyMetaData ? job.companyMetaData.companyLogo : ""
                  }
                  alt="company-logo"
                />
              </div>
              <div
                className="job-information"
                style={{
                  width: "335px",
                  height: "110px",
                }}
              >
                <div
                  className="job-name"
                  style={{
                    fontSize: "20px",
                    marginTop: 0,
                  }}
                >
                  {job.title}
                </div>
                <div
                  className="restaurant"
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    margin: 0,
                  }}
                >
                  {job.companyMetaData ? job.companyMetaData.name : ""}
                </div>
                <div
                  className="location"
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
                <div className="job-comp">
                  {/* <div className="salary">{job.salaryRange}</div> */}
                  <div className="detail-time">
                    <span>Due date: <span style={{color: 'red'}}>{formatDate(job.deadline)}</span></span>
                  </div>
                  <div className="detail-time">
                    <i
                      className="fa fa-clock"
                      style={{ marginTop: "3px", marginRight: "3px" }}
                    ></i>
                    <span>{formatDate(job.createdDate)}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="Job-Description">
              <div>
                <h4 className="job-detail-title">
                  Job Description / Responsibility
                </h4>
                <div>
                  {job.description && job.description.includes("\n") ? (
                    formatText(job.description)
                  ) : (
                    <div
                      style={{ lineHeight: "5px" }}
                      dangerouslySetInnerHTML={{ __html: job.description }}
                    />
                  )}
                  {/* {job.description ? formatText(job.description) : ""} */}
                </div>
              </div>

              <div>
                <h4 className="job-detail-title">Experience & Requirement</h4>
                <p className="margin-bottom">
                {job.request && job.request.includes("\n") ? (
                    formatText(job.request)
                  ) : (
                    <div
                      style={{ lineHeight: "5px" }}
                      dangerouslySetInnerHTML={{ __html: job.request }}
                    />
                  )}
                </p>
              </div>
              <div>
                <h4 className="job-detail-title">Benefit</h4>
                <p className="margin-bottom">
                {job.benefit && job.benefit.includes("\n") ? (
                    formatText(job.request)
                  ) : (
                    <div
                      style={{ lineHeight: "5px" }}
                      dangerouslySetInnerHTML={{ __html: job.benefit }}
                    />
                  )}
                </p>
              </div>
              <div>
                <h4 className="job-detail-title">Salary Range</h4>
                <p className="margin-bottom">
                {job.salaryRange && <p>{job.salaryRange}</p>}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4" style={{ lineHeight: "60px" }}>
            <Form onFinish={applyJobFinish}>
              <div style={{ height: "180px" }}>
                <Form.Item>
                  <div className="">
                    <Upload onChange={handleChange} showUploadList={false}>
                      <i
                        className="fas fa-paperclip mr-1"
                        style={{
                          color: "#A22D3B",
                        }}
                      >
                        Attach your CV (PDF only)
                      </i>
                    </Upload>
                  </div>
                  <div className="flex">
                    {cvName && (
                      <div dangerouslySetInnerHTML={{ __html: cvName }} />
                    )}
                    {status && (
                      <i
                        className="fas fa-check ml-2"
                        style={{ color: "#06FF00", fontSize: "15px" }}
                      ></i>
                    )}
                  </div>

                  {/* check isApplied? */}
                  {isApplied !== null && (
                    <div className="flex">
                      <i
                        className="fas fa-check ml-2"
                        style={{ color: "#06FF00", fontSize: "15px" }}
                      >
                        Applied
                        <a
                          href={isApplied.userCv}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            marginLeft: "5px",
                            paddingBottom: "2px",
                            color: "#1572A1",
                          }}
                        >
                          Your CV
                        </a>
                      </i>
                    </div>
                  )}
                </Form.Item>
                <div className="Apply-Now" onClick={applyJobFinish}>
                  Apply Now
                </div>
              </div>
            </Form>
            <div className="related-job mt-3">
              <h4 style={{ fontSize: "20px" }}>Related jobs</h4>
              {jobsRelated &&
                jobsRelated.map((ele: any, ind: number) => {
                  return (
                    <Link
                      to={{
                        pathname:
                          "/job-detail/" +
                          ele.title.toLowerCase().replaceAll(" ", "-").replaceAll("/", "-").replaceAll("#", "") +
                          "/" +
                          ele.id,
                        // state: {
                        //   jobId: jobId
                        // }
                      }}
                      style={{
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      <hr
                        style={{
                          borderTop: "1px solid black",
                          marginRight: "30px",
                        }}
                      />
                      <div className="job-details">
                        <div className="restaurant-image">
                          <img
                            className="detail-icon-image"
                            src={
                              ele.companyMetaData
                                ? ele.companyMetaData.companyLogo
                                : ""
                            }
                            alt="company-logo"
                            style={{
                              width: "100px",
                              height: "100px",
                            }}
                          />
                        </div>
                        <div className="job-information job-related">
                          <p
                            className=""
                            style={{
                              fontSize: "16px",
                              marginTop: 0,
                              height: "auto",
                              lineHeight: "1.5em",
                              overflow: "hidden",
                            }}
                          >
                            {ele.title}
                          </p>
                          <p
                            className="restaurant"
                            style={{
                              fontSize: "14px",
                              margin: 0,
                              height: "3em",
                              lineHeight: "1.5em",
                              overflow: "hidden",
                            }}
                          >
                            {ele.companyMetaData
                              ? ele.companyMetaData.name
                              : ""}
                          </p>
                          <p
                            className="location"
                            style={{
                              color: "#9b9b9b",
                              fontSize: "14px",
                              fontWeight: 500,
                            }}
                          >
                            {ele.place &&
                              ele.place.map((element: any, index: any) => {
                                if (index < ele.place.length - 1)
                                  return element + ", ";
                                else return element;
                              })}
                          </p>
                          <div className="job-comp mt-2">
                            <div className="detail-time">
                              <i
                                className="fa fa-clock"
                                style={{
                                  marginTop: "3px",
                                  marginRight: "3px",
                                }}
                              ></i>
                              <span>{formatDate(ele.createdDate)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
          {/* <a href="#">View more similar jobs</a> */}
        </div>
      </div>
    </section>
  );
};

export default JobDetail;
