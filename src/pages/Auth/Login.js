import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  app_store,
  fb_icon,
  google_icon,
  google_play,
  hide_icon,
  loginleftbox_image_1,
  loginleftbox_image_2,
  loginleftbox_image_3,
  loginleftbox_image_4,
  loginleftbox_image_5,
  loginleftbox_image_6,
  vector_icon1,
  vector_icon2,
  vector_icon3,
  Weblogo,
} from "../../Images/images";
import { baseUrlAuth } from "../../store/axios";
import { toast } from "react-toastify";
const Login = () => {
  const [hidepassword, setHidePassword] = useState(false);
  const navigate = useNavigate();

  const UserLogin = async (values) => {

    const controller = new AbortController();
    const signal = controller.signal;
    const formData = new FormData();
    formData.append("Email", values.Username);
    formData.append("Password", values.password);
    formData.append("IsLogging", true);
    formData.append("logout", 1);
    formData.append("is_gtf_connect", 0);
    try {
      await baseUrlAuth
        .post("login", formData,{ signal: signal }, {
          headers: {
            "Content-Type": "application/json",
            DeviceToken: "test_token",
            DeviceType: "Ios",
          },
        })
        .then((response) => {
          if (response?.data?.status === 200) {
            localStorage.setItem("UserID", response?.data?.data?.UserID);
            localStorage.setItem("email", values.Username);
            localStorage.setItem("token", response?.data?.data?.api_token);
            toast.success(response?.data?.message);
            navigate("/");
          } else {
            toast.error(response?.data?.message);
          }
        });

  
    } catch (error) {
      console.log("error :", error);
    }
  };

  const loginGetData = localStorage.getItem("token");
  useEffect(() => {
    loginGetData && navigate("/");
  }, [loginGetData]);

  const VisiblePassword = () => {
    setHidePassword(!hidepassword);
    const PasswordId = document.getElementById("password");
    if (PasswordId.type === "password") {
      return (PasswordId.type = "text");
    } else {
      return (PasswordId.type = "password");
    }
  };

  const SignupSchema = Yup.object().shape({
    Username: Yup.string().required("Username is Required"),
    password: Yup.string().required("Password is Required"),
  });
  return (
    <>
      {/* Start Login */}
      <section className="login">
        <div className="container">
          <div className="row loginrow">
            <div className="col-md-6 loginleft">
              <div className="loginleftbox">
                <div className="loginleftbox_image">
                  <div className="loginleftbox_image_1">
                    <img
                      src={loginleftbox_image_1}
                      alt="loginleftbox_image_1"
                    />
                  </div>
                  <div className="loginleftbox_image_2">
                    <img
                      src={loginleftbox_image_2}
                      alt="loginleftbox_image_2"
                    />
                  </div>
                  <div className="loginleftbox_image_3">
                    <img
                      src={loginleftbox_image_3}
                      alt="loginleftbox_image_3"
                    />
                  </div>
                  <div className="loginleftbox_image_4">
                    <img
                      src={loginleftbox_image_4}
                      alt="loginleftbox_image_4"
                    />
                  </div>
                  <div className="loginleftbox_image_5">
                    <img
                      src={loginleftbox_image_5}
                      alt="loginleftbox_image_5"
                    />
                  </div>
                  <div className="loginleftbox_image_6">
                    <img
                      src={loginleftbox_image_6}
                      alt="loginleftbox_image_6"
                    />
                  </div>
                </div>
                <div className="loginleftbox_app d-flex justify-content-center flex-wrap align-items-center">
                  <Link to="#">
                    <img src={app_store} alt="app-store" />
                  </Link>
                  <Link to="#">
                    <img src={google_play} alt="google-play" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 loginright">
              <div className="loginrightbox">
                <div className="loginrightbox_logo">
                  <Link to="#">
                    <img src={Weblogo} alt="img" />
                  </Link>
                </div>
                <div className="loginrightbox_form">
                  <h3>Login</h3>
                  <Formik
                    initialValues={{
                      Username: "",
                      password: "",
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={(values) => {
                      UserLogin(values);
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <div className="form-input">
                          <Field
                            type="text"
                            className="form-control"
                            placeholder="Username"
                            name="Username"
                          />
                          <span className="form-input-icon">
                            <img src={vector_icon1} alt="vector_icon1" />
                          </span>
                          {errors.Username && touched.Username ? (
                            <div className="text-danger d-flex mt-2">
                              {errors.Username}
                            </div>
                          ) : null}
                        </div>
                        <div className="form-input m-0">
                          <Field
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            id="password"
                            name="password"
                          />
                          <span className="form-input-icon">
                            <img src={vector_icon2} alt="vector_icon2" />
                          </span>
                          <span className="form-input-eye">
                            {!hidepassword ? (
                              <img
                                className="oneye"
                                src={vector_icon3}
                                alt="vector_icon3"
                                onClick={VisiblePassword}
                              />
                            ) : (
                              <img
                                className="oneye"
                                src={hide_icon}
                                alt="hide_icon"
                                onClick={VisiblePassword}
                              />
                            )}
                          </span>
                          {errors.password && touched.password ? (
                            <div className="text-danger d-flex mt-2">
                              {errors.password}
                            </div>
                          ) : null}
                        </div>
                        <div className="form-resend d-flex justify-content-between flex-wrap">
                          <Link to="/emailverification">Resend OTP</Link>
                          <Link to="/forget-password">Forgot Password</Link>
                        </div>
                        <div className="form-submit">
                          <button type="submit" className="btn btn-login">
                            Login
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                  <div className="loginrightbox_or">
                    <div className="loginrightbox_ortop">
                      <span className="text">or coninue with</span>
                    </div>
                    <ul className="d-flex justify-content-center">
                      <li>
                        <Link to="#">
                          <img src={fb_icon} alt="fb-icon" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <img src={google_icon} alt="google-icon" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="loginrightbox_nuser">
                    <Link to="/register" className="btn btn-nuser">
                      New User?
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Login */}
    </>
  );
};

export default Login;
