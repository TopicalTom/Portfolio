import React from 'react';
import "./ProjectCard.scss";

const ProjectCard = (props) => {

    const { project, type } = props

    return (
        <div className="project-card">
            <div className="project-card__details">
                <h2
                    className="project-card__project">
                    {project}
                </h2>
                <h4
                    className="project-card__type">
                    {type}
                </h4>
                <a 
                    className="project-card__link">
                    Learn More
                </a>
            </div>
            <div className="project-card__preview">
            </div>
        </div>
    );
};

export default ProjectCard;