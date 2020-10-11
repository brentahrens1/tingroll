import React from 'react'

// Queer Love is Spacious

import Spacious from '../assets/images/Projects/QueerLoveIsSpacious/queer-love-is-spacious.png'

// Atelier Ace

import AtelierAce from '../assets/images/Projects/AtelierAce/2020-JT-ChicagoAd.jpg'
import AtelierAce2 from '../assets/images/Projects/AtelierAce/2020-JT-Kyoto Postcard.jpg'
import AtelierAce3 from '../assets/images/Projects/AtelierAce/2020-JT-Newsletter.jpg'
import AtelierAce4 from '../assets/images/Projects/AtelierAce/2020-JT-QueerAllYear.jpg'
import AtelierAce5 from '../assets/images/Projects/AtelierAce/2020-JT-Youhaveavoice.jpg'

// NETFLIX’S “QUEER IS BEAUTIFUL”

import Netflix from '../assets/images/Projects/Netflix/netflix.png'

//Loves Me / Loves Me Not

import Zine1 from '../assets/images/Projects/LovesMeLovesMeNot/ZINE-1.jpeg'
import Zine2 from '../assets/images/Projects/LovesMeLovesMeNot/ZINE-3.jpg'
import Zine3 from '../assets/images/Projects/LovesMeLovesMeNot/ZINE-6.jpg'

// Interview Gloria Steinem

import Gloria from '../assets/images/Projects/GoriaSteinem/gloria.png'
import GloriaPullQuote from '../assets/images/Projects/GoriaSteinem/gloria-pull-quote.jpg'

// Asian America: The Future is Now
import AsianAmerica from '../assets/images/Projects/AsianAmerica/header-image.png'
import AsianAmerica2 from '../assets/images/Projects/AsianAmerica/pic.png'
import AsianAmerica3 from '../assets/images/Projects/AsianAmerica/pic2.png'

// “It Takes A Wet Season” 

import WetSeason from '../assets/images/Projects/WetSeason/Piece-1.jpeg'
import WetSeason2 from '../assets/images/Projects/WetSeason/Piece-3.jpg'

// Rooted

import Rooted1 from '../assets/images/Projects/RootedLove/Rooted-1.JPG'
import Rooted2 from '../assets/images/Projects/RootedLove/Rooted-4.JPG'
import Rooted3 from '../assets/images/Projects/RootedLove/Rooted-6.JPG'

// Water Populates

import Water1 from '../assets/images/Projects/WaterPopulates/Territory-1.jpeg'
import Water2 from '../assets/images/Projects/WaterPopulates/Territory-4.jpeg'
import Water3 from '../assets/images/Projects/WaterPopulates/Territory-2.jpeg'

export const projects = [
    //Queer Love Is Spacious
    {
        type: 'Workshop',
        category: <p className="home__content-category">Workshop</p>,
        header: <h1 className="home__content-header header">Queer Love Is Spacious</h1>,
        date: <h1 className="home__content-header date">July 2020–Present</h1>,
        description: <p className="home__content-decscription">How can a queer & non-binary lens or "framework" help us to better access other parts of ourselves with a greater sense of love & imagination? This recurring writing, thinking, and feeling workshop focuses on the ways QTBIPOC love can be rooted in & guided by a belief in spaciousness, the ceaseless ebb & flow of our own expansion, and how queerness is its own form of poetry.</p>,
        id: 0,
        tag2:<div className="tag2">
                <p>Flyer: <br />“Queer Love is Spacious” <br />Workshop, hosted by me.</p>
            </div>,
        topImage: <div className="iframe-container"><iframe className="responsive-iframe" title="Queer Love Is Spacious" src="https://player.vimeo.com/video/466430041" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe></div>,
        showBody: <img className="flyer" src={Spacious} alt='Jenevieve Ting | Queer Love Is Spacious' />,
    },
    // Atelier Ace Hotel
    {
        type: 'Copywriting',
        category:<p className="home__content-category">Copywriting</p>,
        header:<h1 className="home__content-header header">Atelier Ace / Ace Hotel</h1>,
        date:<h1 className="home__content-header date">2018–2020</h1>,
        description:<p className="home__content-decscription">Crafted & strategized online & in-print newsletters, social media content, website copy, digital marketing campaigns, advertisements, retail concepts & press releases across all Ace Hotel channels.</p>,
        id: 1,
        topImage: <img src={AtelierAce3} alt='Jenevieve Ting | Atelier Ace / Ace Hotel' />,
        showBody:<p className="body-text">
        Wrote, edited, and oversaw brand voice across all domestic & international Ace Hotel properties, venues, performance spaces, food & beverage outlets, social media channels, and retail partners. Edited, strategized, and conceptualized digital advertising and content for <a href="http://reader.acehotel.com/" target="_blank" rel="noopener noreferrer">Ace
        Reader</a>, an online platform highlighting arts & culture across Ace properties</p>,
        showImageLayout1: 
        <div className="image-layout-1">
            <div className="row-one">
                <div className="img img-one">
                    <img src={AtelierAce5} alt='Jenevieve Ting | Atelier Ace / Ace Hotel' />
                </div>
                <div className="img img-two">
                    <img src={AtelierAce4} alt='Jenevieve Ting | Atelier Ace / Ace Hotel' />
                </div>
            </div>
            <div className="row-two">
                <div className="tag">
                    <p>Read the full Ace Newsletter here.</p>
                </div>
                <div className="img img-three">
                    <img src={AtelierAce3} alt='Jenevieve Ting | Atelier Ace / Ace Hotel' />
                </div>
            </div>
            <div className="row-one">
                <div className="img img-four">
                    <img src={AtelierAce} alt='Jenevieve Ting | Atelier Ace / Ace Hotel' />
                </div>
            </div>
            <div className="row-three">
                <div className="img img-five">
                    <img src={AtelierAce2} alt='Jenevieve Ting | Atelier Ace / Ace Hotel' />
                </div>
            </div>
        </div>
    },
    //Netflix's “Queer is Beautiful”
    {
        type: 'Poem / Performance',
        category: <p className="home__content-category">Poem / Performance</p>,
        header: <h1 className="home__content-header header">Netflix's “Queer is Beautiful”</h1>,
        date: <h1 className="home__content-header date">August 2020</h1>,
        description: <p className="home__content-decscription">A Pride variety showcase for LGBTQIA+ artists, musicians, poets (including me!), and comedians for Netflix’s internal team, hosted by Alyssa Edwards. Video performance shot and edited by my dear friend & collaborator Kyoko Takenaka.</p>,
        id: 2,
        topImage: <div className="iframe-container"><iframe className="responsive-iframe" title="Queer is Beautiful" src="https://player.vimeo.com/video/466426169" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe></div>,
        tag2:<div className="tag2">
                <p>Flyer:<br />“Queer is Beautiful”<br /> hosted by Netflix Comment end.</p>
            </div>,
        showBody: <img className="flyer" src={Netflix} alt='Jenevieve Ting | Netflix Queer is Beautiful' />,
    },
    //Loves Me | Loves Me Not
    {
        type: 'Zine / Community',
        category: <p className="home__content-category">Zine / Community</p>,
        header: <h1 className="home__content-header header">Loves Me | Loves Me Not</h1>,
        date: <h1 className="home__content-header date">2017–2020</h1>,
        description: <p className="home__content-decscription">A yearly Valentine’s Day zine co-edited, compiled, and curated by me and my best friend Nikita Lamba, featuring work entirely by queer, trans, non-binary, and women artists of color. Our fourth volume was designed by Jimena Gamio. You can see it in full here.</p>,
        id: 3,
        tag2:<div className="tag2">
                <p>Zine:<br /> Designed by <a href="http://www.jimena.info/" target="_blank">Jimena Gamio.</a><br /> You can see it in full <a href="http://lovesmezine.format.com" target="_blank">here.</a></p>
            </div>,
        topImage: <img src={Zine1} alt='Jenevieve Ting | Loves Me | Loves Me Not' />,
        imageTwo: <img src={Zine2} alt='Jenevieve Ting | Loves Me | Loves Me Not' />,
        imageThree: <img src={Zine3} alt='Jenevieve Ting | Loves Me | Loves Me Not' />,
    },
    // Gloria Steinem Interview
    {
        type: 'interview',
        category:<p className="home__content-category">Interview</p>,
        header:<h1 className="home__content-header header">Goria Steinem</h1>,
        date:<h1 className="home__content-header date">August 2019</h1>,
        description:<p className="home__content-decscription">I interviewed the feminist lightning rod for Ace Reader — a new online publication for Ace Hotel — about love, hope, fear, friendship, growing in concentric circles, how “being grateful is a burden in itself,” and her lifelong commitment to social justice.</p>,
        id: 4,
        topImage: <><img src={Gloria} alt='Jenevieve Ting | Gloria Steinem Interview' />
                    <p>Photo: Gloria Steinem shot by Jenny Warburg.</p></>,
        tag:<div className="interview__top">
                <div className="interview__section-tag">
                    <p>Full interview on</p>
                    <p className="tag-link"><a href="http://reader.acehotel.com/writing/the-truth-will-set-you-free-but-first-it-will-piss-you-off-interview-with-gloria-steinem/" target="_blank" rel="noopener noreferrer">Ace Reader</a></p>
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
        pullQuote:<div className="pull-quote">
                        <div className="quote-tag">
                            <p>Quote: <br />Gloria Steinem from Ace Reader interview. </p>
                        </div>
                        <div className="pull-quote-img">
                            <img src={GloriaPullQuote} alt="Jenevieve Ting | Gloria Steinem Interview" />
                        </div>
                  </div>,
        credits: <><div className="show__credits-section"><p>Website</p><p><a href="http://reader.acehotel.com/" target="_blank" rel="noopener noreferrer">reader.acehotel.com</a></p></div><div className="show__credits-section"><p>Interviewer</p><p>Jenevieve Ting</p></div><div className="show__credits-section"><p>Interviewee</p><p>Gloria Steinem</p></div></>
    },
    // Asian America: The Future is Now
    {
        type: 'Poem / Performance',
        category:<p className="home__content-category">Poem / Performance</p>,
        header:<h1 className="home__content-header header">Asian America: The Future is Now</h1>,
        date:<h1 className="home__content-header date">May 2019</h1>,
        description:<p className="home__content-decscription">I wrote and performed this piece about being non-binary, the slipperiness of gender pronouns in Chinese and English, and my grandmother. The piece was also published in a collective anthology of the same name.</p>,
        id: 5,
        tag:<div className="tag">
                <p>Photo:<br /> "Grand Country"<br /> for Asian America:<br /> The Future is Now</p>
            </div>,
        topImage: <img src={AsianAmerica} alt='Asian America: The Future is Now' />,
        imageTwo: <img src={AsianAmerica2} alt='Asian America: The Future is Now' />,
        imageThree: <img src={AsianAmerica3} alt='Asian America: The Future is Now' />,
        title:<h1>Grand Country</h1>,
        showBody:<div className="poem"><p>my grandmother was born in Shanghai in 1939<br /> in chinese, her name means “grand country.”<br /> she was given a name meant for a boy,<br /> because in chinese, “country” is masculine —<br /> i am familiar with the way man can mean space,<br /> boy can mean borders,<br />
                    how a body marked by its grandeur is often just another way of saying<br /> that gender is not something to be shared freely,<br /> or transgressed easily.<br /><br /> the binary in chinese is not so unlike a great wall,<br /> a rigid, fortified structure meant to keep a kind of person in<br />
                    and another kind out but that, in the end, never managed to do either —<br /> and instead, stood as a testament to what it looks like to separate two things,<br /> i cannot help but wonder sometimes —<br /> if my Abu knew being a woman wasn’t about being contained<br /> would she be proud of her name,<br />
                    the way that i am learning to be proud of my own, or<br /> the way that i am just now learning what it means to unlearn that great wall, brick by brick<br /> and reclaiming what it means to belong to your own country.<br /><br /> my Abu tells me one afternoon,<br /> “i’m a girl, but i’ve always felt like a boy,<br />
                    just like you.”<br /> in that moment, we are the same age,<br /> just old enough to know that being a woman is an answer we are too young to question our bodies into<br /> becoming,<br /> we are just learning not to un-peel our fear if it is not ripe yet<br /> and<br /> we have the same face,<br /> round like a moon that always hides half of herself away.<br />
                    i want to tell her about the conversations i’ve been having about gender,<br /> tell her that sometimes dysphoria<br /> feels a lot like diaspora, like that “grand country” she knows so well is a place i’m still trying to reach<br /> but perhaps she already knows this,<br /> and perhaps there are no words for me to describe it anyways,<br />
                    because what is gender if not a question swallowing another question whole?<br /> a younger generation asking what an older one could not?<br /> what is the future if not a homecoming to your past?<br /> sometimes,<br /> i’ve found,<br /> the best way to build tomorrow is to return to it.<br /><br /> when my grandma is describing the man who brings her strawberries on the weekend,<br />
                    she often says,<br /> “she brought me strawberries”<br /> when talking about her girl dog, she says,<br /> “he is so loyalty, he is such a good girl.”<br /> in chinese, the words for “he” and “she” sound exactly the same.<br /> upon hearing tā, you would have no way of knowing a person’s gender<br /> which is often why my grandma gets the pronouns mixed up in english.<br />
                    she often tells stories about people she meets,<br /> switching and careening and dissolving “he” from “she” like the swish of a fan,<br /> she does not think much of it these days.<br /> sometimes, she catches herself and says a different pronoun,<br /> but her tone stays the same—<br /> i want to believe in her mind that the person does too.<br /> when my grandma says “tā,”<br />
                    what i think she means is<br /> “i was once afraid to be whole too”<br /> or<br /> “these words are houses with leaky roofs”<br /> or<br /> “i still believe i could belong to myself”<br /> so,<br /> when my mother corrects my grandmother<br /> for “misgendering” people on accident,<br /> i can’t help but smile because<br /> maybe in her mind there is a future where these pronouns fail to encompass who we are too, and<br />
                    i want to believe i can live in that version of tomorrow too,<br /> so<br /> i don’t think my grandma is getting anything wrong about gender,<br /> i think she is telling us exactly how we’ve always wanted to be so,<br /> meet me there.<br /> there is a version of my future that looks exactly like my grandmother’s past<br />
                    and in that future, there is no way of knowing my gender when you hear me either<br /> i am a walking tā<br /> like a guiltless bird<br /> i am every bit the place my grandma’s name built her up to be<br /> and every misspoken gender still waiting to greet me<br /> i am not imagining a future beyond gender,<br /> i am embodying it.<br />
                    and there is no grander country than that.</p></div>,
        credits:<>
                <div className="show__credits-section">
                    <p>Photography</p><p>Farrah Su</p>
                </div>
                <div className="show__credits-section">
                    <p>Poem</p><p>Jenevieve Ting</p>
                </div>
                <div className="show__credits-section">
                    <p>Poem</p><p>Jenevieve Ting</p>
                </div><div className="show__credits-section">
                    <p>Production & Curation</p><p>Kyoko Takenaka, Jennelle Fong</p>
                </div>
                </>
    },
    // “It Takes A Wet Season”
    {
        type: 'Poem / Performance',
        category: <p className="home__content-category">Poem / Performance</p>,
        header: <h1 className="home__content-header header">“It Takes A Wet Season”</h1>,
        date: <h1 className="home__content-header date">September 2020</h1>,
        description: <p className="home__content-decscription">I created this visual poem made of 8 feet of plexiglass, vinyl, and a whole lot of love for my friends at Studio Love A Lot — an extended community of creatives, makers, collaborators, lovers, and friends supporting friends — and their inaugural show, titled “No White Cubes,” which aims to prioritize accessibility to art, community gathering, and space making.</p>,
        id: 6,
        showBody: <div className="iframe-container"><iframe className="responsive-iframe" title="Wet Season" src="https://player.vimeo.com/video/466428216" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe></div>,
        topImage: <img src={WetSeason} alt='Jenevieve Ting | “It Takes A Wet Season”' />,
        imageTwo: <img src={WetSeason2} alt='Jenevieve Ting | “It Takes A Wet Season”' />,
    },
    // Rooted Love
    {
        type: 'Poem / Performance',
        category: <p className="home__content-category">Poem / Performance</p>,
        header: <h1 className="home__content-header header">Rooted Love</h1>,
        date: <h1 className="home__content-header date">March 2017</h1>,
        description: <p className="home__content-decscription">In collaboration with my friend & artistic daydream Kyoko Takenaka, I performed a spoken word piece titled “Yellow Rose” at Human Resources LA for Rooted Love, a multidisciplinary evening full of visual and performance art, music and healing.</p>,
        id: 7,
        title:<h1>Rooted Love</h1>,
        showBody: <div className="poem"><p>
                                            my grandmother’s favorite flower is a yellow rose<br />
                                            she says red roses are too obvious,<br />
                                            that they are too flushed with emotion<br />
                                            and they die too quickly<br />
                                            <br />
                                            sometimes I wonder if she is remembering herself as a rose<br />
                                            about how she left Taiwan and everything she had known<br />
                                            when she was 17 and married the only man she has<br />
                                            ever been with for nearly 6 decades<br />
                                            <br />
                                            she tells me the day I graduate college that she just thinks<br />
                                            of my grandfather as a friend<br />
                                            that she takes care of him, not because she wants to but because she has to<br />
                                            not because she loves to but because she knows that routine best<br />
                                            in ways only silent caretakers know how to<br />
                                            <br />
                                            sometimes I wonder if she is seeing film stills from her life<br />
                                            in those yellow rose petals<br />
                                            if she counts them as they fall<br />
                                            and tries not to<br />
                                            call it passing time<br />
                                            <br />
                                            these days I’ve been thinking about telling my grandma<br />
                                            that I don’t think I’ve ever been in love with a man<br />
                                            and I have this sinking feeling that she would say “me neither”<br />
                                            <br />
                                            when my grandma came to this country<br />
                                            with a new husband<br />
                                            and the promise of a better life<br />
                                            I wonder if she knew she was signing all of her dreams away<br />
                                            <br />
                                            that she would come to know husband<br />
                                            and full time job as synonymous<br />
                                            if she knew that caring for others<br />
                                            would become her dominant personality trait<br />
                                            if she knew she would never be with anyone else<br />
                                            all her life<br />
                                            <br />
                                            I have not yet come out to my grandmother<br />
                                            because sometimes I think we are both still trapped<br />
                                            in a closet somewhere<br />
                                            somewhere neither of us feel free enough to love<br />
                                            so I wonder if my out-ness around others<br />
                                            is my way of telling a story my grandmother couldn’t<br />
                                            <br />
                                            an identity I wear for both of us<br />
                                            so that I might love more freely than she did<br />
                                            I wonder if being out is not about visibility<br />
                                            but about resistance<br />
                                            about a hurt so deep it must be externalized<br />
                                            must be laid bare in the sun so that light more pour into these holes<br />
                                            make our bodies warm again<br />
                                            I wonder if I am so free to be me<br />
                                            because my family history is a museum of closed doors,<br />
                                            is generations of silence and shadows<br />
                                            am I the result of decades of love held back by circumstance<br />
                                            or the aberration at the end of the story<br />
                                            <br />
                                            you see my grandmother and I were born on the same day,<br />
                                            fifty four years apart<br />
                                            and in that time,<br />
                                            she saw Okinawa and airplanes,<br />
                                            left a motherland for the states<br />
                                            married a man drunk on foreign promises<br />
                                            and buried roots into quiet suburbia<br />
                                            in a little town I would come to call my home<br />
                                            <br />
                                            in that time she had a daughter<br />
                                            who would have a daughter who is me<br />
                                            who carries more than just a bloodline or a skin tone<br />
                                            but a heartbeat and a story about losing touch with a past self too<br />
                                            my Abu and I can be polar opposites at times,<br />
                                            so we swap politics for porridge,<br />
                                            trade social issues for suan cai<br />
                                            and negate difference with nian gao<br />
                                            <br />
                                            I cannot speak the language my grandma is most comfortable speaking<br />
                                            so food is our dialect, when we cannot connect the dots<br />
                                            in our own internal constellations<br />
                                            <br />
                                            but I’m not sure what language to come out to my grandmother to<br />
                                            because each time I try<br />
                                            it just sounds a lot like silence<br />
                                            you see my grandmother doesn’t live very close to here<br />
                                            so whenever I go home<br />
                                            with a big bouquet of her favorite yellow roses<br />
                                            she asks me, jing jing, do you have a boyfriend yet?<br />
                                            <br />
                                            and in all of my self-construction away from home<br />
                                            I forget I was somebody’s baby girl for much<br />
                                            longer than I was an out queer woman<br />
                                            I forget that the personal is political<br />
                                            but first it is personal<br />
                                            it is so deeply my story to tell that I forget not everyone knows the words<br />
                                            so I stumble a bit on my own explanation,<br />
                                            trip up on identity politics like my body is a provisional ballot<br />
                                            I thought I didn’t have to submit this time<br />
                                            <br />
                                            so a lot of our time spent talking is about her life,<br />
                                            Taiwan, if she misses speaking in Japanese, if she misses herself,<br />
                                            and how she makes her food<br />
                                            <br />
                                            I don’t want to disturb these quiet visiting hours<br />
                                            they are so few and far between<br />
                                            I am afraid that the day I tell her will be the last day she spends<br />
                                            with me just loving that her only granddaughter is there at all<br />
                                            I am afraid of changing one of the only relationships in my life that has ever been completely unbroken<br />
                                            completely at peace in my heart<br />
                                            <br />
                                            sometimes being honest with yourself doesn’t mean<br />
                                            being out to everyone you know<br />
                                            sometimes being honest with yourself<br />
                                            means knowing your heart is not in a closet<br />
                                            it is in your chest<br />
                                            right where it has always been<br />
                                            the warm center of me that lights up<br />
                                            when I see my grandmother smile when I walk through the door,<br />
                                            eyes all “it’s been too long” and tiny limbs shuffling me<br />
                                            towards a table full of food that says<br />
                                            welcome home, stay as long as you like<br />

                                            there is no hiding here<br />
                                            only holding on<br />
                                            to the farthest corners of my childhood heart and a<br />
                                            grandmother who has never given me anything<br />
                                            but love and origin stories<br />
                                            with a home cooked meal<br />
                                            <br />
                                            I don’t know when we started policing visibility<br />
                                            like we’re always playing the “out” Olympics<br />
                                            but I’m bowing out again this year<br />
                                            on account of the fact that I’m busy<br />
                                            <br />
                                            I’m going to spend the time I’ve got drinking crushed watermelon<br />
                                            and looking through gelatin film prints of Abu in Santa Monica<br />
                                            and listen to her stories about the sibling she had to leave behind<br />
                                            and a life in Hawaii she still sometimes daydreams about<br />
                                            <br />
                                            I am honest with myself<br />
                                            even if my grandma is still waiting for a boy’s name to<br />
                                            fall from my lips like a yellow rose petal and right into her approval<br />
                                            because I know she is still loving the real me<br />
                                            I guess that is something I got from her too<br />
 
                                        </p>
                </div>,
        topImage: <img src={Rooted1} alt='Jenevieve Ting | Rooted Love' />,
        imageTwo: <img src={Rooted2} alt='Jenevieve Ting | Rooted Love' />,
        imageThree: <img src={Rooted3} alt='Jenevieve Ting | Rooted Love' />,
    },
    // “water populates me more than grief”
    {
        type: 'Poem / Performance',
        category: <p className="home__content-category">Poem / Performance</p>,
        header: <h1 className="home__content-header header">“water populates me more than grief”</h1>,
        date: <h1 className="home__content-header date">July 2019</h1>,
        description: <p className="home__content-decscription">I created an art installation for a larger gallery exhibit at Plaza de la Raza in Los Angeles called “Territory of the Human Heart,” as part of that year’s De Todos Lados fundraiser and benefit concert in support of Al Otro Lado, a nonprofit organization working to reunite families, support refugees, and uphold the rights of immigrants & asylum seekers.</p>,
        id: 8,
        tag3: <div className="tag3">
                <p>Flyer:<br /> “Territory of the Human Heart” for de Todos Lados.</p>
              </div>,
        topImage: <img src={Water1} alt='Jenevieve Ting | “water populates me more than grief”' />,
        imageTwo: <img src={Water2} alt='Jenevieve Ting | “water populates me more than grief”' />,
        imageFour: <div className="image-4-wrapper"><img className="image-4" src={Water3} alt='Jenevieve Ting | “water populates me more than grief”' /></div>,
    },
    //Married To Movement
    // {
    //     type: 'poem',
    //     category: <p className="home__content-category">Performance & Poem</p>,
    //     header: <h1 className="home__content-header header">“Married To Movement” For Art Breather</h1>,
    //     date: <h1 className="home__content-header date">June 2020</h1>,
    //     description: <p className="home__content-decscription">Organized by my friend Lauren Moon & Kim Ndombe, this piece was written and performed as part of a group art show titled “Art Breather,” an opportunity to take a collective breath and remember that “joy is a form of protest.”</p>,
    //     id: 99,
    //     tag: <div className="tag"><p>Photo:<br /> "Grand Country"<br /> for Asian America:<br /> The Future is Now</p></div>,
    //     topImage: <img src={AsianAmerica} alt='Married To Movement' />,
    // },
]