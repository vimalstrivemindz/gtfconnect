import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  app_store,
  google_play,
  loginleftbox_image_1,
  loginleftbox_image_2,
  loginleftbox_image_3,
  loginleftbox_image_4,
  loginleftbox_image_5,
  loginleftbox_image_6,
  vector_icon1,
  vector_icon10,
  vector_icon11,
  vector_icon12,
  vector_icon13,
  vector_icon14,
  vector_icon2,
  vector_icon3,
  vector_icon4,
  vector_icon5,
  vector_icon6,
  vector_icon7,
  vector_icon8,
  vector_icon9,
  Weblogo,
  hide_icon,
} from "../../Images/images";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "yup-phone";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserDatas,
  fetchSelectStates,
  fetchSelectCitys,
} from "../../reducer/user";
import "react-phone-number-input/style.css";

import { CountryData } from "../../CountryData";
import { baseUrlAuth } from "../../store/axios";
import { useEffect } from "react";
import { toast } from "react-toastify";

const Register = () => {
  const [registrationStepFirst, setRegistrationFirst] = useState(true);
  const [registrationStepTwo, setRegistrationTwo] = useState(false);
  const [registrationStepThree, setRegistrationThree] = useState(false);
  const [hidepassword, setHidePassword] = useState(false);
  const [cPasshidepassword, setPasstHidePassword] = useState(false);
  const [registrationStep1, setRegistrationStep1] = useState();
  const [registrationStep2, setRegistrationStep2] = useState();
  
  const redirect = useNavigate();
  const dispatch = useDispatch();
  const FirstStepRegister = (values) => {
    setRegistrationStep1(values);
    setRegistrationFirst(false);
    setRegistrationTwo(true);
  };
  const BackregistrationStepFirst = () => {
    setRegistrationTwo(false);
    setRegistrationFirst(true);
  };
  const SecondStepRegistration = (values) => {
    setRegistrationStep2(values);
    setRegistrationThree(true);
    setRegistrationTwo(false);
    setRegistrationFirst(false);
  };

  const selectCountry = useSelector((state) => state.selectCountry);
  const selectState = useSelector((state) => state.userSelectState);
  const selectCity = useSelector((state) => state.userSelectCity);
  const UserRegistration = (values) => {
    const countryCodes =
      registrationStep1?.countryCode === undefined
        ? "+91"
        : registrationStep1?.countryCode;

    let formdata = new FormData();
    formdata.append("FirstName", registrationStep1?.firstName);
    formdata.append("LastName", registrationStep1?.lastName);
    formdata.append("Email", registrationStep1?.email);
    formdata.append("Password", values?.password);
    formdata.append("PhoneCode", countryCodes);
    formdata.append("Phone", registrationStep1?.phoneNumber);
    formdata.append("Gender", registrationStep1?.gender);
    formdata.append("CountryID", values?.country);
    formdata.append("StateID", values?.state);
    formdata.append("CityID", values?.city);
    formdata.append("Pincode", values?.pinNumber);
    formdata.append("Address", values?.address);
    formdata.append("DOB", registrationStep1?.dob);
    formdata.append("find_us", "facebook");
    formdata.append("IsReferral", 1);
    baseUrlAuth
      .post("registration", formdata)
      .then((res) => {
        if (res?.data?.status === 200) {
          redirect(`/otpverification`, { replace: true });
          toast.success(res?.data?.message);
          localStorage.setItem("email", registrationStep1?.email);
        } else {
          toast.error(res?.data?.message);
        }
      })
      .catch((error) => console.log(error));
  };

  const loginGetData = localStorage.getItem("token");
  useEffect(() => {
    loginGetData && redirect("/");
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

  const ConfirmVisiblePassword = () => {
    setPasstHidePassword(!cPasshidepassword);
    const PasswordId = document.getElementById("Cpassword");
    if (PasswordId.type === "password") {
      return (PasswordId.type = "text");
    } else {
      return (PasswordId.type = "password");
    }
  };

  const SignupSchemaFirst = Yup.object().shape({
    firstName: Yup.string().required("firstName is Required"),
    lastName: Yup.string().required("lastName is Required"),
    email: Yup.string().email("Invalid email").required("Email is Required"),
    gender: Yup.string().required("Select Gender is required!"),
    dob: Yup.string().required("Dath of Birth is Required"),
    phoneNumber: Yup.string()
      .min(6, "Min 6 number is Required")
      .max(15, "Too Long!")
      .required("Mobile number is Required"),
  });
  const SignupSchemaSecond = Yup.object().shape({
    gstNumber: Yup.string().required("GST Number is Required"),
    billingName: Yup.string().required("Billing Name is Required"),
    additionalInfo: Yup.string().required("Additional Information is Required"),
    findUs: Yup.string().required("Choose field is Required"),
  });
  const SignupSchemaThird = Yup.object().shape({
    address: Yup.string().required("Address is Required"),
    country: Yup.string().required("Country is Required"),
    state: Yup.string().required("State is Required"),
    city: Yup.string().required("City is Required"),
    pinNumber: Yup.string().required("Pin Number is Required"),
    password: Yup.string().required("Password Information is Required"),
    ConfirmPassword: Yup.string()
      .required("Please ReEnter your password")
      .when("password", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Both password need to be the same"
        ),
      }),
    termsAndConditions: Yup.bool().oneOf(
      [true],
      "You need to accept the terms and conditions"
    ),
  });

  return (
    <>
      {/*-------------------------------------------------------------------------- Registratioin Step First ------------------------------------------- */}

      {registrationStepFirst && (
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
                    <h3>Register</h3>

                    <Formik
                      initialValues={{
                        firstName: registrationStep1?.firstName,
                        lastName: registrationStep1?.lastName,
                        email: registrationStep1?.email,
                        gender: registrationStep1?.gender,
                        dob: registrationStep1?.dob,
                        countryCode: registrationStep1?.countryCode,
                        phoneNumber: registrationStep1?.phoneNumber,
                      }}
                      validationSchema={SignupSchemaFirst}
                      onSubmit={(values) => {
                        FirstStepRegister(values);
                      }}
                    >
                      {({ errors, touched, values, handleChange }) => (
                        <Form>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-input">
                                <Field
                                  type="text"
                                  className="form-control"
                                  placeholder="First Name"
                                  name="firstName"
                                />
                                <span className="form-input-icon">
                                  <img src={vector_icon1} alt="vector_icon1" />
                                </span>
                                {errors.firstName && touched.firstName ? (
                                  <div className="text-danger d-flex mt-2">
                                    {errors.firstName}
                                  </div>
                                ) : null}
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-input">
                                <Field
                                  type="text"
                                  className="form-control"
                                  placeholder="Last Name"
                                  name="lastName"
                                />
                                <span className="form-input-icon">
                                  <img src={vector_icon1} alt="vector_icon1" />
                                </span>
                                {errors.lastName && touched.lastName ? (
                                  <div className="text-danger d-flex mt-2">
                                    {errors.lastName}
                                  </div>
                                ) : null}
                              </div>
                            </div>
                          </div>
                          <div className="form-input">
                            <select
                              className="form-select"
                              aria-label="Gender"
                              value={values.gender}
                              onChange={handleChange}
                              name="gender"
                            >
                              <option selected value="">
                                Gender
                              </option>
                              <option value="Man">Man</option>
                              <option value="Woman">Woman</option>
                            </select>
                            <span className="form-input-icon">
                              <img src={vector_icon4} alt="vector_icon4" />
                            </span>
                            {errors.gender && touched.gender ? (
                              <div className="text-danger d-flex mt-2">
                                {errors.gender}
                              </div>
                            ) : null}
                          </div>
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

                          <div className="form-input">
                            <Field
                              type="date"
                              className="form-control"
                              placeholder="DOB"
                              name="dob"
                              min="1940-01-01"
                              max="2020-01-01"
                            />
                            <span className="form-input-icon">
                              <img src={vector_icon6} alt="vector_icon6" />
                            </span>
                            {errors.dob && touched.dob ? (
                              <div className="text-danger d-flex mt-2">
                                {errors.dob}
                              </div>
                            ) : null}
                          </div>
                          <div className="form-input form-flgselect">
                            {/* <select className="form-select" aria-label={+91}>
                              <option selected value="">+91</option>
                              {CountryData?.map((data)=>{
                                return(
                                  <>
                                  <option value={1}>{`${data?.name} ${data?.dialCode}`}</option>
                                  
                                  </>
                                )
                              })}
                            </select> */}

                            {/* <select
                              className="form-select"
                              aria-label="State"
                              name="state"
                              value={values.state}
                              onChange={handleChange}
                              onClick={() =>
                                dispatch(fetchSelectCitys(values.state))
                              }
                            >
                              <option selected value="">
                                State
                              </option>
                              {selectState?.data?.map((state) => (
                                <option value={state?.StateID}>
                                  {state?.name}
                                </option>
                              ))}
                            </select> */}

                            <select
                              className="form-select"
                              aria-label="+91"
                              name="countryCode"
                              value={values?.countryCode}
                              onChange={handleChange}
                              defaultValue={+91}
                              style={{ width: "130px", padding: "15px 10px" }}
                            >
                              <option selected value="">
                                +91
                              </option>
                              {CountryData?.map((data, index) => (
                                <option value={data?.dialCode} key={index}>
                                  {` ${data?.dialCode}`}
                                </option>
                              ))}
                            </select>
                            <Field
                              type="text"
                              className="form-control"
                              placeholder="Enter Phone Number"
                              name="phoneNumber"
                              style={{ padding: "15px 10px" }}
                            />
                          </div>

                          {errors.phoneNumber && touched.phoneNumber ? (
                            <div className="text-danger d-flex mt-2 mb-2">
                              {errors.phoneNumber}
                            </div>
                          ) : null}
                          <div className="form-submit">
                            <button type="submit" className="btn btn-login">
                              Next
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
      )}

      {/*//. --------------------------------------------------------------------- Registratioin Step First End -------------------------------------------------- */}

      {/* ------------------------------------------------------------------Registratioin Step Second ----------------------------------------- */}
      {registrationStepTwo && (
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
                    <h3>Register</h3>
                    <Formik
                      initialValues={{
                        gstNumber: "",
                        billingName: "",
                        additionalInfo: "",
                        findUs: "",
                      }}
                      validationSchema={SignupSchemaSecond}
                      onSubmit={(values) => {
                        SecondStepRegistration(values);
                      }}
                    >
                      {({ errors, touched, handleChange, values }) => (
                        <Form>
                          <div className="form-input">
                            <Field
                              type="text"
                              className="form-control"
                              placeholder="GST Number"
                              name="gstNumber"
                            />
                            <span className="form-input-icon">
                              <img src={vector_icon7} alt="vector_icon7" />
                            </span>
                            {errors.gstNumber && touched.gstNumber ? (
                              <div className="text-danger d-flex mt-2">
                                {errors.gstNumber}
                              </div>
                            ) : null}
                          </div>
                          <div className="form-input">
                            <Field
                              type="text"
                              className="form-control"
                              placeholder="Billing Name"
                              name="billingName"
                            />
                            <span className="form-input-icon">
                              <img src={vector_icon8} alt="vector_icon8" />
                            </span>
                            {errors.billingName && touched.billingName ? (
                              <div className="text-danger d-flex mt-2">
                                {errors.billingName}
                              </div>
                            ) : null}
                          </div>
                          <div className="form-input">
                            <Field
                              type="text"
                              className="form-control"
                              placeholder="Additional Info"
                              name="additionalInfo"
                            />
                            <span className="form-input-icon">
                              <img src={vector_icon9} alt="vector_icon9" />
                            </span>
                            {errors.additionalInfo && touched.additionalInfo ? (
                              <div className="text-danger d-flex mt-2">
                                {errors.additionalInfo}
                              </div>
                            ) : null}
                          </div>
                          <div className="form-input">
                            <select
                              className="form-select"
                              aria-label="Gender"
                              name="findUs"
                              value={values.findUs}
                              onChange={handleChange}
                            >
                              <option selected value="">
                                How Did You FInd Us
                              </option>
                              <option value={1}>option</option>
                              <option value={2}>option</option>
                            </select>
                            <span className="form-input-icon">
                              <img src={vector_icon10} alt="vector_icon10" />
                            </span>
                            {errors.findUs && touched.findUs ? (
                              <div className="text-danger d-flex mt-2">
                                {errors.findUs}
                              </div>
                            ) : null}
                          </div>
                          <div className="form-submit">
                            <button type="submit" className="btn btn-login">
                              Next
                            </button>
                          </div>
                          <div className="form-submit">
                            <button
                              className="btn btn-back"
                              onClick={BackregistrationStepFirst}
                            >
                              Back
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
      )}
      {/*//. ---------------------------------------------------------------- Registratioin Step Second End -------------------------------------- */}

      {/*-------------------------------------------------------------------- Registratioin Step Three --------------------------------------- */}

      {registrationStepThree && (
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
                    <h3>Register</h3>
                    <Formik
                      initialValues={{
                        address: "",
                        country: "",
                        state: "",
                        city: "",
                        pinNumber: "",
                        password: "",
                        ConfirmPassword: "",
                        termsAndConditions: false,
                      }}
                      validationSchema={SignupSchemaThird}
                      onSubmit={(values) => {
                        UserRegistration(values);
                      }}
                    >
                      {({ errors, touched, handleChange, values }) => (
                        <Form>
                          <div className="form-input">
                            <Field
                              type="text"
                              className="form-control"
                              placeholder="Address"
                              name="address"
                            />
                            <span className="form-input-icon">
                              <img src={vector_icon11} alt="vector_icon11" />
                            </span>
                            {errors.address && touched.address ? (
                              <div className="text-danger d-flex mt-2">
                                {errors.address}
                              </div>
                            ) : null}
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-input">
                                <select
                                  className="form-select"
                                  aria-label="Country"
                                  name="country"
                                  value={values.country}
                                  onChange={handleChange}
                                  onClick={() => {
                                    dispatch(fetchUserDatas());
                                    dispatch(fetchSelectStates(values.country));
                                  }}
                                >
                                  <option selected value="">
                                    Country
                                  </option>
                                  {selectCountry?.data?.map((c) => (
                                    <option value={c?.CountryID}>
                                      {c?.name}
                                    </option>
                                  ))}
                                </select>
                                <span className="form-input-icon">
                                  <img
                                    src={vector_icon12}
                                    alt="vector_icon12"
                                  />
                                </span>
                                {errors.country && touched.country ? (
                                  <div className="text-danger d-flex mt-2">
                                    {errors.country}
                                  </div>
                                ) : null}
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-input">
                                <select
                                  className="form-select"
                                  aria-label="State"
                                  name="state"
                                  value={values.state}
                                  onChange={handleChange}
                                  onClick={() =>
                                    dispatch(fetchSelectCitys(values.state))
                                  }
                                >
                                  <option selected value="">
                                    State
                                  </option>
                                  {selectState?.data?.map((state) => (
                                    <option value={state?.StateID}>
                                      {state?.name}
                                    </option>
                                  ))}
                                </select>
                                <span className="form-input-icon">
                                  <img
                                    src={vector_icon12}
                                    alt="vector_icon12"
                                  />
                                </span>
                                {errors.state && touched.state ? (
                                  <div className="text-danger d-flex mt-2">
                                    {errors.state}
                                  </div>
                                ) : null}
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-input">
                                <select
                                  className="form-select"
                                  aria-label="City"
                                  name="city"
                                  value={values.city}
                                  onChange={handleChange}
                                >
                                  <option selected value="">
                                    City
                                  </option>
                                  {selectCity?.data?.map((city) => (
                                    <option value={city?.CityID}>
                                      {city?.name}
                                    </option>
                                  ))}
                                </select>
                                <span className="form-input-icon">
                                  <img
                                    src={vector_icon13}
                                    alt="vector_icon13"
                                  />
                                </span>
                                {errors.city && touched.city ? (
                                  <div className="text-danger d-flex mt-2">
                                    {errors.city}
                                  </div>
                                ) : null}
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-input">
                                <Field
                                  type="number"
                                  className="form-control"
                                  placeholder="Pin"
                                  name="pinNumber"
                                />
                                <span className="form-input-icon">
                                  <img
                                    src={vector_icon14}
                                    alt="vector_icon14"
                                  />
                                </span>
                                {errors.pinNumber && touched.pinNumber ? (
                                  <div className="text-danger d-flex mt-2">
                                    {errors.pinNumber}
                                  </div>
                                ) : null}
                              </div>
                            </div>
                          </div>
                          <div className="form-input">
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
                            {errors.password && touched.password ? (
                              <div className="text-danger d-flex mt-2">
                                {errors.password}
                              </div>
                            ) : null}
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
                          </div>
                          <div className="form-input">
                            <Field
                              type="password"
                              className="form-control"
                              placeholder="Confirm Password"
                              id="Cpassword"
                              name="ConfirmPassword"
                            />
                            <span className="form-input-icon">
                              <img src={vector_icon2} alt="vector_icon2" />
                            </span>
                            {errors.ConfirmPassword &&
                            touched.ConfirmPassword ? (
                              <div className="text-danger d-flex mt-2">
                                {errors.ConfirmPassword}
                              </div>
                            ) : null}
                            <span className="form-input-eye">
                              {!cPasshidepassword ? (
                                <img
                                  className="oneye"
                                  src={vector_icon3}
                                  alt="vector_icon3"
                                  onClick={ConfirmVisiblePassword}
                                />
                              ) : (
                                <img
                                  className="oneye"
                                  src={hide_icon}
                                  alt="hide_icon"
                                  onClick={ConfirmVisiblePassword}
                                />
                              )}
                            </span>
                          </div>
                          <div className="form-check form-agree">
                            <Field
                              type="checkbox"
                              className="form-check-input"
                              id="exampleCheck1"
                              name="termsAndConditions"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="exampleCheck1"
                            >
                              I agree to <Link to="#">Privacy Policy</Link> and{" "}
                              <Link to="#">Terms</Link>
                            </label>
                          </div>
                          {errors.termsAndConditions && (
                            <p className="text-danger d-flex mt-2">
                              {errors.termsAndConditions}
                            </p>
                          )}
                          <div className="form-submit">
                            <button type="submit" className="btn btn-login">
                              REGISER
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
      )}
      {/*//. ---------------------------------------------------------------- Registratioin Step Three End---------------------------------------- */}
    </>
  );
};

export default Register;
