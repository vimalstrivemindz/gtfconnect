import React from "react";
import { Link } from "react-router-dom";
import { blocklist, dataIcon, notifications } from "../../Images/images";
const SettingChat = ({title}) => {
  return (
    
    <div
    className="tab-pane fade show"
    // id="setting-pane"
    // role="tabpanel"
    // aria-labelledby="setting-tab"
    // tabIndex={0}
  >
    <div className="user-chat-area">
      <div className="user_chatlist">
        <div className="chatlist-bar">
          <div className="chatlist-inner">
            <div className="chatlist-header">
              <div className="chatlist-title">
                <h2>{title}</h2>
              </div>
            </div>
            <div className="setting_tab_menu">
              <ul>
                <li>
                  <div className="setting_tab_box">
                    <span>
                      <img src={notifications} alt="notifications" />
                    </span>
                    <div className="setting-tab-content">
                      <strong>
                        <Link to="#">Notifications</Link>
                      </strong>
                      <div className="setting-check">
                        <div className="setting-check-tab">
                          <input
                            type="checkbox"
                            name
                            id="checksetting"
                            className="same-check-setting"
                          />
                          <label htmlFor="checksetting">
                            <span />
                            Notifications for chats
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="setting_tab_box">
                    <span>
                      <img src={dataIcon} alt="data-icon" />
                    </span>
                    <div className="setting-tab-content">
                      <strong>
                        <Link to="#">Data and Storage</Link>
                      </strong>
                      <div className="setting-check">
                        <div className="setting-check-tab">
                          <input
                            type="checkbox"
                            name
                            id="checksetting1"
                            className="same-check-setting"
                          />
                          <label htmlFor="checksetting1">
                            <span />
                            Autoplay GIF
                          </label>
                        </div>
                        <div className="setting-check-tab">
                          <input
                            type="checkbox"
                            name
                            id="checksetting2"
                            className="same-check-setting"
                          />
                          <label htmlFor="checksetting2">
                            <span />
                            Autoplay Video
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="setting_tab_box">
                    <span>
                      <img src={blocklist} alt="block-list" />
                    </span>
                    <div className="setting-tab-content">
                      <strong>
                        <Link to="#">Block List</Link>
                      </strong>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default SettingChat;
