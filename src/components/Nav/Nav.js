import React, { useState } from 'react'
import '../../sass/_nav.scss'

import { Link } from 'react-router-dom'

import profilePic from '../../assets/images/test.png'

const Nav = () => {
    const [ isOpen, setIsOpen ] = useState(false)
    const [ clickedAbout, setClickedAbout ] = useState(false)
    const [ clickedProjects, setClickedProjects ] = useState(true)

    window.onresize = () => (window.innerWidth > 700 && isOpen) && setIsOpen(false)

    const projectClicked = () => {
        setClickedProjects(true)
        setClickedAbout(false)
    }

    const aboutClicked = () => {
        setClickedAbout(true)
        setClickedProjects(false)
    }

    return (
        <div className="nav">
            <div className={`${clickedAbout ? "nav__desktop-gradient" : "nav__desktop"}`}>
                <div className="nav__top">
                    <h2 onClick={() => setClickedAbout(false)} className="nav__header"><Link to="/">Jenevieve Ting</Link></h2>
                    <div className="nav__list">
                        <p onClick={projectClicked} className={clickedProjects ? 'underline' : ''}><Link to="/">Projects</Link></p>,
                        <p onClick={aboutClicked} className={clickedAbout ? 'underline' : ''}><Link to="/about">About</Link></p>,
                        <p><Link to="/">Contact</Link></p>
                    </div>
                    <div className="nav__profile-pic">
                        <img src={profilePic} alt="Jenevieve Ting" />
                    </div>
                    <div className="nav__location">
                        <p>Los Angeles, CA</p>
                        <p>7:03PM 80 Degrees</p>
                    </div>
                </div>
                <div className="nav__bottom">
                    <div className="nav__contact">
                        <p>Telephone</p>
                        <p><a href="tel:925-915-0977" target="_blank" rel="noopener noreferrer">+1 925 915 0977</a></p>
                    </div>
                    <div className="nav__contact">
                        <p>Email</p>
                        <p><a href="mailto:hello@tingroll.com" target="_blank" rel="noopener noreferrer">hello@tingroll.com</a></p>
                    </div>
                    <div className="nav__contact">
                        <p>Socials</p>
                        <p><a href="https://www.instagram.com/tingrolls/" target="_blank" rel="noopener noreferrer">@tingrolls</a></p>
                        <p><a href="https://www.linkedin.com/in/jenevieveting/" target="_blank" rel="noopener noreferrer">Linkedin</a></p>
                    </div>
                </div>
            </div>
            <div className="nav__mobile">
                <h2 className="nav__header-mobile">Jenevieve Ting</h2>
                <div className="nav__target" onClick={() => setIsOpen(!isOpen)} />
            </div>
            <div className={`overlay ${isOpen ? 'active' : ''}`}>
                <div className="overlay__links">
                    <h2>Projects</h2>
                    <h2>About</h2>
                    <h2>Contact</h2>
                </div>
            </div>
        </div>
    )
}

export default Nav