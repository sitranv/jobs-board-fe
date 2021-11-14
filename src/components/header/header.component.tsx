import React, { FC, useState, useEffect } from "react";
import { Form, Input, Modal, Select, Radio } from "antd";
import { useDispatch, useSelector } from "react-redux";

import logo from "./images/logo.png";
import defaultAvatar from "./images/default-profile-pic.png";
import { login } from "../../redux/actions/auth/login/login.action";
import { url } from "inspector";
const { Option } = Select;

interface Props {}

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const Header: FC<Props> = () => {
  const dispatch = useDispatch();

  const checkComplete = useSelector((state: any) => {
    return state.progressReducer.progress;
  });

  const isLoggedIn = useSelector((state: any) => {
    return state.profileReducer.isLoggedIn;
  });

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form, setForm] = useState("LOGIN");
  const [size, setSize] = React.useState("ROLE_USER");

  const handleSizeChange = (e: any) => {
    setSize(e.target.value);
  };

  const handleCancel = () => {
    setIsModalVisible(!isModalVisible);
  };

  const onFinish = (data: any) => {
    console.log(data);
    dispatch(login(data));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const changeForm = () => {
    switch (form) {
      case "LOGIN":
        setForm("REGISTER");
        break;
      case "REGISTER":
        setForm("LOGIN");
        break;
    }
  };

  return (
    <header className="header">
      <div className="header_container background-header-color">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="header_content d-flex flex-row align-items-center justify-content-start mt-3 mb-1">
                <div className="logo_container">
                  <a href="/">
                    <img src={logo} className="logo-text" alt="" />
                  </a>
                </div>
                <nav className="main_nav_contaner ml-auto">
                  <ul className="main_nav">
                    <li>
                      <a href="/#">HOME</a>
                    </li>
                    {/* <li className="dropdown active ">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">Home
                      <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                      <li><a href="index.html">Home variation 1</a></li>
                      <li><a href="index2.html">Home variation 2</a></li>
                    </ul>
                  </li>
                  <li className="dropdown ">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">Job
                      <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                      <li><a href="job_category.html">Job List</a></li>
                      <li><a href="job_detail.html">Job Detail</a></li>
                    </ul>
                  </li> */}
                    {/* <li><a href="blog_page.html">BLOG</a></li> */}
                    <li>
                      <a href="/ez-hire">EZ-HIRE</a>
                    </li>
                    <li>
                      <div className="Post-Jobs">
                        <a href="/post-job" className="">
                          POST JOB
                        </a>
                      </div>
                    </li>
                    <li>
                      {!isLoggedIn ? (
                        <div
                          className="Sign-in"
                          onClick={() => {
                            setIsModalVisible(!isModalVisible);
                          }}
                        >
                          <a>SIGN IN</a>
                        </div>
                      ) : (
                        // <div >
                            <img 
                             className="profile-button"
                              src={defaultAvatar}
                              style={{
                                position: 'relative'
                              }}
                              alt=""
                            />
                        // </div>
                      )}
                    </li>
                    {/* <li><a href="contact.html">CONTACT</a></li> */}
                  </ul>
                  {/* <div className="Post-Jobs">
                    <a href="/post-job" className="">
                      POST JOB
                    </a>
                  </div> */}

                  <Modal
                    title=""
                    visible={isModalVisible}
                    onOk={() => {}}
                    onCancel={handleCancel}
                    footer=""
                    // cancelButtonProps={handleCancel}
                    // style={{float: 'right', marginRight: '100px'}}
                  >
                    <div className="modal-introduce">
                      <h5 style={{ fontSize: "20px" }}>
                        {form === "LOGIN" ? "Welcome back" : "Sign Up Now!"}
                      </h5>
                      <p>
                        {form === "LOGIN"
                          ? "Sign in to continue your job hunting process."
                          : "Your dream job awaits you."}
                      </p>
                    </div>
                    {form === "LOGIN" ? (
                      //form login
                      <div className="sigin-form">
                        <Form
                          validateMessages={validateMessages}
                          onFinish={onFinish}
                        >
                          <div className="credentials">
                            <Form.Item
                              name="email"
                              // rules={[{ required: true }, { type: "email" }]}
                              style={{ marginBottom: "5px" }}
                              initialValue="user@localhost.com"
                            >
                              <Input
                                placeholder="Email*"
                                defaultValue="user@localhost.com"
                              />
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
                          {/* <button className="btn-signin" type="submit">
                          <span>SIGN IN</span>
                        </button> */}
                        </Form>
                      </div>
                    ) : (
                      //form register
                      <div className="sigin-form">
                        <Form
                          validateMessages={validateMessages}
                          // onFinish={onFinish}
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
                            <Form.Item>
                              <Radio.Group
                                value={size}
                                onChange={handleSizeChange}
                              >
                                <Radio.Button
                                  value="ROLE_USER"
                                  style={{ marginRight: "10px" }}
                                >
                                  User
                                </Radio.Button>
                                <Radio.Button value="ROLE_EMPLOYER">
                                  Employer
                                </Radio.Button>
                              </Radio.Group>
                            </Form.Item>
                          </div>
                          <Form.Item>
                            <button
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

                          {/* <button className="btn-signin" type="submit">
                        <span>SIGN IN</span>
                      </button> */}
                        </Form>
                      </div>
                    )}
                    <div className="register">
                      Don't have an account?{" "}
                      <a onClick={changeForm}>
                        {form === "LOGIN" ? "Register" : "Login"}
                      </a>
                    </div>
                  </Modal>
                  <div className="hamburger menu_mm menu-vertical">
                    <i className="large material-icons font-color-white menu_mm menu-vertical">
                      menu
                    </i>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
