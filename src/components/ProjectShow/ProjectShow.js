import React from 'react'
import '../../sass/_project-show.scss'
import '../../sass/_home.scss'

import { Link } from 'react-router-dom'

import { projects } from '../../const/projects'
 
const ProjectShow = ({ match }) => {
  const project = projects.find((project) => {
    return parseInt(match.params.id) === project.id
  })

  return <>
    {match.isExact && <>
        <div className='project-show'>
            <Link className="project-show__back" to="/"><p>Back</p></Link>
            <div className="home">
              <div className="home__content">
                  <div className="home__content-box">
                      <p className="home__content-category">{project.category}</p>
                      <h1 className="home__content-header header">{project.header}</h1> 
                  </div>
                  <div className="home__content-box-2">
                      <div className="floating-div">
                        <h1 className="home__content-header date">{project.date}</h1>
                      </div>
                      <p className="home__content-decscription">{project.description}</p>
                  </div>
              </div>
            </div>
            {project.type === "interview" ? 
              <h1 className="home__content-header header">{`interview : ${project.header}`}</h1>
              :
              <div className="show">
                <div className="show__top">
                  <p>{project.tag}</p>
                <div className="show__top-img">
                  <img src={project.topImage} alt={project.title} />
                </div>
              </div>
            </div> 
          } 
        </div>
    </>}
  </>
}

export default ProjectShow