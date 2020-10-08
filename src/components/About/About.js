import React from 'react'
import '../../sass/_about.scss'

import profile from '../../assets/images/About/profile.PNG'

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
                        <p className="home__content-decscription">Jenevieve Ting (they/them) is a queer, non-binary writer, artist, facilitator, and thinker. They are the co-editor and co-founder of Loves Me | Loves Me Not, a yearly Valentine’s Day zine featuring work entirely by queer, trans, non-binary, and women artists of color. Their work explores feelings of belonging, possibility, gender, hope, and how queerness & gender non-conformity can act as guides or maps for understanding spaciousness both within & outside of our bodies. Their work has been featured in Netflix, BuzzFeed, ATTN:, Banana Magazine, Slant'd, and NAVEL to name a few. At their yolky core, they believe that we are all fundamentally deserving of abundance, love, complex futures, transformation, non-binary curiosity, pleasure, fresh lychee, and gender euphoria.</p>
                  </div>
                </div>
            </div>
            <div className="about__image-container">
              <div className="about__image">
                  <img src={profile} alt="Jenevieve Ting" />
              </div>
            </div>
            <div className="about__bottom-content">
              <div className="about-credits">
                <div className="about-credits__section">
                  <p>Photography</p>
                  <p>JT</p>
                </div>
                <div className="about-credits__section">
                  <p>Website desinged by</p>
                  <p>Karlo Muro</p>
                </div>
                <div className="about-credits__section">
                  <p>Developed by</p>
                  <p>Brent Ahrens</p>
                </div>
                <div className="about-credits__section">
                  <p>Resume</p>
                  <p>CV</p>
                </div>
              </div>
            </div>
        </div>
    )
}

export default About