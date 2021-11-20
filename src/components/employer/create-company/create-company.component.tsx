import React, { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Upload, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

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
        setLoading(false);
      });
    }
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
        <Form>
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
                      height: "200px",
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
                name="companyName"
                // initialValue="123123123"
                // rules={[{ required: true }]}
              >
                <Input
                  placeholder="Company name"
                  type="text"
                  style={{
                    height: '45px'
                  }}
                />
              </Form.Item>
              <Form.Item
                name="companyName"
                // initialValue="123123123"
                // rules={[{ required: true }]}
              >
                <Input
                  placeholder="Company address"
                  type="text"
                  style={{
                    height: '45px'
                  }}
                />
              </Form.Item>
              <Form.Item
                style= {{
                  border: "1px solid #C0C0C0"
                }}
              >
                <Editor
                  // editorState={editorState}
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  placeholder="Company Description"
                  editorStyle={{ 
                    textIndent: '10px',
                    height: '200px'
                  }}
                  // onEditorStateChange={this.onEditorStateChange}
                />
              </Form.Item>
            </div>

            <Form.Item
              style= {{
                textAlign: 'center'
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
