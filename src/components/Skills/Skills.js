import React from 'react';
import './Skills.css';
import { resumeData } from '../../data/resumeData';
import Job from './Job';

const Skills = () => {
  return (
    <section id="skills" className="grid grid-cols-1 lg:grid-cols-2">
      <div className="about-me-wrapper hidden md:flex">
        <div className="aboutMe flex flex-col justify-start items-center">
          <h4 className="aboutMeHeader text-3xl font-normal mb-4">
            Who am I?
          </h4>
          <p className="aboutMeText">{resumeData.whoAmI}</p>
          <br />
          <p className="aboutMeText">{resumeData.whoAmI2}</p>
          <br />
          <p className="aboutMeText">{resumeData.whoAmI3}</p>
          <br />
          <p className="aboutMeText">{resumeData.outsideOfWork}</p>
        </div>
      </div>
      <div className="experience flex flex-col px-4">
        {resumeData.experience.map((job) => (
          <Job job={job} key={job.id} />
        ))}
        <a
          href="/resume.pdf"
          target="_blank"
          className="resumeLink lg:ml-8 lg:mt-8"
        >
          View full Resume >
        </a>
      </div>
    </section>
  );
};

export default Skills;
