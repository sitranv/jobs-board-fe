import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Radio } from "antd";
import { Link } from "react-router-dom";
import {
  register,
  confirm,
} from "../../../redux/actions/auth/register/register.action";

interface Props {
  validateMessages: object;
}

const Register: FC<Props> = (props) => {
  const dispatch = useDispatch();

  const checkComplete = useSelector((state: any) => {
    return state.progressReducer.progress;
  });

  const { status, error, data, confirmStatus, confirmed } = useSelector(
    (state: any) => state.registerReducer
  );

  const [role, setRole] = useState("ROLE_USER");

  const { validateMessages } = props;

  const onFinish = (data: any) => {
    console.log(data);
    if (!confirmStatus) {
      dispatch(register({ ...data, role: "ROLE_USER" }));
    } else {
      let fd = new FormData();
      fd.append("token", data.token);
      dispatch(confirm(fd));
    }
  };

  const handleSizeChange = (e: any) => {
    setRole(e.target.value);
  };

  return (
    <>
      <div className="sigin-form">
        {!status && (
          <span className="text-danger" style={{ fontSize: "15px" }}>
            {error.message}
          </span>
        )}
        {!confirmed && status && data !== {} && (
          <span className="text-success" style={{ fontSize: "15px" }}>
            {data.message}
          </span>
        )}
        {confirmed && (
          <span className="text-success" style={{ fontSize: "15px" }}>
            {"Confirm email successful, please login!" }
          </span>
        )}
        <Form validateMessages={validateMessages} onFinish={onFinish}>
          <div className="credentials">
            <Form.Item
              name="firstName"
              rules={[{ required: true }]}
              style={{ marginBottom: "5px" }}
            >
              <Input placeholder="First Name*" />
            </Form.Item>
            <Form.Item
              name="lastName"
              rules={[{ required: true }]}
              style={{ marginBottom: "5px" }}
            >
              <Input placeholder="Last Name*" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[{ required: true }, { type: "email" }]}
              style={{ marginBottom: "5px" }}
            >
              <Input placeholder="Email*" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true }]}
              style={{ marginBottom: "7px" }}
            >
              <Input placeholder="Password*" type="password" />
            </Form.Item>
            {confirmStatus && (
              <Form.Item
                name="token"
                rules={[{ required: true }]}
                style={{ marginBottom: "7px" }}
              >
                <Input placeholder="Token" type="text" />
              </Form.Item>
            )}
            <a href="http://it-jobs-board-admin.surge.sh/manage/register">
              Sign up is Employer
            </a>
          </div>
          <Form.Item>
            <button
              className="btn-signin"
              type="submit"
              disabled={checkComplete === 0 ? false : true}
              style={{
                height: "46px",
              }}
            >
              Submit
            </button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Register;
