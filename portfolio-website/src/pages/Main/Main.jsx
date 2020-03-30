import React from 'react';
import "./Main.scss";

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
                        <h2>Thomas Griffiths</h2>
                    </div>
                    <div className="hero__details">
                        <h2 className="hero__mission">
                            I'm an aspiring Product Designer interested in created human-centered mobile experiences.
                        </h2>
                        <p className="hero__strengths">
                            Capable of taking on marketing, design and developer roles.
                        </p>
                    </div>
                    <div
                        className="hero__cta">
                        <div>
                            Get in Touch
                        </div>
                    </div>

                </div>
            </section>
            <ProjectPromo
                project="Rally"
                description="Helping friends spontaneously connect with their social circle over current interests."
                preview={Rally}
                link="rally"
            />
            <ProjectPromo
                project="TouchBase"
                description="Helping working professionals transition into a new career by making networking more manageable."
                preview={TouchBase}
                link="touch-base"
            />
            <ProjectPromo
                project="Homediate"
                description="Helping housemates mediate household tasks and utility costs within a shared space."
                preview={SharedSpace}
                link="shared-space"
            />
        </>
    );
};

export default Main;