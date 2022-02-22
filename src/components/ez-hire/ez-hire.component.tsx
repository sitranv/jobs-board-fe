import React, { FC, useState } from "react";
import { Upload, Form, Modal, Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getRs } from "../../redux/actions/rs/rs.action";
import { getBase64 } from "../../helpers/helpers";
import CardJob from "./card-job/card-job.component";
import AppliedJobCard from "../applied-job/applied-job-card/applied-job-card.component";
// import "./ez-hire.css"; // Tell webpack that Button.js uses these styles

interface Props {}

const numberOfCard = 10;

const EZHire: FC<Props> = () => {
  const dispatch = useDispatch();

  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(numberOfCard);
  const [cv, setCv] = useState(null);
  const [cvName, setCvName] = useState("");
  const [visible, setVisible] = useState(true);

  const jobs = useSelector((state: any) => {
    return state.rsReducer.jobs;
  });

  const uploadCvGetRs = (data: any) => {
    let fd = new FormData();
    if (cv !== null) {
      fd.append("cv", cv);
      setCv(null);
    } else {
    }
    dispatch(getRs(fd));
  };

  const handleChange = (e: any) => {
    if (e.file.status !== "uploading") {
      if (e.file.type !== "application/pdf") {
      } else {
        getBase64(e.file.originFileObj, () => {
          setCvName(e.file.originFileObj.name);
          setCv(e.file.originFileObj);
        });
      }
    }
  };

  const paginationChange = (value: number) => {
    setMinValue((value - 1) * numberOfCard);
    setMaxValue(value * numberOfCard);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  
  return (
    <section id="Job-Category" className="bg-white">
      <div className="container" style={{ paddingTop: "100px" }}>
        <div className="grid lg:grid-cols-2">
          <div className="lg:grid-cols-1 text-content-left">
            <h2>Fast Apply - Get hired faster.</h2>
            <div className="text-content">
              <p>Just upload your resume.</p>
              {/* <p>Restaurants managers will call you.</p> */}
              <p className="font-bold">Because you are that good!</p>
            </div>
          </div>
          <div className="lg:grid-cols-1">
            {/* <img src="/assets/images/group_cook.png" alt="" /> */}
            <img src="/assets/images/banner.jpg" alt="" style={{width: '80%'}}/>
          </div>
        </div>
        <Form>
          <Form.Item>
            <div className="file-card justify-center">
              <Upload onChange={handleChange} showUploadList={false}>
                <img
                  src="/assets/images/cloud-upload-alt-solid.svg"
                  alt=""
                  className="image-upload-file"
                />
              </Upload>
              <p>Import your resume</p>
              {cvName && <div dangerouslySetInnerHTML={{ __html: cvName }} />}
            </div>
          </Form.Item>

          <div
            className="Brows-All-Category btn-submit"
            style={{
              fontSize: "24px",
              marginTop: "20px",
              height: "52px",
              lineHeight: "50px",
              marginBottom: "50px",
            }}
            onClick={uploadCvGetRs}
          >
            <span>SUBMIT</span>
          </div>
        </Form>
        <div
          style={{
            marginTop: "50px",
            margin: "auto",
            width: "50%",
          }}
        >
          {jobs &&
            jobs.slice(minValue, maxValue).map((ele: any, ind: any) => {
              return <CardJob job={ele.job} mark={ele.mark} />;
            })}
        </div>
      </div>
      <div className="vertical-space-30"></div>
    </section>
  );
};

export default EZHire;
