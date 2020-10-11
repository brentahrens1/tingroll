import React from 'react'
import '../../sass/_project-show.scss'
import '../../sass/_home.scss'

import { Link } from 'react-router-dom'

import { projects } from '../../const/projects'
 
const ProjectShow = ({ match }) => {

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
 };

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
                      {project.category}
                      {project.header}
                  </div>
                  <div className="home__content-box-2">
                      <div className="floating-div">
                        {project.date}
                      </div>
                      {project.description}
                  </div>
              </div>
            </div>
            {project.type === "interview" ? 
              <div className="interview">
                <div className="interview__top">
                  <div className="interview__top-img">
                    {project.topImage}
                  </div>
                </div>
                <div className="interview__section">
                      {project.tag}
                  <div className="interview__body">
                    {project.interviewBody}
                    <div className="interview__pull-quote-section">
                      {project.pullQuote}
                    </div>
                    <div className="show__credits">
                      {project.credits}
                    </div>
                  </div>
                </div>
                <p className="scroll-top" onClick={scrollTop}>Back to top</p>
              </div>
              :
              <div className="show">
                <div className="show__top">
                    {project.tag}
                  <div className="show__top-img">
                    {project.topImage}
                  </div>
                </div>
                <div className="show__section">
                  <div className="show__section-date-tag">
                    {project.dateTag}
                  </div>
                  <div className="show__section-content">
                    <div>
                      {project.tag2}
                    </div>
                    <div className="show-body-container">
                      {project.title}
                      {project.showBody}
                    </div>
                  </div>
                </div>
                <div className="show__bottom">
                  {project.showImageLayout1}
                  {project.imageTwo}
                  {project.imageThree}
                  <div className="bottom-flex-container">
                    {project.tag3}
                    {project.imageFour}
                  </div>
                </div>
                <div className="show__credits">
                  {project.credits}
                </div>
                <p className="scroll-top" onClick={scrollTop}>Back to top</p>
              </div> 
            } 
            {
              project.id < projects.length - 1 ?
              <Link to={`/${project.id + 1}`}><p className="next">Next</p></Link>
              : null
            }
            {
              project.id > 0 ?
              <Link to={`/${project.id - 1}`}><p className="previous">Previous</p></Link>
              : null
            }
        </div>
    </>}
  </>
}

export default ProjectShow