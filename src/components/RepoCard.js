import React from "react"; 
import "./RepoCard.css"; 
import databaseIcon from "../assets/database-icon.png"; 

const RepoCard = ({ repoData }) => {
  
  // Destructuring the repoData object to extract the necessary fields
  const { name, badge, language, size, updated } = repoData;

  return (
    <div className="repo-card">
      <div className="repo-card-inner">
        
        {/* Repo Info Section: Displays the name and badge of the repository */}
        <div className="repo-info">
          <div className="repo-name">{name}</div>
          <div className="repo-badge">
            <div className="badge-text">{badge}</div>
          </div>
        </div>

        {/* Repo Details Section: Displays technical information about the repository */}
        <div className="repo-details">
          
          {/* Tech Section: Shows the programming language of the repo */}
          <div className="repo-tech">
            <div className="tech-name">{language}</div>
            <div className="tech-dot"></div> {/* Just a separator */}
          </div>

          {/* Size Section: Displays the size of the repository with an icon */}
          <div className="repo-size">
            <img src={databaseIcon} alt="Database icon" className="size-icon" />
            <div className="size-info">{size}</div>
          </div>

          {/* Last Update Section: Displays the last updated time of the repo */}
          <div className="repo-update">
            <div className="update-info">{updated}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoCard;


