import React from 'react';
import "./SkillCard.scss";

import sketch from "../../assets/tools/Sketch.svg";
import chevron from "../../assets/icons/chevron.svg";

const SkillCard = (props) => {

    const { icon, tool, type, status} = props

    return (
            <article className="skill-card">
                <div className="skill-card__container">
                    <img className="skill-card__image" src={icon}/>
                    <div className="skill-card__details">
                        <h3
                            className="skill-card__project">
                            {tool}
                        </h3>
                        <h4
                            className="skill-card__type">
                            {type}
                        </h4>
                    </div>
                </div>
                <div className="skill-card__container">
                    <div className={`skill-card__status skill-card__status--${status}`}>
                            {status}
                    </div>
                    <a> 
                        <img 
                            className="skill-card__chevron"
                            src={chevron}
                        />
                    </a>
                </div>
            </article>
    );
};

export default SkillCard;