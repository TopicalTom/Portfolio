import React from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import "./Main.scss";

import ProjectPromo from "../../components/ProjectPromo/ProjectPromo";

import Rally from "../../assets/videos/RallyPromo.mp4";
import TouchBase from "../../assets/videos/TouchBasePromo.mp4";
import Homediate from "../../assets/videos/HomediatePromo.mp4";

const Main = () => {
    return (
        <>
            <section className="lander">
                <div className="lander__container">
                    <div className="lander__details">
                        <h1 className="lander__about">
                            I'm Thomas Griffiths an aspiring Product Designer.
                        </h1>
                        <p className="lander__mission">
                            On a mission to bridge the gap between designer and developer. Interested in creating human-centered mobile experiences.
                        </p>
                        <Link 
                            to="Projects"
                            className="lander__cta"
                            smooth={true}
                            duration={500}
                            offset={-220}>
                            <div 
                                className="lander__button">
                                View Projects
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
            <Element 
                className="break"
                name="Projects">
                <ProjectPromo
                    project="Rally"
                    description="Helping friends spontaneously connect with their social circle over current interests."
                    preview={Rally}
                    link="rally"
                    orientation="left"
                    code=""
                    autoPlay
                    loop
                />
                <ProjectPromo
                    project="TouchBase"
                    description="Helping working professionals transition into a new career by making networking more manageable."
                    preview={TouchBase}
                    link="touch-base"
                    orientation="right"
                    code="none"
                    autoPlay
                    loop
                />
                <ProjectPromo
                    project="Homediate"
                    description="Helping housemates mediate household tasks and utility costs within a shared space."
                    preview={Homediate}
                    link="shared-space"
                    orientation="left"
                    code="none"
                    autoPlay
                    loop
                />
            </Element>
        </>
    );
};

export default Main;