import React from 'react';
import "./Step.scss";

const Step = (props) => {

    const {color, step} = props

    return (
        <div 
            className="step"
            style={{background: color}}>
            <span 
                className="step__header">
                {step}
            </span>
        </div>
    );
};

export default Step;