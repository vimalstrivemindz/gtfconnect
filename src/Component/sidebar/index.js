import React from "react";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div className="message-area">
        <div className="chat-area">
          <div className="chat-menu-area">
            <div className="menuchat-bar">
              <ul className="nav nav-tabs menutab" id="myTab" role="tablist">
                <li
                  className="nav-item"
               
                >
                  <NavLink to="/" className="nav-link">
                    <i className="fa-solid fa-house" />
                  </NavLink>
                </li>
                <li className="nav-item" 
                >
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
                <li className="nav-item">
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
