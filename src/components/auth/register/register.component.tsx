import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Radio } from "antd";
import { Link } from "react-router-dom";
import { register } from "../../../redux/actions/auth/register/register.action";

interface Props {
  validateMessages: object;
}

const Register: FC<Props> = (props) => {
  const dispatch = useDispatch();

  const checkComplete = useSelector((state: any) => {
    return state.progressReducer.progress;
  });

  const {status, error, data } = useSelector((state: any) => state.registerReducer)

  const [role, setRole] = useState("ROLE_USER");

  const { validateMessages } = props;

  const onFinish = (data: any) => {
    dispatch(register({...data, role: 'ROLE_USER'}));
  };

  const handleSizeChange = (e: any) => {
    setRole(e.target.value);
  };

  return (
    <>
      <div className="sigin-form">
       
        {!status && <span className="text-danger" style={{ fontSize: "15px", }}>{error.message}</span> }
        {status && data !== {} && <span className="text-success" style={{ fontSize: "15px", }}>{data.message}</span> }
       
        <Form
          validateMessages={validateMessages}
          onFinish={onFinish}
        >
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
            <Link to={{
              pathname: '/employer'
            }}>Sign up is Employer</Link>
            {/* <Form.Item
              name="role"
              initialValue={role}
            >
              <Radio.Group value={role} onChange={handleSizeChange}>
                <Radio.Button value="ROLE_USER" style={{ marginRight: "10px" }}>
                  User
                </Radio.Button>
                <Radio.Button value="ROLE_EMPLOYER">Employer</Radio.Button>
              </Radio.Group>
            </Form.Item> */}
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
