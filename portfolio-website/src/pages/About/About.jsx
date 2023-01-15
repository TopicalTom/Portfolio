import React from 'react';
import "./About.scss";

import Profile from "../../assets/images/Thomas.jpg";
import Redirect from '../../components/Redirect/Redirect';
import Actions from "../../components/HeaderActions/HeaderActions";
import ResumeCard from '../../components/ResumeCard/ResumeCard';

const About = () => {
    return (
        <>
        <Actions />
        <main className="about">
            <div className="about__container">
                <aside className="about__section about__section--profile">
                    <img 
                        className="about__profile"
                        src={Profile}
                        alt=""
                    />
                </aside>
                <section className="about__section about__section--bio">
                    <h2 className="about__header">
                        A bit about me...
                    </h2>
                    <p className="about__content">
                        While I am no longer building Lego worlds or making Forge Maps on Halo 3 for my friends to play on, creating things has been core to my identity ever since I was a kid. Becoming a UX Developer is just the natural next step, even though the journey to get here wasn't a straightforward one.
                    </p>
                    <p className="about__content">
                        After five-degree changes and some exploration, I stumbled upon the potential of design while working as a marketing designer for a few extracurricular conferences. It was here where I was able to capture the same excitement I felt when working on my childhood extracurriculars by shaping experiences while being able to create an impact on the people that attended.
                    </p>
                    <p className="about__content">
                        Since then, I have been on a mission to pick up as many skills as possible so that I would have the resources to take on any problem thrown my way in creating exceptional experiences.
                    </p>
                    <p className="about__content">
                        I'm not all work though, as I like to balance my life by playing video games with friends, consuming as many movies as possible as I work my way through the IMDB Top 250, or driving my Jeep with the roof down when the weather is just right.
                    </p>
                    <p className="about__content">
                        Make sure to reach out if you want to chat, or have a cool opportunity I might be interested in, as I am currently looking for a new position!
                    </p>
                    <Redirect 
                        text=""
                        link="/contact"
                        cta="Let's Chat"
                    />
                </section>
            </div>
            <ResumeCard
                color="#2e2e2e"
            />
        </main>
     </>
    );
};

export default About;