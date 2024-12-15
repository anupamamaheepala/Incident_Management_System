import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../css/home.css";
import IssueCard from "../components/IssueCard";
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
    },
    {
      title: "Service Requests",
      issues: ["Request for a new connection or plan upgrade", "Service delay"],
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
    },
  ];

  return (
    <div>
      <Header />
      <div className="app-container">
        <div>
          <div className="home-container">
            <h1>Facing an Issue? We're Here to Help!</h1>
          </div>
          <p>
            Quickly report any problems or concerns you have with our services.
            Select your issue, provide details, and we’ll ensure it’s resolved
            promptly
          </p>
          <div className="cards-container">
            {issuesData.map((item, index) => (
              <IssueCard
                key={index}
                title={item.title}
                issues={item.issues}
                buttonText="Report"
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
