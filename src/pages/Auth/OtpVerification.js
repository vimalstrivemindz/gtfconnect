import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Timer from "otp-timer";
import {
  app_store,
  google_play,
  loginleftbox_image_1,
  loginleftbox_image_2,
  loginleftbox_image_3,
  loginleftbox_image_4,
  loginleftbox_image_5,
  loginleftbox_image_6,
  vector_icon3,
  Weblogo,
  hide_icon,
} from "../../Images/images";
import { baseUrlAuth } from "../../store/axios";
import { toast } from "react-toastify";

const OtpVerification = () => {
  const [hidepassword, setHidePassword] = useState(false);
  const navigate = useNavigate();
  const getemail = localStorage.getItem("email");
  const getAuthToken = localStorage.getItem("token");

  useEffect(()=>{
    getAuthToken&& navigate("/")
  },[])

  const OtpVerificationHandler = (values) => {
    const formdata = new FormData();
    formdata.append("email", getemail);
    formdata.append("otp", values?.otpVerification);
    baseUrlAuth
      .post("/verify-email-otp", formdata)
      .then((res) => {
        if (res?.data?.status === 200) {
          navigate("/login");
          toast.success(res?.data?.message);
        } else {
          toast.error(res?.data?.message);
        }
      })
      .catch((error) => console.log(error));

    // const otp = Math.round(Math.random() * 900000 + 100000);
    // alert(otp);
  };
  // const loginGetData = localStorage.getItem("token");
  // useEffect(() => {
  //   loginGetData && navigate("/");
  // }, [loginGetData]);
  const SignupSchema = Yup.object().shape({
    otpVerification: Yup.string().required("Otp is Required"),
  });
  const VisiblePassword = () => {
    setHidePassword(!hidepassword);
    const PasswordId = document.getElementById("password");
    if (PasswordId.type === "password") {
      return (PasswordId.type = "text");
    } else {
      return (PasswordId.type = "password");
    }
  };
  return (
    <>
      <section className="login register">
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
                  <h3>OTP Verification</h3>
                  <Formik
                    initialValues={{
                      otpVerification: "",
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={(values) => {
                      // same shape as initial values
                      OtpVerificationHandler(values);
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <div className="form-input">
                          <Field
                            type="password"
                            className="form-control"
                            placeholder="Please Enter OTP"
                            name="otpVerification"
                            id="password"
                          />
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
                          {errors.otpVerification && touched.otpVerification ? (
                            <div className="text-danger d-flex mt-2">
                              {errors.otpVerification}
                            </div>
                          ) : null}
                        </div>
                        <div className="back-to-login p-0 pb-3">
                          <Timer
                            seconds={60}
                            ButtonText="Otp Expired"
                            buttonColor={"#dc3747"}
                            background={"none"}
                            text="Otp Expired Time Left"
                          />
                        </div>
                        <div className="form-submit">
                          <button type="submit" className="btn btn-login">
                            Submit
                          </button>
                        </div>
                        <div className="back-to-login">
                          Back To <Link to="/login">Login</Link>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OtpVerification;
