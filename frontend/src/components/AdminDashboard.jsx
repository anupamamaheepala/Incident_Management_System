import React from "react";
import { Input, Tag } from "antd";
import Link from "antd/es/typography/Link";
import profileImg from "../images/profileImg.png";
import "../css/userProfile.css";

const AdminDashboard = () => {
  return (
    <div className="container">
      <div className="bg-image ">
        <h1>admin page</h1>
      </div>

      

      <div
        className="add_user_details_container_right"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "5px",
          marginBottom: "40px",
        }}
      >
        <h2>hello</h2>
      </div>
    </div>
  );
};
export default AdminDashboard;
