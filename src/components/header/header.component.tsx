import React, { FC, useState, useEffect } from "react";
import { Modal, Dropdown, Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { Link } from "react-router-dom";
import { Form, Input, Button } from "antd";

import logo from "./images/logo.png";
import defaultAvatar from "./images/default-profile-pic.png";
import { login, logout } from "../../redux/actions/auth/login/login.action";
import Login from "../auth/login/login.component";
import Register from "../auth/register/register.component";
import { changePassword }  from "../../redux/actions/user/change-password.action";

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

const validateMessagesChangePw = {
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

  const { currentUser, response, isLoggedIn } = useSelector((state: any) => {
    return state.profileReducer;
  });

  // if (!response.isCreatedCompany && !window.location.pathname.includes('/create-company')) {
  //   window.location.href = '/create-company'
  // }

  const [isModalAuthVisible, setIsModalAuthVisible] = useState(false);

  const [isModalUserVisible, setIsModalUserVisible] = useState(false);

  const [isModalChangePassword, setIsModalChangePassword] = useState(false);

  // const []
  const [form, setForm] = useState("LOGIN");

  const handleCancel = () => {
    setIsModalAuthVisible(false);
    setIsModalChangePassword(false);
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

  const menuProfile = (
    <Menu
      style={{
        width: "150px",
        marginTop: 0,
      }}
    >
      <Menu.Item>
        <Link
          to={{
            pathname: "/user/profile",
          }}
          style={{ fontWeight: 450 }}
        >
          Profile
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link
          to={{
            pathname: "/user/applied-jobs",
          }}
        >
          Applied jobs
        </Link>
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          setIsModalChangePassword(true);
        }}
        style={{ fontWeight: 450 }}
      >
        Change password
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          setIsModalAuthVisible(false);
          dispatch(logout());
        }}
      >
        Logout
      </Menu.Item>
    </Menu>
  );

  const onChangePassword = (data: any) => {
    dispatch(changePassword(data));
  }

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
                      <div className="Post-Jobs">
                        <a href="/fast-apply" className="">
                          Fast-Apply
                        </a>
                      </div>
                    </li>
                    <li>
                      {!isLoggedIn ? (
                        <div
                          className="Sign-in"
                          onClick={() => {
                            setIsModalAuthVisible(!isModalAuthVisible);
                          }}
                        >
                          <a>SIGN IN</a>
                        </div>
                      ) : (
                        <Dropdown
                          overlay={menuProfile}
                          placement="bottomCenter"
                          trigger={["click"]}
                        >
                          <img
                            className="profile-button"
                            src={
                              // isLoggedIn && currentUser.imageUrl
                              // ? currentUser.imageUrl
                              // : defaultAvatar
                              defaultAvatar
                            }
                            style={{
                              position: "relative",
                            }}
                            alt=""
                          />
                        </Dropdown>
                      )}
                    </li>
                  </ul>
                  <Modal
                    title=""
                    visible={isModalAuthVisible && !isLoggedIn}
                    onOk={() => {}}
                    onCancel={handleCancel}
                    footer=""
                    maskClosable={false}
                    style={
                      {
                        // top: 50,
                        // left: 650,
                      }
                    }
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
                      <Login validateMessages={validateMessages} />
                    ) : (
                      //form register
                      <Register validateMessages={validateMessages} />
                    )}
                    <div className="register">
                      Don't have an account?{" "}
                      <a onClick={changeForm}>
                        {form === "LOGIN" ? "Register" : "Login"}
                      </a>
                    </div>
                  </Modal>

                  {/* modal change password */}
                  <Modal
                    title=""
                    visible={isModalChangePassword}
                    onOk={() => {}}
                    onCancel={handleCancel}
                    maskClosable={false}
                    footer=""
                  >
                    <div>
                      <h1 style={{ fontSize: "20px" }}>Change password</h1>
                      <Form
                        validateMessages={validateMessagesChangePw}
                        onFinish={onChangePassword}
                      >
                        <div className="credentials">
                          <Form.Item
                            name="oldPassword"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                            style={{ marginBottom: "15px", marginTop: "5px" }}
                          >
                            <Input placeholder="Old password" type="password"/>
                          </Form.Item>
                          <Form.Item
                            name="newPassword"
                            rules={[{ required: true, message: 'Please input new password!' }]}
                            style={{ marginBottom: "15px" }}
                          >
                            <Input placeholder="New password" type="password" />
                          </Form.Item>
                          <Form.Item
                            name="confirmPassword"
                            rules={[
                              {
                                required: true,
                                message: 'Please confirm your password!',
                              },
                              ({ getFieldValue }) => ({
                                validator(_, value) {
                                  if (!value || getFieldValue('newPassword') === value) {
                                    return Promise.resolve();
                                  }
                                  return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                },
                              }),
                            ]}
                          >
                            <Input
                              placeholder="Confirm password"
                              type="password"
                            />
                          </Form.Item>
                        </div>
                        <Form.Item>
                          <Button key="submit" type="primary" style={{float: 'right'}} htmlType="submit">
                            Submit
                          </Button>
                        </Form.Item>
                      </Form>
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
