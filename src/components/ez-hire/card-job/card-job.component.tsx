import React, { FC } from "react";
import { Link } from "react-router-dom";

import { formatDate } from "../../../helpers/helpers";
import "./card-job.css";
interface Props {
  job: any;
  mark: any;
}

const CardJob: FC<Props> = (props) => {
  const { job, mark } = props;

  return (
    <Link
      to={{
        pathname:
          "/job-detail/" +
          job.title.toLowerCase().replaceAll(" ", "-") +
          "/" +
          job.id,
        // state: {
        //   jobId: jobId
        // }
      }}
      style={{ textDecoration: "none" }}
    >
      <div
        className="job-details job-details-card"
        style={{
          height: "170px",
          padding: "20px",
        }}
      >
        <div className="restaurant-image">
          <img
            className="detail-icon-image"
            src={job.companyMetaData ? job.companyMetaData.companyLogo : ""}
            style={{
              width: "140px",
              height: "140px",
            }}
            alt="company-logo"
          />
        </div>
        <div
          className="job-information"
          style={
            {
              textAlign: 'left'
            }
          }
        >
          <div
            className="job-name"
            style={{
              fontSize: "20px",
              marginTop: 0,
            }}
          >
            {<span>{job.title}</span>}
          </div>
          <div
            className="restaurant"
            style={{
              fontSize: "16px",
              fontWeight: 500,
              margin: 0,
            }}
          >
            {<span>{job.companyMetaData ? job.companyMetaData.name : ""}</span>}
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
          <div className="job-comp mt-2">
            {/* <div className="salary">{job.salaryRange}</div> */}
            <div className="detail-time">
              <i
                className="fa fa-clock"
                style={{ marginTop: "3px", marginRight: "3px" }}
              ></i>
              <span>posted today</span>
              <p
                style={{
                  color: "#46d369",
                  marginLeft: "20px",
                  fontWeight: "bold",
                }}
              >
                {Math.round(10000 * mark) / 100}% Match
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardJob;
