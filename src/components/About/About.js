import React from 'react'
import '../../sass/_about.scss'

import profile from '../../assets/images/test.png'

const About = () => {
    return (
        <div className="about">
            <div className="home">
              <div className="home__content">
                  <div className="home__content-box">
                    <p className="home__content-category">About</p>
                    <h1 className="home__content-header header">Jenevieve Ting</h1>
                  </div>
                  <div className="home__content-box-2">
                      <div className="floating-div">
                        <h1 className="home__content-header date">2015-2020</h1>
                      </div>
                        <p className="home__content-decscription">I interviewed the feminist lightning rod for Ace Reader — a new online publication for Ace Hotel — about love, hope, fear, friendship, growing in concentric circles, how “being grateful is a burden in itself,” and her lifelong commitment to social justice.</p>
                  </div>
                </div>
            </div>
            <div className="about__image">
                <img src={profile} alt="Jenevieve Ting" />
            </div>
        </div>
    )
}

export default About