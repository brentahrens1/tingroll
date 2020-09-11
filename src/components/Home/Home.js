import React from 'react'
import '../../sass/_home.scss'

import { projects} from '../../const/projects'

const Home = () => {
    return (
        <div className="home">
        {
        projects.map(project => 
            <div className="home__content">
                <div className="home__content-box">
                    <p className="home__content-category">{project.category}</p>
                    <h1 className="home__content-header">{project.header}</h1> 
                </div>
                <p className="home__content-decscription">{project.description}</p>
            </div>
       )
        }
       </div>
    )
}

export default Home