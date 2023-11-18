import React, { useState } from 'react';
import './SingleProject.css';

const SingleProject = ({ project }) => {
  const [showTechnology, setShowTechnology] = useState(false);
  const [listClass, setListClass] = useState('hidden');

  const handleClick = (event) => {
    event.preventDefault();

    const newListClass = !showTechnology ? 'block' : 'hidden';
    setShowTechnology(!showTechnology);
    setListClass(newListClass);
  };

  return (
    <div className="project rounded flex flex-col items-center mt-8">
      <div
        className={
          'imageContainer flex justify-center items-center ' +
          project.imgType
        }
      >
        <img
          className="image"
          src={require(`../../assets/${project.img}`)}
          alt={project.altText}
        />
      </div>
      <h4 className="projectHeader text-2xl font-normal">
        {project.name}
      </h4>
      <div className="projectDesc p-4 px-16 lg:px-4">
        <p className="projectDescText my-4">{project.description}</p>
        <div className="rounded-lg w-full">
          <h4
            className="text-center font-normal py-2 text-lg link"
            onClick={handleClick}
          >
            Key technologies >
          </h4>
          <ul className={'list-disc ml-6 ' + listClass}>
            {Object.entries(project.keyTechnologies).map(
              ([key, value]) => {
                return (
                  <li key={project.name + key} className="bullet">
                    <span className="font-semibold">{key}</span>:{' '}
                    {value}
                  </li>
                );
              }
            )}
          </ul>
        </div>
        <p className="projectDescText my-4">{project.description2}</p>
      </div>
      {project.url !== '' && (
        <a
          target="_blank"
          rel="noreferrer"
          className="link"
          href={project.url}
        >
          Check it out >
        </a>
      )}
    </div>
  );
};

export default SingleProject;
