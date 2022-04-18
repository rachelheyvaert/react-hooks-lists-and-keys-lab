import React from "react";

function ProjectItem({ name, about, technologies }) {
  const allTech = technologies.map((tech)=> {
    return(
    <span key={tech.id}>{tech.name}</span>)
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {allTech}
        {/* render a <span> for each technology in the technologies array */}
      </div>
    </div>
  );
}

export default ProjectItem;
