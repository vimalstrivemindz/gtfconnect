import React from "react";
import {
  additionalInfoIcon,
  billingIcon,
  cidyIcon,
  cityIcon,
  codeIcon,
  countryIcon,
  dateInfoIcon,
  generalIcon,
  gstIcon,
  messageMailIcon,
  socialInfoIcon,
  userIcon,
} from "../../Images/images";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { baseUrlAuth } from "../../store/axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useState } from "react";
import { CountryData } from "../../CountryData";
const EditProfile = () => {
  const [getProfileDetails, setGetProfileDetails] = useState([]);
  const [countryData, setCountryData] = useState([]);
  const [stateData, setStateData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const [selectStateData, setSelectStateData] = useState([]);
  const [selectCityData, setSelectCityData] = useState([]);
  const [showStateList, setShowStateList] = useState(false);
  const [showCityList, setShowCityList] = useState(false);
  const [countryID, setCountryID] = useState();
  const [stateeID, setStateeID] = useState();
  const [cityID, setcityID] = useState();
  const navigate = useNavigate();
  const SignupSchemaEditProfile = Yup.object().shape({
    firstName: Yup.string().required("firstName is Required"),
    lastName: Yup.string().required("lastName is Required"),
    email: Yup.string().email("Invalid email").required("Email is Required"),
    gender: Yup.string().required("Select Gender is required!"),
    dob: Yup.string().required("Dath of Birth is Required"),
    address: Yup.string().required("Address is Required"),
    phoneNumber: Yup.string()
      .min(6, "Min 6 number is Required")
      .max(15, "Too Long!")
      .required("Mobile number is Required"),
    countryName: Yup.string().required("Country is Required"),
    stateName: Yup.string().required("State is Required"),
    cityName: Yup.string().required("City is Required"),
    pinCode: Yup.string().required("Pin Number is Required"),
  });
  const token = localStorage.getItem("token");
  const UserID = localStorage.getItem("UserID");

  useEffect(() => {
    // const controller = new AbortController();
    // const signal = controller.signal;
    const formData = new FormData();
    formData.append("UserID", UserID);
    baseUrlAuth
      .post(
        "get_profile_details",
        formData,
        // { signal: signal },
        {
          headers: {
            "Content-Type": "application/json",
            DeviceToken: "test_token",
            DeviceType: "Ios",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setGetProfileDetails(res?.data);
      })
      .catch((error) => console.log(error));
  }, []);
  const editProfileSubmit = async (values) => {
    // const controller = new AbortController();
    // const signal = controller.signal;
    const formData = new FormData();
    formData.append("UserID", UserID);
    formData.append("Email", values?.email);
    formData.append("Gender", values?.gender);
    formData.append("FirstName", values?.firstName);
    formData.append("LastName", values?.lastName);
    formData.append("Phone", values?.phoneNumber);
    formData.append(
      "CountryID",
      countryID === undefined
        ? getProfileDetails?.data?.countrys?.CountryID
        : countryID
    );
    formData.append(
      "StateID",
      stateeID === undefined
        ? getProfileDetails?.data?.states?.StateID
        : stateeID
    );
    formData.append(
      "CityID",
      cityID === undefined ? getProfileDetails?.data?.citys?.CityID : cityID
    );
    formData.append("Pincode", values?.pinCode);
    formData.append("DOB", values?.dob);
    try {
      baseUrlAuth
        .post(
          "updateprofile",
          formData,
          // { signal: signal },
          {
            headers: {
              "Content-Type": "application/json",
              DeviceToken: "test_token",
              DeviceType: "Ios",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          if (res?.data?.status === 200) {
            toast.success(res?.data?.message);
            navigate("/");
          } else {
            toast.error(res?.data?.message);
          }
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    baseUrlAuth
      .get("get_country", { signal: signal })
      .then((res) => setCountryData(res?.data))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    const formData = new FormData();
    formData.append("CountryID", UserID?.data?.Country);
    baseUrlAuth
      .post("get_state", formData)
      .then((res) => setStateData(res?.data))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    const formData = new FormData();
    formData.append("StateID", getProfileDetails?.data?.State);
    baseUrlAuth
      .post("get_city", formData)
      .then((res) => setCityData(res?.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    setShowStateList(true);
    const formData = new FormData();
    formData.append(
      "CountryID",
      countryID === undefined ? getProfileDetails?.data?.Country : countryID
    );
    baseUrlAuth
      .post("get_state", formData)
      .then((res) => setSelectStateData(res?.data))
      .catch((error) => console.log(error));
  }, [countryID]);

  useEffect(() => {
    setShowCityList(true);
    const formData = new FormData();
    formData.append(
      "StateID",
      stateeID === undefined ? getProfileDetails?.data?.State : stateeID
    );
    baseUrlAuth
      .post("get_city", formData)
      .then((res) => setSelectCityData(res?.data))
      .catch((error) => console.log(error));
  }, [stateeID]);

  const stateValues =
    countryID === undefined ||
    countryID === getProfileDetails?.data?.CountryName
      ? getProfileDetails?.data?.StateName
      : "";

  const cityValues =
    countryID === undefined ||
    countryID === getProfileDetails?.data?.CountryName
      ? getProfileDetails?.data?.CityName
      : "";

  const initialValue = {
    firstName: getProfileDetails?.data?.Firstname,
    lastName: getProfileDetails?.data?.Lastname,
    email: getProfileDetails?.data?.email,
    gender: getProfileDetails?.data?.Gender,
    dob: getProfileDetails?.data?.DOB,
    phoneNumber: getProfileDetails?.data?.Phone,
    PhoneCode: getProfileDetails?.data?.PhoneCode,
    countryName: getProfileDetails?.data?.CountryName,
    stateName: stateValues,
    // stateName: getProfileDetails?.data?.StateName,
    cityName: cityValues,
    // cityName: getProfileDetails?.data?.CityName,
    address: getProfileDetails?.data?.Address,
    pinCode: getProfileDetails?.data?.Pincode,
  };

  // updateprofile
  return (
    <>
      <div className="chatbox-area">
        <div className="chatbox-right-bar">
          <div className="account-setting-inner">
            <div className="edit-profile-account">
              <div className="edit-header">
                <strong>Edit Profile</strong>
              </div>
              <div className="edit-profile-form">
                <div className="edit-from-inner">
                  <Formik
                    enableReinitialize={true}
                    initialValues={initialValue}
                    validationSchema={SignupSchemaEditProfile}
                    onSubmit={(values) => {
                      editProfileSubmit(values);
                    }}
                  >
                    {({ errors, touched, handleChange, values }) => (
                      <Form>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <Field
                                    type="text"
                                    className="form-control"
                                    placeholder="First Name"
                                    value={values.firstName}
                                    onChange={handleChange}
                                    name="firstName"
                                  />
                                  <span>
                                    <img src={userIcon} alt="user-icon" />
                                  </span>
                                  {errors.firstName && touched.firstName ? (
                                    <div className="text-danger d-flex mt-2">
                                      {errors.firstName}
                                    </div>
                                  ) : null}
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <Field
                                    type="text"
                                    className="form-control"
                                    placeholder="Last Name"
                                    name="lastName"
                                    value={values.lastName}
                                    onChange={handleChange}
                                  />
                                  <span>
                                    <img src={userIcon} alt="user-icon" />
                                  </span>
                                  {errors.lastName && touched.lastName ? (
                                    <div className="text-danger d-flex mt-2">
                                      {errors.lastName}
                                    </div>
                                  ) : null}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <Field
                                type="text"
                                className="form-control"
                                placeholder="Billing Name(Optional)"
                                name="billingName"
                              />
                              <span>
                                <img src={billingIcon} alt="user-icon" />
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <select
                                className="form-control"
                                name="gender"
                                value={values.gender}
                                onChange={handleChange}
                              >
                                <option value="Man">Man</option>
                                <option value="Woman">Woman</option>
                              </select>
                              <span>
                                <img src={generalIcon} alt="user-icon" />
                              </span>
                              {errors.gender && touched.gender ? (
                                <div className="text-danger d-flex mt-2">
                                  {errors.gender}
                                </div>
                              ) : null}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <Field
                                type="text"
                                className="form-control"
                                placeholder="Additional Info(Optional)"
                                name="addinationInfo"
                              />
                              <span>
                                <img src={additionalInfoIcon} alt="user-icon" />
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <Field
                                type="mail"
                                className="form-control"
                                placeholder="Enter Email"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                              />
                              <span>
                                <img src={messageMailIcon} alt="user-icon" />
                              </span>
                              {errors.email && touched.email ? (
                                <div className="text-danger d-flex mt-2">
                                  {errors.email}
                                </div>
                              ) : null}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <select className="form-control">
                                <option>Facebook</option>
                              </select>
                              <span>
                                <img src={socialInfoIcon} alt="user-icon" />
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <Field
                                type="date"
                                className="form-control date-form"
                                placeholder="Enter Dath of Birth"
                                name="dob"
                                value={values.dob}
                                onChange={handleChange}
                              />
                              <span>
                                <img src={dateInfoIcon} alt="user-icon" />
                              </span>
                              {errors.dob && touched.dob ? (
                                <div className="text-danger d-flex mt-2">
                                  {errors.dob}
                                </div>
                              ) : null}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <Field
                                type="text"
                                className="form-control"
                                placeholder="Enter Address"
                                name="address"
                                value={values.address}
                                onChange={handleChange}
                              />
                              <span>
                                <img src={cidyIcon} alt="user-icon" />
                              </span>
                              {errors.address && touched.address ? (
                                <div className="text-danger d-flex mt-2">
                                  {errors.address}
                                </div>
                              ) : null}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group number-input">
                              <div className="group">
                                <select
                                  className="num form-control "
                                  style={{ paddingLeft: "20px" }}
                                  name="PhoneCode"
                                  value={values.PhoneCode}
                                  onChange={handleChange}
                                >
                                  <option value={values.PhoneCode}>
                                    {values.PhoneCode}
                                  </option>
                                  {CountryData?.map((data, index) => (
                                    <option value={data?.dialCode} key={index}>
                                      {` ${data?.dialCode}`}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <Field
                                type="text"
                                className="form-control"
                                placeholder="Enter Phone number"
                                name="phoneNumber"
                                value={values?.phoneNumber}
                                onChange={handleChange}
                              />
                            </div>
                            {errors.phoneNumber && touched.phoneNumber ? (
                              <div className="text-danger d-flex mt-2">
                                {errors.phoneNumber}
                              </div>
                            ) : null}
                          </div>
                          <div className="col-md-6">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <Field
                                    as="select"
                                    className="form-control"
                                    name="countryName"
                                    value={values?.countryName}
                                    onChange={handleChange}
                                    onClick={() => {
                                      setCountryID(values?.countryName);
                                    }}
                                  >
                                    <option>
                                      {values?.countryName}
                                    </option>
                                    {countryData?.data?.map(
                                      (country, index) => {
                                        return (
                                          <option
                                            value={country?.CountryID}
                                            key={index}
                                          >
                                            {country?.name}
                                          </option>
                                        );
                                      }
                                    )}
                                  </Field>
                                  <span>
                                    <img src={countryIcon} alt="user-icon" />
                                  </span>
                                  {errors.countryName && touched.countryName ? (
                                    <div className="text-danger d-flex mt-2">
                                      {errors.countryName}
                                    </div>
                                  ) : null}
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <select
                                    className="form-control"
                                    name="stateName"
                                    value={values?.stateName}
                                    onChange={handleChange}
                                    onClick={() => {
                                      setStateeID(values?.stateName);
                                    }}
                                  >
                                    {countryID === undefined ||
                                    countryID ===
                                      getProfileDetails?.data?.CountryName ? (
                                      <option>
                                        {values?.stateName}
                                      </option>
                                    ) : (
                                      <option>Choose State</option>
                                    )}
                                    {showStateList
                                      ? selectStateData?.data?.map(
                                          (state, index) => {
                                            return (
                                              <option
                                                value={state?.StateID}
                                                key={index}
                                              >
                                                {state?.name}
                                              </option>
                                            );
                                          }
                                        )
                                      : stateData?.data?.map((state, index) => {
                                          return (
                                            <option
                                              value={state?.StateID}
                                              key={index}
                                            >
                                              {state?.name}
                                            </option>
                                          );
                                        })}
                                  </select>
                                  <span>
                                    <img src={countryIcon} alt="user-icon" />
                                  </span>
                                  {errors.stateName && touched.stateName ? (
                                    <div className="text-danger d-flex mt-2">
                                      {errors.stateName}
                                    </div>
                                  ) : null}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <Field
                                type="text"
                                className="form-control"
                                placeholder="GST Number(Optional)"
                                name="getNumber"
                              />
                              <span>
                                <img src={gstIcon} alt="user-icon" />
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <select
                                    className="form-control"
                                    name="cityName"
                                    value={values?.cityName}
                                    onChange={handleChange}
                                    onClick={() => {
                                      setcityID(values?.cityName);
                                    }}
                                  >
                                    {countryID === undefined ||
                                    countryID ===
                                      getProfileDetails?.data?.CountryName ? (
                                      <option>{values?.cityName}</option>
                                    ) : (
                                      <option>Choose City</option>
                                    )}
                                    {showCityList
                                      ? selectCityData?.data?.map(
                                          (country, index) => {
                                            return (
                                              <option
                                                value={country?.CityID}
                                                key={index}
                                              >
                                                {country?.name}
                                              </option>
                                            );
                                          }
                                        )
                                      : cityData?.data?.map(
                                          (country, index) => {
                                            return (
                                              <option
                                                value={country?.name}
                                                key={index}
                                              >
                                                {country?.name}
                                              </option>
                                            );
                                          }
                                        )}
                                  </select>
                                  <span>
                                    <img src={cityIcon} alt="user-icon" />
                                  </span>
                                  {errors.cityName && touched.cityName ? (
                                    <div className="text-danger d-flex mt-2">
                                      {errors.cityName}
                                    </div>
                                  ) : null}
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <Field
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Pin code"
                                    name="pinCode"
                                    value={values?.pinCode}
                                    onChange={handleChange}
                                  />
                                  <span>
                                    <img src={codeIcon} alt="user-icon" />
                                  </span>
                                  {errors.pinCode && touched.pinCode ? (
                                    <div className="text-danger d-flex mt-2">
                                      {errors.pinCode}
                                    </div>
                                  ) : null}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12 text-center">
                            <div className="form-btn">
                              <button className="btn btn-profile" type="submit">
                                Update Profile
                              </button>
                            </div>
                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
