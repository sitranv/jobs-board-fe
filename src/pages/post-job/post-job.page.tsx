import React from "react";

import PostJobComponent from "../../components/post-job/post-job.component";
import Footer from "../../components/footer/footer.component";
import Header from "../../components/header/header.component";

const PostJob = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Header />
      <PostJobComponent />
      <Footer />
    </div>
  );
};

export default PostJob;
