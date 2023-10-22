import React from 'react'
import './SingleProject.css'

const SingleProject = ({project}) => {
  return (
    <div
      className='project rounded flex flex-col items-center hover:bg-zinc-800 mt-8' 
      
    >
      <div className={'imageContainer flex justify-center items-center ' + project.imgType}>
        <img className='image' src={require(`../../assets/${project.img}`)} alt={project.altText} />
      </div>
      <h4 className='projectHeader text-2xl font-normal'>{project.name}</h4>
      <p className='projectDesc p-4 px-16 lg:px-4' dangerouslySetInnerHTML={{__html: project.description}} />
      { project.url !== '' && (<a href={project.url} target='_blank' rel="noreferrer" className='link'>Check it out ></a>)}
    </div>
  )
}

export default SingleProject