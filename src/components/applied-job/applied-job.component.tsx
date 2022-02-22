import React, { FC, useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import { getAppliedJob } from '../../redux/actions/user/applied-job.action';
import AppliedJobCard from "./applied-job-card/applied-job-card.component";

interface Props {}

const AppliedJob: FC<Props> = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAppliedJob());
  }, [])

  const appliedJobs = useSelector((state: any) => {
    return state.appliedJobReducer.appliedJobs;
  })

  return (
    <div
      className="container"
      style={{
        marginTop: "130px",
        width: "60%",
      }}
    >
      <div className="text-center text-3xl font-bold">
        <span>Applied jobs</span>
        <div className="job-post-box mt-5">
          {appliedJobs && appliedJobs.map((ele: any, ind: number) => {
            return <AppliedJobCard appliedJob={ele}/>
          })}
          {appliedJobs && appliedJobs.length === 0 && <p style={{fontSize: '20px'}}>You have not applied for any job yet</p>}
        </div>
      </div>
     
    </div>
  );
};

export default AppliedJob;
