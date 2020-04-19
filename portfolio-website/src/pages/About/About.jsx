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
                <aside className="about__section about__section--profile">
                    <img 
                        className="about__profile"
                        src={Profile}
                    />
                </aside>
                <section className="about__section about__section--bio">
                    <h2 className="about__header">
                        A bit about me...
                    </h2>
                    <p className="about__content">
                        While I eventually graduated with a Biology degree, my time at University was marked by a feeling of restlessness as I wasn't feeling gripped with what I was working on in the way a passion should feel.
                    </p>
                    <p className="about__content">
                        This feeling of restlessness led me to switch my major a total of five times and to explore new opportunities outside of my comfort zone and current skillset in the pursuit of finding something that truly felt like Me.
                    </p>
                    <p className="about__content">
                        Having reached this breakthrough in what drives me, I explored further education at BrainStation in UX Design, iOS Development, and Product Management to kickstart my journey into the field
                    </p>
                    <p className="about__content">
                        Now equipped with a course-refined process to complement my self-taught skills and drive, the only missing piece is a new mission I can invest in! I am currently looking to secure a challenging entry-level position in an organization that needs a multifaceted individual to invest in their mission of driving impact for people.
                    </p>
                    <Redirect 
                        text=""
                        link="/skills"
                        cta="View Skills"
                    />
                </section>
            </div>
        </main>
     </>
    );
};

export default About;