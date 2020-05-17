import React from 'react';
import { Slide } from 'pure-react-carousel';
import "./Persona.scss";

const Persona = () => {

    return (
        <article className="persona" index={0}>
            <div className="persona__container persona__container--user">

            </div>
            <div className="persona__container persona__container--details">
                <span>Leo</span>
                <span>Social Convener</span>
            </div>
        </article>
    );
};

export default Persona;