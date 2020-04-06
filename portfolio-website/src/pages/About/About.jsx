import React from 'react';
import "./About.scss";

import Profile from "../../assets/images/Thomas.jpg";
import Nav from "../../components/Nav/Nav";
import Redirect from '../../components/Redirect/Redirect';

const About = () => {
    return (
        <>
        <Nav/>
        <main className="about">
            <div className="about__container">
                <div className="about__section about__section--profile">
                    <img 
                        className="about__profile"
                        src={Profile}
                    />
                </div>
                <section className="about__section about__section--bio">
                    <h2 
                        className="about__header">
                        Biology Major gone digital
                    </h2>
                    <p
                        className="about__content">
                        While I eventually graduated with a Biology degree, my time at University was marked by a feeling of restlessness as I wasn't feeling gripped with what I was working on in the way a passion should feel.
                    </p>
                    <p
                        className="about__content">
                        This feeling of restlessness led me to switch my major a total of five times and to explore new opportunities outside of my comfort zone and current skillset in the pursuit of finding something that truly felt like Me.
                    </p>
                    <p
                        className="about__content">
                        Through shaping experiences with my Orientation Week, QMP, and CUCOH extracurriculars as well as assisting my friends with designs for their endeavours of starting a band, a photography business, or a children's book, I began to notice a trend. The projects I got excited about were the ones that allowed me to invest in an idea and build a strong foundation for helping people become more confident in their own "starts."
                    </p>
                    <p
                        className="about__content">
                        Having reached this breakthrough in what drives me, I explored further education at BrainStation in 
                            <a 
                                href="https://brainstation.io/course/toronto/user-experience-immersive">
                                UX Design
                            </a>, 
                            <a 
                                href="https://brainstation.io/course/toronto/user-experience-immersive">
                                iOS Development
                            </a>,
                            <a 
                                href="https://brainstation.io/course/toronto/user-experience-immersive">
                                Product Management
                            </a> and,
                            <a 
                                href="https://brainstation.io/course/toronto/user-experience-immersive">
                                Web Development
                            </a>
                        to kickstart my journey into the field.
                    </p>
                    <Redirect 
                        text="See what I can do"
                        cta="View Projects"/>
                </section>
            </div>
        </main>
        </>
    );
};

export default About;