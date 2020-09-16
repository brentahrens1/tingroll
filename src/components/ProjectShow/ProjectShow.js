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
                  <div className="spacer" />
                  <div className="interview__top-img">
                    {project.topImage}
                  </div>
                </div>
                <div className="interview__section">
                  <div className="interview__top">
                    <div className="interview__section-tag">
                      {project.tag}
                    </div>
                    <div className="interview__question-first interview__lines">
                        <h1>Jenevieve Ting:</h1>
                        <p>It’s such a pleasure to get to talk to you.</p>
                    </div>
                  </div>
                  <div className="interview__body">
                    <div className="interview__answer interview__lines">
                      <h1>Gloria Steinem:</h1>
                      <p>Yes, it’s nice to talk to you. I feel like we’re related, (laughs) right?</p>
                    </div>
                    <div className="interview__question interview__lines">
                      <h1>JT:</h1>
                      <p>It was such a great experience and I really credit it as my first foray into feminism and social justice, so I’m so grateful for all of the work that you’ve done.</p>
                    </div>
                    <div className="interview__answer interview__lines">
                      <h1>GS:</h1>
                      <p>I get to do what I care about, so there’s no greater reward than that.</p>
                    </div>
                    <div className="interview__pull-quote-section">
                      <p>Gloria Pull Quote</p>
                      <div className="interview__pull-quote">
                        <h3>“But if those hopes weren’t already real inside you, you couldn’t hope them. So it makes no sense to allow those to be taken away from you because you have the power to hang onto them”.</h3>
                      </div>
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
                    {project.title}
                    {project.showBody}
                  </div>
                </div>
                <div className="show__bottom">
                  {project.imageTwo}
                  {project.imageThree}
                </div>
                <div className="show__credits">
                  {project.credits}
                </div>
                <p className="scroll-top" onClick={scrollTop}>Back to top</p>
              </div> 
            } 
        </div>
    </>}
  </>
}

export default ProjectShow