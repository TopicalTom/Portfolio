import React, { useState } from 'react';
import "./PersonaCarousel.scss";

const PersonaCarousel = (props) => {
    const { personas, color } = props
    const [currentPersona, setCurrentPersona] = useState(personas[0].deliverable);
    const [ currentIndex, setCurrentIndex ] = useState(0);

    const handleSelection = (index) => {
        setCurrentPersona(personas[index].deliverable);
        setCurrentIndex(index);
    };

    console.log()

    return (
        <section className="personas">
            <img 
                className="personas__persona"
                src={currentPersona}
                alt={`${currentPersona}`}
            />
            <div className="personas__selections">
                {personas.map((persona, index) => {
                    return (
                        <div 
                            key={index}
                            style={{borderColor: color}}
                            className={`personas__button personas__button--${currentIndex === index ? "active" : "inactive"}`}
                            onClick={() => handleSelection(index)}>
                            <span 
                                className="videos__label">
                                {persona.label}
                            </span>
                        </div>  
                    )
                })}
            </div>
        </section>
    )
}

export default PersonaCarousel;

/*

                    {personas.map((persona) => {
                        return (
                            <div 
                                className={`personas__button personas__button--${persona.state ? "active" : "inactive"}`}
                                onClick={persona.function}>
                                <span 
                                    className="videos__label">
                                    {persona.label}
                                </span>
                            </div>  
                        )
                    })}

*/


/*

                    <div 
                        className={`personas__button personas__button--${firstSelected ? "active" : "inactive"}`}
                        onClick={handleFirstSelection}>
                        <span 
                            className="videos__label">
                            {personas[0].label}
                        </span>
                    </div>
                    <div 
                        className={`personas__button personas__button--${secondSelected ? "active" : "inactive"}`}
                        onClick={handleSecondSelection}>
                        <span 
                            className="personas__label">
                            {personas[1].label}
                        </span>
                    </div>
                    <div 
                        className={`personas__button personas__button--${thirdSelected ? "active" : "inactive"}`}
                        onClick={handleThirdSelection}>
                        <span 
                            className="personas__label">
                            {personas[2].label}
                        </span>
                    </div>

*/