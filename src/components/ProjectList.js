import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const allProjects = projects.map((project)=> {
    return <span key={project.id}>{project.name}</span>
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {allProjects}
      </div>
    </div>
  );
}

export default ProjectList;
