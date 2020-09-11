import React from 'react'
import '../../sass/_nav.scss'

import profilePic from '../../assets/images/test.png'

const Nav = () => {
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
                <div className="nav__target" />
            </div>
        </div>
    )
}

export default Nav