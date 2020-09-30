import React from 'react'
import '../../sass/_home.scss'

import { Link } from 'react-router-dom'

import { projects} from '../../const/projects'

const Home = () => {
    return (
        <div className="home">
        {
        projects.map((project, idx) => 
            <div key={idx} className="home__content">
                <Link to={`/${project.id}`}>
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
                </Link>
            </div>
       )
        }
       </div>
    )
}

export default Home