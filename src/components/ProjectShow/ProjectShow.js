import React from 'react'

import { Link } from 'react-router-dom'

import { projects } from '../../const/projects'

import '../../sass/_project-show.scss'
 
const ProjectShow = ({ match }) => {
  const project = projects.find((project) => {
    return parseInt(match.params.id) === project.id
  })

  return <>
    {match.isExact && <>
        <div className='project-show'>
            <Link to="/"><p>Back</p></Link>
            <p className="home__content-category">{project.category}</p>
            <h1 className="home__content-header header">{project.header}</h1> 
            <h1 className="home__content-header date">{project.date}</h1>
            <p className="home__content-decscription">{project.description}</p>
        </div>
    </>}
  </>
}

export default ProjectShow