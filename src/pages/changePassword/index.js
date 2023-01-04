import React from "react";
import SettingChat from "../../Component/chatLeft/SettingChat";
import Sidebar from "../../Component/sidebar";
import { changePassword } from "../../Images/images";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { baseUrlAuth, baseUrlMain } from "../../store/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const ChangePassword = () => {
  const navigate = useNavigate()
  const SignupSchema = Yup.object().shape({
    currentPassword: Yup.string().required("Current Password is Required"),
    newPassword: Yup.string().required("New Password is Required"),
    confirmPassword: Yup.string()
    .required("Please ReEnter your password")
    .when("newPassword", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("newPassword")],
        "Both password need to be the same"
      ),
    }),
  });
  const token = localStorage.getItem("token");
  const UserID = localStorage.getItem("UserID");
  const updatePassword = async (values) => {
    const formData = new FormData();
    formData.append("UserID", UserID);
    formData.append("CurrentPassword", values.currentPassword);
    formData.append("NewPassword", values.newPassword);
    formData.append("NewConfirmPassword", values.confirmPassword);
    try {
      baseUrlAuth
        .post("resetpassword", formData, {
          headers: {
            "Content-Type": "application/json",
            DeviceToken: "test_token",
            DeviceType: "Ios",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if(res?.data?.status===200){
            toast.success(res?.data?.message);
            navigate("/")
          }else{
            toast.error(res?.data?.message)

          }
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="d-flex">
      <Sidebar />
      <SettingChat title="Settings" />

      <div className="chatbox-area">
        <div className="chatbox-right-bar">
          <div className="account-setting-inner">
            <div className="changepassword-blog">
              <div className="change-password-header">
                <strong>Change Password</strong>
              </div>
              <div className="change-password-inner">
                <div className="change-password-form">
                  <h2>Change Password</h2>
                  <Formik
                    initialValues={{
                      currentPassword: "",
                      newPassword: "",
                      confirmPassword: "",
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={(values) => {
                      updatePassword(values);
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <div className="form-group">
                          <Field
                            type="password"
                            className="form-control"
                            placeholder="Current Password"
                            name="currentPassword"
                          />
                          <span>
                            <img src={changePassword} alt="user-icon" />
                          </span>
                          {errors.currentPassword && touched.currentPassword ? (
                            <div className="text-danger d-flex mt-2">
                              {errors.currentPassword}
                            </div>
                          ) : null}
                        </div>
                        <div className="form-group">
                          <Field
                            type="password"
                            className="form-control"
                            placeholder="New Password"
                            name="newPassword"
                          />
                          <span>
                            <img src={changePassword} alt="user-icon" />
                          </span>
                          {errors.newPassword && touched.newPassword ? (
                            <div className="text-danger d-flex mt-2">
                              {errors.newPassword}
                            </div>
                          ) : null}
                        </div>
                        <div className="form-group">
                          <Field
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password"
                            name="confirmPassword"
                          />
                          <span>
                            <img src={changePassword} alt="user-icon" />
                          </span>
                          {errors.confirmPassword && touched.confirmPassword ? (
                            <div className="text-danger d-flex mt-2">
                              {errors.confirmPassword}
                            </div>
                          ) : null}
                        </div>
                        <div className="form-btn text-center">
                          <button className="btn btn-profile" type="submit">
                            Update Password
                          </button>
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
    </div>
  );
};

export default ChangePassword;
