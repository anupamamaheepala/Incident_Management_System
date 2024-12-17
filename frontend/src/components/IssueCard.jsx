import React from "react";
import "../css/IssueCard.css";

const IssueCard = ({ title, issues, buttonText, image }) => {
  return (
    <div className="card">
      {/* Add the image here */}
      <img src={image} alt={title} className="issue-image" />
      
      {/* Title */}
      <h3>{title}</h3>

      {/* Issues List */}
      <ul>
        {issues.map((issue, index) => (
          <li key={index}>{issue}</li>
        ))}
      </ul>
      
      {/* Button */}
      <button className="report-btn">{buttonText}</button>
    </div>
  );
};

export default IssueCard;
