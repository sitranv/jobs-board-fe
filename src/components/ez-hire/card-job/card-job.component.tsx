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
          job.title.toLowerCase().replaceAll(" ", "-").replaceAll("/","\\") +
          "/" +
          job.id,
        // state: {
        //   jobId: jobId
        // }
      }}
      style={{ textDecoration: "none", color: "black" }}
    >
      {/* <div
        className="job-details job-details-card"
        style={{
          height: "170px",
          padding: "20px",
          backgroundColor: "#EEEEEE",
          marginBottom: "10px",
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
          style={{
            textAlign: "left",
          }}
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
          <div className="job-comp mt-2">
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
      </div> */}

      <div
        className="border p-2 px-3
     m-3 flex"
        style={{ borderRadius: "10px" }}
      >
        <div className="p-1">
          <img
            src={job.companyMetaData.companyLogo}
            alt="Company logo"
            style={{
              width: "140px",
              height: "140px",
              objectFit: "contain",
            }}
          />
        </div>
        <div
          className="text w-100 ml-4"
          style={{
            fontWeight: "normal",
            textAlign: "left",
          }}
        >
          <div
            style={{
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            <span>{job.title}</span>
          </div>
          <div
            className="flex justify-between"
            style={{
              fontSize: "16px",
            }}
          >
            <div className="">
              <span>{job.companyMetaData.name}</span>
            </div>
            <div className="">{/* <span>$ {job.salaryRange}</span> */}</div>
          </div>
          <div className="flex justify-between">
            <div
              className=""
              style={{
                fontSize: "15px",
              }}
            >
              {job &&
                job.place.map((element: any, index: any) => {
                  if (index < job.place.length - 1)
                    return (
                      <span
                        className="mr-2"
                        style={{
                          backgroundColor: "#DBE2EF",
                          borderRadius: "3px",
                          padding: "2px",
                        }}
                      >
                        {element}
                      </span>
                    );
                  else
                    return (
                      <span
                        style={{
                          backgroundColor: "#DBE2EF",
                          borderRadius: "3px",
                          padding: "2px",
                        }}
                      >
                        {element}
                      </span>
                    );
                })}
            </div>
            <div className="">
              {/* <a href={userCV} target="_blank" rel="noreferrer">
              Your CV
            </a> */}
            </div>
          </div>
          <div
            style={{
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            <p
              style={{
                color: "#46d369",
                // marginLeft: "20px",
                fontWeight: "bold",
              }}
            >
              {Math.round(10000 * mark) / 100}% Match
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardJob;
