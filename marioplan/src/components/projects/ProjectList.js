import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

const ProjectList = ({projects}) => {
  return (
    <div className="project-list section">
      {/* cycle through projects data if there are any 
          and pass it to projectSummary */}
      { projects && projects.map(project => {
        return(
          <Link to={'/project/' + project.id}>
            <ProjectSummary project={project} key={project.id} />
          </Link>
        )
      })}

    </div>
  );
};

export default ProjectList;
