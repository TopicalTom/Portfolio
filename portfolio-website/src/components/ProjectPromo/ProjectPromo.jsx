import React from 'react';
import "./ProjectPromo.scss";

import Homediate from "../../assets/videos/HomediatePromo.mp4";
import TouchBase from "../../assets/videos/TouchBasePromo.mp4";

const ProjectPromo = (props) => {

    const { project, description, preview, link, orientation, code } = props

    return (
        <section className="promo">
            <article className={`promo__container promo__container--${orientation}`}>
                <video 
                    className="promo__preview"
                    src={preview} 
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
                        <a
                            className={`promo__link ${code}`}
                            href={"https://github.com/TopicalTom/rally-capstone"}>
                            <div
                                className="promo__code">
                                View Code
                            </div>
                        </a>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default ProjectPromo;