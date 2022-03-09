import React from "react";

const ProjectSummary = ({project}) => {
    return (
        // single card 
        <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <span className="card-title">{project.title}</span>
          <p>Posted by Tet</p>
          <p className="grey-text">Today</p>
        </div>
      </div>
    )
}

export default ProjectSummary;