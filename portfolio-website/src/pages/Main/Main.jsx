import React from 'react';
import "./Main.scss";

import {Link} from "react-router-dom";

import ProjectPromo from "../../components/ProjectPromo/ProjectPromo";

import Rally from "../../assets/gifs/RallyPromo.gif";
import TouchBase from "../../assets/gifs/TouchBasePromo.gif";
import SharedSpace from "../../assets/gifs/HomediatePromo.gif";

const Main = () => {
    return (
        <>
            <section className="hero">
                <div className="hero__container">
                    <div 
                        className="hero__logo">
                        <h2></h2>
                    </div>
                    <div className="hero__details">
                        <h1 className="hero__about">
                            I'm Thomas Griffiths an aspiring Product Designer.
                        </h1>
                        <p className="hero__mission">
                            Interested in created human-centered mobile experiences. Capable of taking on marketing, design and developer roles.
                        </p>
                    </div>
                    <Link 
                        to={"/contact"}
                        className="hero__cta">
                        <div 
                            className="hero__button">
                            Get in Touch
                        </div>
                    </Link>
                </div>
            </section>
            <ProjectPromo
                project="Rally"
                description="Helping friends spontaneously connect with their social circle over current interests."
                preview={Rally}
                link="rally"
                orientation="left"
            />
            <ProjectPromo
                project="TouchBase"
                description="Helping working professionals transition into a new career by making networking more manageable."
                preview={TouchBase}
                link="touch-base"
                orientation="right"
            />
            <ProjectPromo
                project="Homediate"
                description="Helping housemates mediate household tasks and utility costs within a shared space."
                preview={SharedSpace}
                link="shared-space"
                orientation="left"
            />
        </>
    );
};

export default Main;