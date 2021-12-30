import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { createCompany } from "../../../redux/actions/employer/create-company.action";

interface Props {}

const getBase64 = (img: any, callback: any) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

const CreateCompanyComponent: FC<Props> = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDesciption] = useState({});

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Company Logo</div>
    </div>
  );

  const handleChange = (e: any) => {
    console.log(e);
    if (e.file.status === "uploading") {
      setLoading(true);
    } else {
      getBase64(e.file.originFileObj, (imageUrl: string) => {
        setImageUrl(imageUrl);
        setImage(e.file.originFileObj);
        setLoading(false);
      });
    }
  };

  const onFinish = (data: any) => {
    data = {
      ...data,
      description: description,
    };

    console.log(data);
    let fd = new FormData();
    fd.append("companyRequest", JSON.stringify(data));
    if (image !== null) {
      fd.append("companyLogo", image);
    }
    dispatch(createCompany(fd));
  };

  return (
    <div
      className="container"
      style={{
        marginTop: "130px",
        width: "60%",
      }}
    >
      <div className="text-center text-3xl font-bold"> 
        <span>Your Company Information</span>
      </div>
      <div className="job-post-box mt-5">
        <Form onFinish={onFinish}>
          <div className="credentials">
            <Form.Item>
              <Upload
                listType="picture-card"
                name="avatar"
                showUploadList={false}
                // beforeUpload={beforeUpload}
                onChange={handleChange}
              >
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="avatar"
                    style={{
                      width: "200px",
                      height: "198px",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  uploadButton
                )}
              </Upload>
            </Form.Item>
            <div>
              <Form.Item
                name="name"
                // initialValue="123123123"
                // rules={[{ required: true }]}
              >
                <Input
                  placeholder="Company name"
                  type="text"
                  style={{
                    height: "45px",
                  }}
                />
              </Form.Item>
              <Form.Item
                name="companyAddress"
                // initialValue="123123123"
                // rules={[{ required: true }]}
              >
                <Input
                  placeholder="Company address"
                  type="text"
                  style={{
                    height: "45px",
                  }}
                />
              </Form.Item>
              <Form.Item
                name="description"
                style={{
                  border: "1px solid #C0C0C0",
                }}
              >
                <CKEditor
                  editor={ClassicEditor}
                  onInit={(editor: any) => {
                    editor.editing.view.change((writer: any) => {
                      writer.setStyle(
                        "height",
                        "250px",
                        editor.editing.view.document.getRoot()
                      );
                    });
                  }}
                  onChange={(event: any, editor: any) => {
                    const data = editor.getData();
                    setDesciption(data);
                  }}
                />
              </Form.Item>
            </div>

            <Form.Item
              style={{
                textAlign: "center",
              }}
            >
              <button
                // disabled={checkComplete === 0 ? false : true}
                className="create-company"
                type="submit"
                // htmlType="submit"
                style={{
                  height: "46px",
                }}
              >
                Submit
              </button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CreateCompanyComponent;
