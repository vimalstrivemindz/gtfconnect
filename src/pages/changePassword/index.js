import React from "react";
import SettingChat from "../../Component/chatLeft/SettingChat";
import Sidebar from "../../Component/sidebar";
import { changePassword } from "../../Images/images";

const ChangePassword = () => {
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
    </div>
  );
};

export default ChangePassword;
