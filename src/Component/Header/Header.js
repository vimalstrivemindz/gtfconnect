import React from "react";
import { Weblogo } from "../../Images/images";
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <>
    <header>
      <div className="container">
        <div className="header_bar">
          <div className="header_logo">
            <Link to="/">
              <img src={Weblogo} alt="img" />
            </Link>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
