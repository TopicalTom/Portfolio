import React from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import "./Main.scss";

import ProjectPromo from "../../components/ProjectPromo/ProjectPromo";
import Switch from "../../components/Switch/Switch";
import projectsData from "../../data/projectsData";

const Main = () => {

    const projects = projectsData

    return (
        <main className="main">
            <section className="main__container">
                <div className="main__details">
                    <h1 
                        className="main__heading">
                        I'm Thomas Griffiths an aspiring Product Designer.
                    </h1>
                    <p 
                        className="main__mission">
                        On a mission to bridge the gap between designer and developer. Interested in creating human-centered mobile experiences.
                    </p>
                    <div className="main__actions">
                        <Link 
                            className="main__button"
                            to="Projects"
                            smooth={true}
                            duration={500}
                            offset={-240}>
                            <div 
                                className="main__cta">
                                View Projects
                            </div>
                        </Link>
                        <div className="main__toggle">
                            <Switch />
                        </div>
                    </div>
                </div>
            </section>
            <Element 
                className="main__projects"
                name="Projects">
                {projects.map(promo => {
                    const { project, description, preview, link, orientation, code } = promo
                    return (
                        <ProjectPromo
                            project={project}
                            description={description}
                            preview={preview}
                            link={link}
                            orientation={orientation}
                            code={code}
                            autoPlay
                            loop
                        />
                    )
                })}
            </Element>
        </main>
    );
};

export default Main;