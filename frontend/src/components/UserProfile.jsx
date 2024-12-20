import React from "react";
import { Input, Tag } from "antd";
import Link from "antd/es/typography/Link";
import profileImg from "../images/profileImg.png";
import "../css/userProfile.css";


const UserProfile = () => {
  return (
    <div className="container">
      <div className="bg-image ">
        <div className="profile-info">
          <img
            alt="profileImg"
            style={{
              marginTop :"5px",
              width: "80px",
              height: "80px",
            }}
            src={profileImg}
          />
          <div className="btn-container">
            <Link href="/userProfile/UserSettings">
                <button className="btn btn-primary edit">Edit Profile</button>
            </Link>
          </div>
          <h2>
            {"Anuska"} {"Sampath"}
          </h2>
          <p>
            <strong>Email:</strong>
            <span>
              <a href="mailto:  [email protected]">{"anuk01@gmail.com"}</a>
            </span>
          </p>
        </div>
      </div>

      <div className="banner_for_update_details">
        {/* {!allFieldsFilled && ( */}
        <div className="banner">
          <Tag className="tag" color="red">
            Please fill out all required fields. Click
            <Link href="/userProfile/UserSettings"> here </Link>
            to update your info.
          </Tag>
        </div>
        {/* )} */}
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
        {/* First Name and Last Name */}
        <div style={{ display: "flex", marginTop: "8px" }}>
          <div style={{ marginRight: "8px", flex: 1 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  marginBottom: "3px",
                  fontSize: "12px",
                }}
              >
                First Name
              </span>
              <Input
                size="large"
                style={{ width: "340px", marginRight: "40px" }}
                value={""}
              />
            </div>
          </div>

          <div style={{ flex: 1 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  marginBottom: "3px",
                  fontSize: "12px",
                }}
              >
                Last Name
              </span>
              <Input
                size="large"
                style={{ width: "340px", marginRight: "40px" }}
                value={""}
              />
            </div>
          </div>
        </div>
        {/* Username and NIC */}
        <div style={{ display: "flex", marginTop: "8px" }}>
          <div style={{ marginRight: "8px", flex: 1 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  marginBottom: "3px",
                  fontSize: "12px",
                }}
              >
                Username
              </span>
              <Input
                size="large"
                style={{ width: "340px", marginRight: "40px" }}
                value={""}
              />
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  marginBottom: "3px",
                  fontSize: "12px",
                }}
              >
                NIC
              </span>
              <Input
                size="large"
                style={{ width: "340px", marginRight: "40px" }}
                value={""}
              />
            </div>
          </div>
        </div>
        {/* Billing emial and contact*/}
        <div style={{ display: "flex", marginTop: "8px" }}>
          <div style={{ marginRight: "8px", flex: 1 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  marginBottom: "3px",
                  fontSize: "12px",
                }}
              >
                Billing Email
              </span>
              <Input
                size="large"
                style={{ width: "340px", marginRight: "40px" }}
                value={""}
              />
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  marginBottom: "3px",
                  fontSize: "12px",
                }}
              >
                Contact
              </span>
              <Input
                size="large"
                style={{ width: "340px", marginRight: "40px" }}
                value={""}
              />
            </div>
          </div>
        </div>
        {/* Province and Postal code */}
        <div style={{ display: "flex", marginTop: "8px" }}>
          <div style={{ marginRight: "8px", flex: 1 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  marginBottom: "3px",
                  fontSize: "12px",
                }}
              >
                Province
              </span>
              <Input
                size="large"
                style={{ width: "340px", marginRight: "40px" }}
                value={""}
              />
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  marginBottom: "3px",
                  fontSize: "12px",
                }}
              >
                Postal Code
              </span>
              <Input
                size="large"
                style={{ width: "340px", marginRight: "40px" }}
                value={""}
              />
            </div>
          </div>
        </div>
        {/* Address and Status */}
        <div style={{ display: "flex", marginTop: "8px" }}>
          <div style={{ marginRight: "8px", flex: 1 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  marginBottom: "3px",
                  fontSize: "12px",
                }}
              >
                Address
              </span>
              <Input
                size="large"
                style={{ width: "340px", marginRight: "40px" }}
                value={""}
              />
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  marginBottom: "3px",
                  fontSize: "12px",
                }}
              >
                Status
              </span>
              <Input
                size="large"
                style={{ width: "340px", marginRight: "40px" }}
                value={""}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
