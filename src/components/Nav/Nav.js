import React, { useState } from 'react'
import '../../sass/_nav.scss'

import profilePic from '../../assets/images/test.png'

const Nav = () => {
    const [ isOpen, setIsOpen ] = useState(false)

    window.onresize = () => (window.innerWidth > 700 && isOpen) && setIsOpen(false)

    return (
        <div className="nav">
            <div className="nav__desktop">
                <div className="nav__top">
                    <h2 className="nav__header">Jenevieve Ting</h2>
                    <div className="nav__list">
                        <p>Projects</p>,
                        <p>About</p>,
                        <p>Contact</p>
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
                        <p><a href="tel:925-915-0977" target="_blank">+1 925 915 0977</a></p>
                    </div>
                    <div className="nav__contact">
                        <p>Email</p>
                        <p><a href="">hello@tingroll.com</a></p>
                    </div>
                    <div className="nav__contact">
                        <p>Socials</p>
                        <p><a href="">@tingrolls</a></p>
                        <p><a href="">Linkedin</a></p>
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