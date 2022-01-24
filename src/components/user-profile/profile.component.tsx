import React, { createRef, FC, useEffect, useState } from "react";
import { Form, Input, Upload, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../redux/actions/profile/profile.action";

interface Props {}

const UserProfile: FC<Props> = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const onFinish = (data: any) => {
    dispatch(updateProfile(data))
  };

  const profile = useSelector((state: any) => {
    return state.profileReducer.currentUser;
  });

  useEffect(() => {
    form.setFieldsValue({
      firstName: profile.firstName,
      lastName: profile.lastName,
      email: profile.email,
      password: "********",
    });
  }, [profile]);

  return (
    <div
      className="container"
      style={{
        marginTop: "130px",
        width: "60%",
      }}
    >
      <div className="text-center text-3xl font-bold">
        <span>User profile</span>
      </div>
      <div className="job-post-box mt-5">
        <Form onFinish={onFinish} form={form}>
          <div className="credentials">
            <div>
              <div
                className="flex"
                style={
                  {
                    // justifyContent: 'space-between'
                  }
                }
              >
                <Form.Item
                  name="firstName"
                  // initialValue="123123123"
                  // rules={[{ required: true }]}
                  className="mr-5"
                >
                  <Input
                    placeholder="First name"
                    type="text"
                    style={{
                      height: "45px",
                      width: "400px",
                    }}
                    name="firstName"
                  />
                </Form.Item>
                <Form.Item
                  name="lastName"
                  // initialValue="123123123"
                  // rules={[{ required: true }]}
                >
                  <Input
                    placeholder="Last name"
                    type="text"
                    style={{
                      height: "45px",
                      width: "400px",
                    }}
                  />
                </Form.Item>
              </div>
              <Form.Item
                name="email"
                // initialValue="123123123"
                // rules={[{ required: true }]}
              >
                <Input
                  placeholder="Email"
                  type="text"
                  style={{
                    height: "45px",
                  }}
                />
              </Form.Item>
              <Form.Item
                name="password"
                // initialValue="123123123"
                // rules={[{ required: true }]}
              >
                <Input
                  placeholder="Password"
                  type="text"
                  style={{
                    height: "45px",
                  }}
                  disabled={true}
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
                Save
              </button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default UserProfile;
