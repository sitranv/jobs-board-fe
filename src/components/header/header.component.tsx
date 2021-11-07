import React, { FC, useState, useEffect } from "react";
import { Form, Input, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";


import logo from "./images/logo.png";
import {login} from '../../redux/actions/auth/login/login.action';

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
  const [isModalVisible, setIsModalVisible] = useState(false);

  const dispatch = useDispatch();

  const handleCancel = () => {
    setIsModalVisible(!isModalVisible);
  };

  const onFinish = (data: any) => {
    dispatch(login(data));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <header className="header">
      <div className="header_container background-header-color">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="header_content d-flex flex-row align-items-center justify-content-start mt-1">
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
                    {/* <li><a href="about_us.html">ABOUT</a></li> */}
                    {/* <li><a href="contact.html">CONTACT</a></li> */}
                  </ul>
                  <div className="Post-Jobs">
                    <a href="/post-job" className="">
                      POST JOB
                    </a>
                  </div>
                  <div
                    className="Sign-in"
                    onClick={() => {
                      setIsModalVisible(!isModalVisible);
                    }}
                  >
                    <a>SIGN IN</a>
                  </div>
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
                      <h5>Welcome back</h5>
                      <p>Sign in to continue your job hunting process</p>
                    </div>
                    <div className="sigin-form">
                      <Form
                        validateMessages={validateMessages}
                        onFinish={onFinish}
                      >
                        <div className="credentials">
                          <Form.Item
                            name="email"
                            rules={[{ required: true }, { type: "email" }]}
                            style={{ marginBottom: "5px" }}
                          >
                            <Input placeholder="Email*"/>
                          </Form.Item>
                          <Form.Item
                            name="password"
                            rules={[{ required: true }]}
                          >
                            <Input placeholder="Password*" type="password"/>
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
                      <div className="register">
                        Don't have an account? <a>Register</a>
                      </div>
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
