import React from 'react';
import "./ProjectPromo.scss";

import Homediate from "../../assets/videos/HomediatePromo.mp4";
import TouchBase from "../../assets/videos/TouchBasePromo.mp4";

const ProjectPromo = (props) => {

    const { project, description, preview, link, orientation } = props

    if (orientation === "left") {
        return (
            <section className="promo">
                <article className="promo__container promo__container--left">
                    <video 
                        className="promo__preview"
                        src={Homediate} 
                    />
                    <div className="promo__details">
                        <h2 
                            className="promo__project">
                            {project}
                        </h2>
                        <p 
                            className="promo__description">
                            {description}
                        </p>
                        <div className="promo__actions">
                            <a 
                                className="promo__link"
                                href={`/project/${link}`}>
                                <div 
                                    className="promo__button">
                                    Learn More
                                </div>
                            </a>
                            <div
                                className="promo__demo">
                                Start Preview
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        );
    } else {
        return (
            <section className="promo">
                <article className="promo__container promo__container--right">
                    <video 
                        className="promo__preview"
                        src={TouchBase} 
                    />
                    <div className="promo__details">
                        <h2 
                            className="promo__project">
                            {project}
                        </h2>
                        <p 
                            className="promo__description">
                            {description}
                        </p>
                        <div className="promo__actions">
                            <a 
                                className="promo__link"
                                href={`/project/${link}`}>
                                <div 
                                    className="promo__button">
                                    Learn More
                                </div>
                            </a>
                            <div
                                className="promo__demo">
                                Start Preview
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        );
    }
};

export default ProjectPromo;