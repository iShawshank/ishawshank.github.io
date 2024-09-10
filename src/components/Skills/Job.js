import React from 'react';
import './Job.css';
import kebabCase from 'lodash/kebabCase';

const Job = ({ job }) => {
  return (
    <a
      href={job.companyLink}
      className="job hover:bg-zinc-800 grid grid-cols-1 lg:grid-cols-5 lg:mx-8 py-4 rounded  px-4 md:px-8"
    >
      <p className="jobTimeline md:col-span-1">{job.timeLine}</p>
      <div className="jobInfo md:col-span-4 px-4">
        <h4 className="jobTitle text-2xl font-normal">{job.title}</h4>
        <h4
          className={`${kebabCase(
            job.company.toLowerCase()
          )} text-xl font-normal`}
        >
          {job.company}
        </h4>
        <p className="jobDesc text-sm mt-2  lg:pr-8">
          {job.description}
        </p>
        <div className="flex flex-wrap pt-4 px-4">
          {job.skills.map((skill) => (
            <span
              className="jobChill flex items-center rounded-full bg-teal-400/10 m-1 px-3 py-1 text-xs font-medium leading-5"
              key={skill}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default Job;
