import React from 'react';
import "./Definition.scss";

const Definition = () => {

    return (
        <article className="definition">
            <h4 className="definition__type">Verb</h4>
            <ul className="definition__variations">
                <li className="definition__definition">(of troops) come together again in order to continue fighting after a defeat or dispersion.
                </li>
                <li>
                    <span className="definition__definition">recover or cause to recover in health, spirits, or poise.</span>
                </li>
            </ul>
            <h4 className="definition__type">Noun</h4>
            <span className="definition__definition">a mass meeting of people making a political protest or showing support for a cause.</span>
        </article>
    );
};

export default Definition;