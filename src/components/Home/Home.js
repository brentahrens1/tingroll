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
                        <div>
                            {project.category}
                        </div>
                        <div>
                            {project.header}
                        </div>
                    </div>
                    <div className="home__content-box-2">
                        <div className="floating-div">
                            <div>
                                {project.date}
                            </div>
                        </div>
                        <div>
                            {project.description}
                        </div>
                    </div>
                </Link>
            </div>
       )
        }
       </div>
    )
}

export default Home