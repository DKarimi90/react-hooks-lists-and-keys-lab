import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  // const {id, name, about, technologies } = projects 
  console.log(projects);
  let ProjectI = projects.map((project) => <ProjectItem key = {project.id} name = {project.name} about = {project.about} technologies = {project.technologies}/>)
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */}
          {ProjectI}
      </div>
    </div>
  );
}

export default ProjectList;
