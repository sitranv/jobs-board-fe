import React, { FC } from "react";

interface Props {}

const PostJob: FC<Props> = () => {
  return (
    <div
      className="container"
      style={{
        marginTop: "145px",
        width: '80%'
      }}
    >
      <div className="text-center text-3xl font-bold">
        <span>POST A JOB</span>
      </div>
      <div className="job-post-box">
        <form>
          <div className="form-group">
            <label>Job title</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputJobtitle"
              placeholder="Enter your job title"
              required
            />
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Company</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputCompany"
                  placeholder="Full name of company"
                  required
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Loction</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputLoction"
                  placeholder="Company Address"
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="form-group ">
                <label>Company Logo</label>
                <div className="box text-center">
                  <input
                    type="file"
                    name="file-5[]"
                    id="file-5"
                    className="inputfile inputfile-4"
                    data-multiple-caption="{count} files selected"
                    multiple
                  />
                  <label>
                    <i>
                      <img src="imags/job-post.png" className="imtges" alt="" />
                    </i>
                    <span>
                      Drop your file here, or{" "}
                      <i className="font-color-orange">Browse</i>
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="form-group">
                <label>Document</label>
                <div className="box text-center">
                  <input
                    type="file"
                    name="file-7[]"
                    id="file-7"
                    className="inputfile1 inputfile-4"
                    data-multiple-caption="{count} files selected"
                    multiple
                  />
                  <label>
                    <i>
                      <img src="imags/job-post.png" className="imtges" alt="" />
                    </i>
                    <span>
                      Drop your file here, or{" "}
                      <i className="font-color-orange">Browse</i>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label>Short Description</label>
            <textarea
              className="form-control small"
              id="exampleInputShortDescription"
              placeholder="Write short description"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label>Write full description</label>
            <textarea
              className="form-control large"
              id="exampleInputLongDescription"
              placeholder="Write short description"
              required
            ></textarea>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="form-group mybtn" id="Job-Nature">
                <label>Job Nature</label>
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <a className="Job-Nature active1">Full Time</a>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <a className="Job-Nature">Part Time</a>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <a className="Job-Nature">Freelancer</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="form-group">
                <label>Salary Range:</label>
                <select className="form-control" id="sel1" name="sellist1">
                  <option>5,000 - 10,000</option>
                  <option>3,000 - 5,000</option>
                  <option>2,000 - 1,000</option>
                  <option>7,000 - 10,000</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label>Agree with term and conditions</label>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input "
                id="exampleCheck1"
                required
              />
              <label className="form-check-label text-left">
                Lorem ipsum tempus amet conubia adipiscing fermentum viverra
                gravida, mollis suspendisse pretium dictumst inceptos mattis
                euismod lorem nulla magna duis nostra sodales luctus nulla
              </label>
            </div>
          </div>
          <button type="submit" className="btn Post-Job-Offer">
            Post Job Offer
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
