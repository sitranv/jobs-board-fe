import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardJob from "../card-job/card-job.component";
import { getJobGrid } from "../../redux/actions/job-grid/job.action";
interface Props {}

const JobGrid: FC<Props> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobGrid());
  }, []);

  const jobs = useSelector((state: any) => {
    return state.jobGridReducer.jobs.content;
  });

  return (
    <div className="col-lg-10">
      <div className="detail">
        <div className="grid b1814:grid-cols-6 b1524:grid-cols-5 b1280:grid-cols-4 b1000:grid-cols-3">
          {jobs && jobs.map((job: any, index: number) => {
              return (
                <div className="mb-3">
                  <CardJob
                    jobName={job.jobRoles[0].readableName}
                    restaurantInfo={job.restaurantMetadata}
                    salary="20"
                  />
                </div>
              );
            })}
        </div>
      </div>

      <div className="vertical-space-20"></div>
      <div className="vertical-space-25"></div>
      {/* <div className="job-list">
        <ul className="pagination justify-content-end margin-auto">
          <li className="page-item"><a className="page-link pdding-none" href="javascript:void(0);"><i
            className=" material-icons keyboard_arrow_left_right">keyboard_arrow_left</i></a></li>
          <li className="page-item"><a className="page-link active" href="javascript:void(0);">1</a></li>
          <li className="page-item"><a className="page-link" href="javascript:void(0);">2</a></li>
          <li className="page-item"><a className="page-link" href="javascript:void(0);">3</a></li>
          <li className="page-item"><a className="page-link" href="javascript:void(0);">4</a></li>
          <li className="page-item">
            <a className="page-link pdding-none" href="javascript:void(0);"> <i
              className=" material-icons keyboard_arrow_left_right">keyboard_arrow_right</i></a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default JobGrid;
