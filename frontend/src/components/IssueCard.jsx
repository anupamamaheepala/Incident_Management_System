import React from "react";
import "../css/IssueCard.css";

const IssueCard = ({ title, issues, buttonText }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <ul>
        {issues.map((issue, index) => (
          <li key={index}>{issue}</li>
        ))}
      </ul>
      <button className="report-btn">{buttonText}</button>
    </div>
  );
};

export default IssueCard;
