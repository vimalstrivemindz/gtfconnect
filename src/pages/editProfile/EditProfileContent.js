import React from "react";
import {
  additionalInfoIcon,
  billingIcon,
  changePassword,
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

const EditProfileContent = () => {
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
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Rohit"
                              />
                              <span>
                                <img src={userIcon} alt="user-icon" />
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Last Name"
                              />
                              <span>
                                <img src={userIcon} alt="user-icon" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Billing Name(Optional)"
                          />
                          <span>
                            <img src={billingIcon} alt="user-icon" />
                          </span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <select className="form-control">
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                          <span>
                            <img src={generalIcon} alt="user-icon" />
                          </span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Additional Info(Optional)"
                          />
                          <span>
                            <img src={additionalInfoIcon} alt="user-icon" />
                          </span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="mail"
                            className="form-control"
                            placeholder="rohit@gmail.com"
                          />
                          <span>
                            <img src={messageMailIcon} alt="user-icon" />
                          </span>
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
                          <input
                            type="text"
                            className="form-control date-form"
                            placeholder="10/11/1997"
                          />
                          <span>
                            <img src={dateInfoIcon} alt="user-icon" />
                          </span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Mansarover Jaipur rajasthan"
                          />
                          <span>
                            <img src={cidyIcon} alt="user-icon" />
                          </span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group number-input">
                          <div className="group">
                            <select className="con form-control">
                              <option />
                            </select>
                            <select className="num form-control">
                              <option>+91</option>
                            </select>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder={9658458658}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <select className="form-control">
                                <option>India</option>
                              </select>
                              <span>
                                <img src={countryIcon} alt="user-icon" />
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <select className="form-control">
                                <option>Rajasthan</option>
                              </select>
                              <span>
                                <img src={countryIcon} alt="user-icon" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="GST Number(Optional)"
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
                              <select className="form-control">
                                <option>Jaipur</option>
                              </select>
                              <span>
                                <img src={cityIcon} alt="user-icon" />
                              </span>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder={332020}
                              />
                              <span>
                                <img src={codeIcon} alt="user-icon" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 text-center">
                        <div className="form-btn">
                          <button className="btn btn-profile" type="button">
                            Update Profile
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="changepassword-blog d-none">
              <div className="change-password-header">
                <strong>Change Password</strong>
              </div>
              <div className="change-password-inner">
                <div className="change-password-form">
                  <h2>Change Password</h2>
                  <form>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Current Password"
                      />
                      <span>
                        <img src={changePassword} alt="user-icon" />
                      </span>
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Current Password"
                      />
                      <span>
                        <img src={changePassword} alt="user-icon" />
                      </span>
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Current Password"
                      />
                      <span>
                        <img src={changePassword} alt="user-icon" />
                      </span>
                    </div>
                    <div className="form-btn text-center">
                      <button className="btn btn-profile" type="button">
                        Update Password
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfileContent;
