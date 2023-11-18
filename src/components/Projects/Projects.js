import React from 'react';
import { resumeData } from '../../data/resumeData';
import SingleProject from './SingleProject.js';
import './Projects.css';

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center"
    >
      <h4 className="projectsHeader text-4xl font-semibold py-4 mt-8 lg:mt-0">
        My Projects
      </h4>
      <div className="projectGrid grid grid-cols-1 lg:grid-cols-3 w-full">
        {resumeData.projects.map((project) => (
          <SingleProject project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
