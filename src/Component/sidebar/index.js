import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { baseUrlMain } from "../../store/axios";
const Sidebar = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const UserLogOut = async () => {
    const formData = new FormData();
    formData.append("IsLogging", true);
    formData.append("logout", 0);
    formData.append("is_gtf_connect", 1);
    try {
      baseUrlMain
        .post("logout", formData, {
          headers:{
            Accept: "application/json",
            DeviceToken: "test_token",
            DeviceType: "Ios",
            Authorization: `Bearer ${token}`,
          }
        })
        .then((res) => {
          if (res?.data?.status === 200) {
            navigate("/login");
            toast.success(res?.data?.message);
            localStorage.clear();
          } else {
            toast.error(res?.data?.message);
          }
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="message-area">
        <div className="chat-area">
          <div className="chat-menu-area">
            <div className="menuchat-bar">
              <ul className="nav nav-tabs menutab" id="myTab" role="tablist">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    <i className="fa-solid fa-house" />
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/mentor" className="nav-link">
                    <i className="fa-regular fa-message" />
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/group" className="nav-link">
                    <i className="fa-solid fa-user-group" />
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/channel" className="nav-link">
                    <i className="fa-solid fa-tv" />
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/setting" className="nav-link">
                    <i className="fa-solid fa-gear" />
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/message" className="nav-link">
                    <i className="fa-regular fa-bookmark" />
                  </NavLink>
                </li>
                <li className="nav-item" onClick={UserLogOut}>
                  <NavLink to="/logout" className="nav-link">
                    <i className="fa-solid fa-arrow-right-to-bracket" />
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
