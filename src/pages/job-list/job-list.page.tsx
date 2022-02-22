import React, { } from 'react';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import Intro from '../../components/intro/intro.component';
import JobFilterBoard from '../../components/job-filter-board/job-filter-board.component';
import JobGrid from '../../components/job-grid/job-grid.component';
import SearchBox from '../../components/searchbox/searchbox.component';

const JobList = () => {

  return (
    <div>
      <Header />
      {/* <Intro />
      <SearchBox /> */}
      <section id="resent-job-post" className="background-color-full-white">
        <div className="vertical-space-100"></div>
        <div className="container-fluid text-center px-5">
          {/* <h4 className="text-left">Filter Jobs Result</h4> */}
          <div className="row">
            <JobFilterBoard />
            <JobGrid/>
          </div>
        </div>
        <div className="vertical-space-60"></div>
      </section>
      <Footer />
    </div>
  );
}

export default JobList