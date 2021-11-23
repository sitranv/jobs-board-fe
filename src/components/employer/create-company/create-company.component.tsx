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
    // console.log(description);
    data = {
      ...data,
      description: JSON.stringify(data.description),
    };

    let fd = new FormData();
    fd.append("companyRequest", JSON.stringify(data));
    // fd.append('description', JSON.stringify(data.description))
    // fd.append('name', data.name);
    if (image !== null) {
      fd.append("companyLogo", image);
    }
    console.log(fd);
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
                  data="<p>Hello from CKEditor 5!</p>"
                  onInit={(editor: any) => {
                    // You can store the "editor" and use when it is needed.
                    console.log("Editor is ready to use!", editor);
                  }}
                  onChange={(event: any, editor: any) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                  }}
                  onBlur={(event: any, editor: any) => {
                    console.log("Blur.", editor);
                  }}
                  onFocus={(event: any, editor: any) => {
                    console.log("Focus.", editor);
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
