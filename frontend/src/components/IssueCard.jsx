import React from "react";
import "../css/IssueCard.css";

const IssueCard = ({ title, issues, buttonText, image }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <ul>
        {issues.map((issue, index) => (
          <li key={index}>{issue}</li>
        ))}
      </ul>
      <div  className="card-image">
      {image && <img src={image} alt={title} className="issue-image" />}
      </div>
      <button className="report-btn">{buttonText}</button>
    </div>
  );
};

export default IssueCard;