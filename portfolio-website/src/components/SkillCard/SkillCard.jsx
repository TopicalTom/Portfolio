import React from 'react';
import "./SkillCard.scss";

const SkillCard = (props) => {

    const { icon, tool, description, status, filterBy, filter} = props

    if (filter === false || status === filterBy) {

    return (
            <article className="skill-card">
                <div className="skill-card__container">
                    <img className="skill-card__image" src={icon}/>
                    <div className="skill-card__details">
                        <div className="skill-card__content">
                            <h3
                                className="skill-card__project">
                                {tool}
                            </h3>
                            <h4
                                className="skill-card__description">
                                {description}
                            </h4>
                        </div>
                        <div className={`skill-card__status skill-card__status--${status}`}>
                            {status}
                        </div>
                    </div>
                </div>
            </article>
    );
    } else {
        return <></>
    }
};

export default SkillCard;