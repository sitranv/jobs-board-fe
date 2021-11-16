import React, { useEffect } from 'react'
import Header from '../../components/header/header.component'
import Intro from '../../components/intro/intro.component'
import JobDetail from '../../components/job-detail/job-detail.component'
import SearchBox from '../../components/searchbox/searchbox.component'

const JobDetailPage = (props: any) => {

  let jobId = "";
  if(props.location.state) {
    jobId = props.location.state.jobId;
  } else {
    let path = window.location.pathname;
    let arrayPath = path.split("/");
    jobId = arrayPath[arrayPath.length - 1]
  }

  return (
    <>
      <Header />
      {/* <Intro /> */}
      <JobDetail jobId={jobId}/>
    </>
  )
}

export default JobDetailPage