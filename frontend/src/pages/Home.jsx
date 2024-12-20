import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../css/home.css";
import IssueCard from "../components/IssueCard";
import feedbackImg from "../images/feedbackImg.png";
import homebackImg from "../images/homebackImg.png";


function Home() {
  const issuesData = [
    {
      title: "Billing and Payment Issues",
      issues: [
        "Incorrect billing",
        "Duplicate charges",
        "Unreflected payments",
        "Refund requests for failed transactions",
      ],
      image: require("../images/billImg.png"),
    },
    {
      title: "Service Interruptions",
      issues: [
        "Internet not working (fiber, DSL, or mobile data)",
        "Call drops or poor voice quality",
        "SMS/MMS delivery failures",
      ],
    },
    {
      title: "Issues with SIM",
      issues: ["SIM activation or deactivation", "Lost or stolen SIM requests"],
      image: require("../images/simImg.png"),
    },

    {
      title: "Service Requests",
      issues: [
        "Request for a new connection ",
        "Request for plan upgrade",
        "Service delay",
      ],
      image: require("../images/serviceReqImg.png"),
    },
    {
      title: "Customer Portal or App Issues",
      issues: [
        "Login or registration errors",
        "Features not working (e.g., plan change, bill payment)",
        "Billing history access issues",
      ],
    },
    {
      title: "Device-Related Issues",
      issues: ["Router not working", "Faulty SIM card replacements"],
      image: require("../images/deviceissueImg.png"),
    },
  ];

  return (
    <div className="home-background">
      <Header />
      <div className="app-container">
        <div>
          <div className="home-container">
            <h1>Facing an Issue? We're Here to Help!</h1>
          </div>
          <p className="para-line">
            Quickly report any problems or concerns you have with our services.
            <br />
            Select your issue, provide details, and we’ll ensure it’s resolved
            promptly
          </p>
          <div className="cards-container">
            {issuesData.map((item, index) => (
              <IssueCard
                key={index}
                title={item.title}
                issues={item.issues}
                image={item.image}
                buttonText="Report"
              />
            ))}
          </div>
        </div>
        <div className="feedback-section">
          <h3>Feedback and Suggestions</h3>
          <ul>
            <li>
              We value your opinion! Please share your feedback to help us
              <br />
              improve our services and serve you better.
            </li>
          </ul>
          <div className="feedback-img">
            <img
              alt="profileImg"
              style={{
                marginTop: "-100px",
                marginLeft: "500px",
                width: "100px",
                height: "100px",
              }}
              src={feedbackImg}
            />
          </div>
          <button className="feedback-btn">Feedback</button>

        </div>
       
      </div>
      <img
              alt="profileImg"
              style={{
                marginTop: "-320px",
                marginLeft: "920px",
                marginBottom: "50px",
                width: "400px",
                height: "300px",
              }}
              src={homebackImg}
            />
      <Footer />
    </div>
  );
}

export default Home;
