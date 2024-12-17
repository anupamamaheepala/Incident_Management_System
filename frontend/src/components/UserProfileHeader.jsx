import React from 'react';
import '../css/header.css';
import logo from '../images/SLTlogo.jpg'
import profileImg from "../images/profileImg.png";
import  Link from "antd/es/typography/Link";
<img src={profileImg} alt="Logo" />;

const UserProfileHeader = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="nav-menu">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/incidents">Incidents</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <Link href="/userProfile">
        <img
                    alt="profileImg"
                    style={{
                      width: "30px",
                      height: "30px",
                      marginRight:"220px"
                      
                    }}
                    src={profileImg}
                  />
        
        </Link>
      
      </div>
      
    </header>
    
  );
};

export default UserProfileHeader;
