import React from "react";

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus magnam cumque explicabo a necessitatibus quia minus
            earum autem quos, saepe vel repellat at ex dolorem molestiae
            cupiditate omnis ipsa. Aperiam.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Bawa</div>
          <div>Today</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
