import React from 'react'

// Queer Love is Spacious

import Spacious from '../assets/images/QueerLoveIsSpacious/queer-love-is-spacious.png'

// NETFLIX’S “QUEER IS BEAUTIFUL”

import Netflix from '../assets/images/Netflix/netflix.png'

// Asian America: The Future is Now
import AsianAmerica from '../assets/images/AsianAmerica/header-image.png'
import AsianAmerica2 from '../assets/images/AsianAmerica/pic.png'
import AsianAmerica3 from '../assets/images/AsianAmerica/pic2.png'

// Interview Gloria Steinem

import Gloria from '../assets/images/GoriaSteinem/gloria.png'

export const projects = [
    //Queer Love Is Spacious
    {
        type: 'poem',
        category: <p className="home__content-category">Performance & Poem</p>,
        header: <h1 className="home__content-header header">Queer Love Is Spacious</h1>,
        date: <h1 className="home__content-header date">July 2020–Present</h1>,
        description: <p className="home__content-decscription">How can a queer & non-binary lens or "framework" help us to better access other parts of ourselves with a greater sense of love & imagination? This recurring writing, thinking, and feeling workshop focuses on the ways QTBIPOC love can be rooted in & guided by a belief in spaciousness, the ceaseless ebb & flow of our own expansion, and how queerness is its own form of poetry.</p>,
        id: 0,
        tag: <div className="tag"><p>Photo:<br /> "Grand Country"<br /> for Asian America:<br /> The Future is Now</p></div>,
        topImage: <img src={Spacious} alt='Queer Love Is Spacious' />,
    },
    //Netflix's “Queer is Beautiful”
    {
        type: 'poem',
        category: <p className="home__content-category">Performance & Poem</p>,
        header: <h1 className="home__content-header header">Netflix's “Queer is Beautiful”</h1>,
        date: <h1 className="home__content-header date">August 2020</h1>,
        description: <p className="home__content-decscription">A Pride variety showcase for LGBTQIA+ artists, musicians, poets (including me!), and comedians for Netflix’s internal team, hosted by Alyssa Edwards. Video performance shot and edited by my dear friend & collaborator Kyoko Takenaka.</p>,
        id: 1,
        tag: <div className="tag"><p>Photo:<br /> "Grand Country"<br /> for Asian America:<br /> The Future is Now</p></div>,
        topImage: <img src={Netflix} alt='Netflix Queer is Beautiful' />,
    },
    //Married To Movement
    {
        type: 'poem',
        category: <p className="home__content-category">Performance & Poem</p>,
        header: <h1 className="home__content-header header">“Married To Movement” For Art Breather</h1>,
        date: <h1 className="home__content-header date">June 2020</h1>,
        description: <p className="home__content-decscription">Organized by my friend Lauren Moon & Kim Ndombe, this piece was written and performed as part of a group art show titled “Art Breather,” an opportunity to take a collective breath and remember that “joy is a form of protest.”</p>,
        id: 2,
        tag: <div className="tag"><p>Photo:<br /> "Grand Country"<br /> for Asian America:<br /> The Future is Now</p></div>,
        topImage: <img src={AsianAmerica} alt='Married To Movement' />,
    },
    // Asian America: The Future is Now
    {
        type: 'poem',
        category:<p className="home__content-category">Performance & Poem</p>,
        header:<h1 className="home__content-header header">Asian America: The Future is Now</h1>,
        date:<h1 className="home__content-header date">June 2020</h1>,
        description:<p className="home__content-decscription">Organized by my friend Lauren Moon & Kim Ndombe, this piece was written and performed as part of a group art show titled “Art Breather,” an opportunity to take a collective breath and remember that “joy is a form of protest.”</p>,
        id: 3,
        tag:<div className="tag">
                <p>Photo:<br /> "Grand Country"<br /> for Asian America:<br /> The Future is Now</p>
            </div>,
        topImage: <img src={AsianAmerica} alt='Asian America: The Future is Now' />,
        imageTwo: <img src={AsianAmerica2} alt='Asian America: The Future is Now' />,
        imageThree: <img src={AsianAmerica3} alt='Asian America: The Future is Now' />,
        dateTag:<div className="date-tag">
                    <p>May 2020.<br /> 900 words<br /> 3:60 Min.</p>
                </div>,
        title:<h1>Grand Country</h1>,
        showBody:<p>my grandmother was born in Shanghai in 1939<br /> in chinese, her name means “grand country.”<br /> she was given a name meant for a boy,<br /> because in chinese, “country” is masculine —<br /> i am familiar with the way man can mean space,<br /> boy can mean borders,<br />
                    how a body marked by its grandeur is often just another way of saying<br /> that gender is not something to be shared freely,<br /> or transgressed easily.<br /><br /> the binary in chinese is not so unlike a great wall,<br /> a rigid, fortified structure meant to keep a kind of person in<br />
                    and another kind out but that, in the end, never managed to do either —<br /> and instead, stood as a testament to what it looks like to separate two things,<br /> i cannot help but wonder sometimes —<br /> if my Abu knew being a woman wasn’t about being contained<br /> would she be proud of her name,<br />
                    the way that i am learning to be proud of my own, or<br /> the way that i am just now learning what it means to unlearn that great wall, brick by brick<br /> and reclaiming what it means to belong to your own country.<br /><br /> my Abu tells me one afternoon,<br /> “i’m a girl, but i’ve always felt like a boy,<br />
                    just like you.”<br /> in that moment, we are the same age,<br /> just old enough to know that being a woman is an answer we are too young to question our bodies into<br /> becoming,<br /> we are just learning not to un-peel our fear if it is not ripe yet<br /> and<br /> we have the same face,<br /> round like a moon that always hides half of herself away.<br />
                    i want to tell her about the conversations i’ve been having about gender,<br /> tell her that sometimes dysphoria<br /> feels a lot like diaspora, like that “grand country” she knows so well is a place i’m still trying to reach<br /> but perhaps she already knows this,<br /> and perhaps there are no words for me to describe it anyways,<br />
                    because what is gender if not a question swallowing another question whole?<br /> a younger generation asking what an older one could not?<br /> what is the future if not a homecoming to your past?<br /> sometimes,<br /> i’ve found,<br /> the best way to build tomorrow is to return to it.<br /><br /> when my grandma is describing the man who brings her strawberries on the weekend,<br />
                    she often says,<br /> “she brought me strawberries”<br /> when talking about her girl dog, she says,<br /> “he is so loyalty, he is such a good boy.”<br /> in chinese, the words for “he” and “she” sound exactly the same.<br /> upon hearing tā, you would have no way of knowing a person’s gender<br /> which is often why my grandma gets the pronouns mixed up in english.<br />
                    she often tells stories about people she meets,<br /> switching and careening and dissolving “he” from “she” like the swish of a fan,<br /> she does not think much of it these days.<br /> sometimes, she catches herself and says a different pronoun,<br /> but her tone stays the same—<br /> i want to believe in her mind that the person does too.<br /> when my grandma says “tā,”<br />
                    what i think she means is<br /> “i was once afraid to be whole too”<br /> or<br /> “these words are houses with leaky roofs”<br /> or<br /> “i still believe i could belong to myself”<br /> so,<br /> when my mother corrects my grandmother<br /> for “misgendering” people on accident,<br /> i can’t help but smile because<br /> maybe in her mind there is a future where these pronouns fail to encompass who we are too, and<br />
                    i want to believe i can live in that version of tomorrow too,<br /> so<br /> i don’t think my grandma is getting anything wrong about gender,<br /> i think she is telling us exactly how we’ve always wanted to be so,<br /> meet me there.<br /> there is a version of my future that looks exactly like my grandmother’s past<br />
                    and in that future, there is no way of knowing my gender when you hear me either<br /> i am a walking tā<br /> like a guiltless bird<br /> i am every bit the place my grandma’s name built her up to be<br /> and every misspoken gender still waiting to greet me<br /> i am not imagining a future beyond gender,<br /> i am embodying it.<br />
                    and there is no grander country than that.</p>,
        credits:<>
                <div className="show__credits-section">
                    <p>Photography</p><p>JT</p>
                </div>
                <div className="show__credits-section">
                    <p>Poem</p><p>JT</p>
                </div>
                <div className="show__credits-section">
                    <p>Performance</p><p>JT</p>
                </div><div className="show__credits-section">
                    <p>Curated Performace</p><p>JT, MK, KM, KN</p>
                </div>
                </>
    },
    // Gloria Steinem Interview
    {
        type: 'interview',
        category:<p className="home__content-category">Interview</p>,
        header:<h1 className="home__content-header header">Goria Steinem</h1>,
        date:<h1 className="home__content-header date">Aug. 2019</h1>,
        description:<p className="home__content-decscription">I interviewed the feminist lightning rod for Ace Reader — a new online publication for Ace Hotel — about love, hope, fear, friendship, growing in concentric circles, how “being grateful is a burden in itself,” and her lifelong commitment to social justice.</p>,
        id: 4,
        topImage: <img src={Gloria} alt='Gloria Steinem Interview' />,
        tag:<div className="interview__top">
                <div className="interview__section-tag">
                    <p>Full interview on</p>
                    <p><a href="http://reader.acehotel.com/writing/the-truth-will-set-you-free-but-first-it-will-piss-you-off-interview-with-gloria-steinem/" target="_blank" rel="noopener noreferrer">Ace Reader</a></p>
                    <p>4:00 min</p>
                </div>
                <div className="interview__question-first interview__lines">
                    <h1>Jenevieve Ting:</h1>
                    <p>It’s such a pleasure to get to talk to you.</p>
                </div>
            </div>,
        interviewBody:<>
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
                    </>,
        pullQuote:<>
                    <p>Gloria Pull Quote</p>
                    <div className="interview__pull-quote">
                        <h3>“But if those hopes weren’t already real inside you, you couldn’t hope them. So it makes no sense to allow those to be taken away from you because you have the power to hang onto them”.</h3>
                    </div>
                </>,
        credits: <><div className="show__credits-section"><p>Website</p><p>Reader.acehotel.com</p></div><div className="show__credits-section"><p>Interviewer</p><p>Jenevieve Ting</p></div><div className="show__credits-section"><p>Interview</p><p>Gloria Steinam</p></div></>
    },
]