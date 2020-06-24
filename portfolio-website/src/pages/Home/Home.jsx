import React from 'react';
import { Link, Element } from 'react-scroll'
import "./Home.scss";

import ProjectPromo from "../../components/ProjectPromo/ProjectPromo";
import Switch from "../../components/Switch/Switch";
import projectsData from "../../data/projectsData";

const Home = () => {

    const projects = projectsData

    return (
        <main className="home">
            <section className="home__container">
                <div className="home__details">
                    <h1 
                        className="home__heading">
                        I'm Thomas Griffiths a Digital Product Designer.
                    </h1>
                    <p className="home__mission">
                        Specializing in crafting novel mobile experiences
                    </p>
                    <div className="home__actions">
                        <div className="home__toggle">
                            <Switch/>
                            Light Mode
                        </div>
                        <Link 
                            className="home__button"
                            to="Projects"
                            smooth={true}
                            duration={500}
                            offset={-120}>
                            <div className="home__cta"/>
                        </Link>
                    </div>
                </div>
            </section>
            <Element 
                className="home__projects"
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

export default Home;