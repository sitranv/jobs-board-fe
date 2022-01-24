import React, { } from 'react';
import Footer from '../../components/footer/footer.component';
import Header from '../../components/header/header.component';
import AppliedJob from '../../components/applied-job/applied-job.component';

const AppliedJobPage = () => {
    return (
      <div style={{ backgroundColor: "white" }}>
          <Header/>
            <AppliedJob/>
          <Footer/>
      </div>
    );
}

export default AppliedJobPage;