import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

import CardJob from "../card-job/card-job.component";
import { getJobGrid } from "../../redux/actions/job-grid/job.action";
import { beginProgress, completeProgress } from "../../redux/actions/progress/progress.action";

interface Props {}

const JobGrid: FC<Props> = () => {
  const dispatch = useDispatch();

  const numOfJobs = 20;
  const [page, setPage] = useState(0);

  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(beginProgress());
    dispatch(getJobGrid(numOfJobs, search));
  }, []);

  const jobs = useSelector((state: any) => {
    return state.jobGridReducer.jobs.content;
  });

  const loadJob = () => {
    setPage(page + 1);
    console.log(page);
    setTimeout(() => {
      dispatch(beginProgress());
      dispatch(getJobGrid(numOfJobs + 5 * page, search));
    }, 500);
  };

  const searchJob = () => {

  }

  return (
    <div className="col-lg-10">
      <div className="detail">
        <div
          className="flex border-2 rounded"
          style={{
            width: "100%",
            border: "1px solid black",
          }}
        >
          <input
            type="text"
            className="px-4 py-2"
            placeholder="Job title, company, keywords..."
            style={{
              width: "100%",
            }}
            value={search}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              setSearch(e.currentTarget.value)
            }}
          />
          <button 
            className="flex items-center justify-center px-4 border-l"
            onClick={searchJob}
          >
            <svg
              className="w-6 h-6 text-gray-600"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
          </button>
        </div>
        <InfiniteScroll
          dataLength={numOfJobs + 5 * page}
          next={() => {
            loadJob();
          }}
          hasMore={true}
          loader={""}
        >
          <div className="grid b1814:grid-cols-6 b1524:grid-cols-5 b1280:grid-cols-4 b1000:grid-cols-3 mt-3">
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
          </div>
        </InfiniteScroll>
      </div>
      <div className="vertical-space-20"></div>
      <div className="vertical-space-25"></div>
    </div>
  );
};

export default JobGrid;
