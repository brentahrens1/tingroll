import React from 'react'
import '../../sass/_home.scss'

import { Link } from 'react-router-dom'

import { projects} from '../../const/projects'

const Home = () => {
    return (
        <div className="home">
        {
        projects.map(project => 
            <div className="home__content">
                <Link to={`/${project.id}`}>
                    <div className="home__content-box">
                        <p className="home__content-category">{project.category}</p>
                        <h1 className="home__content-header header">{project.header}</h1> 
                    </div>
                    <div className="home__content-box-2">
                        <h1 className="home__content-header date">{project.date}</h1>
                        <p className="home__content-decscription">{project.description}</p>
                    </div>
                </Link>
            </div>
       )
        }
       </div>
    )
}

export default Home