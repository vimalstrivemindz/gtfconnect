import React from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  app_store,
  google_play,
  loginleftbox_image_1,
  loginleftbox_image_2,
  loginleftbox_image_3,
  loginleftbox_image_4,
  loginleftbox_image_5,
  loginleftbox_image_6,
  vector_icon5,
  Weblogo,
} from "../../Images/images";
import { UserOtpEmails } from "../../reducer/userAuth/OtpEmail";
import { baseUrlAuth } from "../../store/axios";
import { toast } from "react-toastify";
const EmailVerification = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   dispatch(UserOtpEmails());
  // });
  const SendOtp = (values) => {
    const formdata = new FormData();
    formdata.append("email", values?.email);
    baseUrlAuth
      .post(
        "/resend-email-otp",
        formdata
      )
      .then((res) => {
        if (res?.data?.status === 200) {
          toast.success(res?.data?.message);
          navigate("/otpverification");
        } else {
          toast.error(res?.data?.message);
        }
      })
      .catch((error) => console.log(error));
  };
  const loginGetData = localStorage.getItem("token");
  useEffect(() => {
    loginGetData && navigate("/");
  }, [loginGetData]);

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is Required"),
  });
  return (
    <section className="login register">
      <div className="container">
        <div className="row loginrow">
          <div className="col-md-6 loginleft">
            <div className="loginleftbox">
              <div className="loginleftbox_image">
                <div className="loginleftbox_image_1">
                  <img src={loginleftbox_image_1} alt="loginleftbox_image_1" />
                </div>
                <div className="loginleftbox_image_2">
                  <img src={loginleftbox_image_2} alt="loginleftbox_image_2" />
                </div>
                <div className="loginleftbox_image_3">
                  <img src={loginleftbox_image_3} alt="loginleftbox_image_3" />
                </div>
                <div className="loginleftbox_image_4">
                  <img src={loginleftbox_image_4} alt="loginleftbox_image_4" />
                </div>
                <div className="loginleftbox_image_5">
                  <img src={loginleftbox_image_5} alt="loginleftbox_image_5" />
                </div>
                <div className="loginleftbox_image_6">
                  <img src={loginleftbox_image_6} alt="loginleftbox_image_6" />
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
                <h3>Resend OTP</h3>
                <p>Enter the email address associated with your account</p>

                <Formik
                  initialValues={{
                    email: "",
                  }}
                  validationSchema={SignupSchema}
                  onSubmit={(values) => {
                    // same shape as initial values
                    SendOtp(values);
                  }}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <div className="form-input">
                        <Field
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          name="email"
                        />
                        <span className="form-input-icon">
                          <img src={vector_icon5} alt="vector_icon5" />
                        </span>
                        {errors.email && touched.email ? (
                          <div className="text-danger d-flex mt-2">
                            {errors.email}
                          </div>
                        ) : null}
                      </div>
                      <div className="form-submit">
                        <button type="submit" className="btn btn-login">
                          Send
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
  );
};

export default EmailVerification;
