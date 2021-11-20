import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input } from "antd";

import { login } from "../../../redux/actions/auth/login/login.action";

interface Props {
  validateMessages: object;
}

const Login: FC<Props> = (props) => {
  const dispatch = useDispatch();

  const checkComplete = useSelector((state: any) => {
    return state.progressReducer.progress;
  });

  const {validateMessages} = props;

  const onFinish = (data: any) => {
    console.log(data);
    dispatch(login(data));
  };

  return (
    <>
      <div className="sigin-form">
        <Form validateMessages={validateMessages} onFinish={onFinish}>
          <div className="credentials">
            <Form.Item
              name="email"
              // rules={[{ required: true }, { type: "email" }]}
              style={{ marginBottom: "5px" }}
              initialValue="user@localhost.com"
            >
              <Input placeholder="Email*" defaultValue="user@localhost.com" />
            </Form.Item>
            <Form.Item
              name="password"
              initialValue="123123123"
              // rules={[{ required: true }]}
            >
              <Input
                placeholder="Password*"
                type="password"
                defaultValue="123123123"
              />
            </Form.Item>
          </div>
          <Form.Item>
            <button
              disabled={checkComplete === 0 ? false : true}
              className="btn-signin"
              type="submit"
              // htmlType="submit"
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

export default Login;
