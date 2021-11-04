import React, { FC } from "react";
import { Link } from "react-router-dom";

interface Props {}

const EZHire: FC<Props> = () => {
  return (
    <section id="Job-Category" className="bg-white">
      <div className="container" style={{ paddingTop: "100px" }}>
        <div className="grid lg:grid-cols-2">
          <div className="lg:grid-cols-1 text-content-left">
            <h2>EZ Hire - Get hired faster.</h2>
            <div className="text-content">
              <p>Just upload your resume.</p>
              <p>Restaurants managers will call you.</p>
              <p className="font-bold">Because you are that good!</p>
            </div>
          </div>
          <div className="lg:grid-cols-1">
            <img src="/assets/images/group_cook.png" alt="" />
          </div>
        </div>
        <div className="file-card justify-center">
          <div className="">
            <img
              src="/assets/images/cloud-upload-alt-solid.svg"
              alt=""
              className="image-upload-file"
            />
            <p>Import your resume</p>
          </div>
        </div>
        <div className="Brows-All-Category btn-submit" style={{
          fontSize: '24px',
          marginTop: '20px',
          height: '52px',
          lineHeight: '50px',
        }}>
          <span>SUBMIT</span>
        </div>
      </div>
      <div className="vertical-space-30"></div>
    </section>
  );
};

export default EZHire;
