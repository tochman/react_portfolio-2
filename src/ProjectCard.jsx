import React from "react";

const ProjectCard = ({ project }) => {
  return  (
    <>
      <div class="ui card">
        <div class="image">
          <img src={project.image} />
        </div>
        <div class="content">
             <h3 class="ui header">{project.name}</h3>
             

          <div class="description">{project.description}</div>
          <br></br>
          <div className="href"><a href={project.link}>Take me to the Github</a></div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;