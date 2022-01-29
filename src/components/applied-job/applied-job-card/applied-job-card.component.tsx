import React, { createRef, FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { formatDate } from "../../../helpers/helpers";

interface Props {
  appliedJob: any;
}

const AppliedJobCard: FC<Props> = ({ appliedJob }) => {
  return (
    <Link
      to={{
        pathname:
          "/job-detail/" +
          appliedJob.job.title.toLowerCase().replaceAll(" ", "-").replaceAll("/", "\\") +
          "/" +
          appliedJob.job.id,
        // state: {
        //   jobId: jobId
        // }
      }}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div
        className="border p-2 px-3
     m-3 flex"
        style={{ borderRadius: "10px" }}
      >
        <div className="p-1">
          <img
            src={appliedJob.job.companyMetaData.companyLogo}
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
            <span>{appliedJob.job.title}</span>
          </div>
          <div
            className="flex justify-between"
            style={{
              fontSize: "16px",
            }}
          >
            <div className="">
              <span>{appliedJob.job.companyMetaData.name}</span>
            </div>
            <div className="">
              <span>$ {appliedJob.job.salaryRange}</span>
            </div>
          </div>
          <div className="flex justify-between">
            <div
              className=""
              style={{
                fontSize: "15px",
              }}
            >
              {appliedJob &&
                appliedJob.job.hashtags.map((element: any, index: any) => {
                  if (index < appliedJob.job.hashtags.length - 1)
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
              <a href={appliedJob.userCV} target="_blank" rel="noreferrer">
                Your CV
              </a>
            </div>
          </div>
          <div
            style={{
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            <span>Applied date: {formatDate(appliedJob.appliedDate)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppliedJobCard;
