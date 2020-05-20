import React from 'react';
import "./ProjectCard.scss";

const ProjectCard = (props) => {

    const { project, type, preview, link } = props

    return (
        <a href={`/project/${link}`}>
            <article className={`project-card project-card--${link}`}>
                <div className="project-card__details">
                    <h2
                        className="project-card__project">
                        {project}
                    </h2>
                    <h4
                        className="project-card__type">
                        {type}
                    </h4>
                </div>
                <div className="project-card__preview">
                    <img
                        className="project-card__image"
                        src={preview}
                        alt=""
                    />
                </div>
            </article>
        </a>
    );
};

export default ProjectCard;