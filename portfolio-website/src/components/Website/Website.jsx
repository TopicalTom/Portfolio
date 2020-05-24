import React from 'react';
import "./Website.scss";

import overlay from "../../assets/layers/laptopOverlay.svg";

const Website = (props) => {

    const { project, preview } = props

    return (
        <div className="website">
            <img 
                className="website__overlay" 
                src={overlay}
                alt=""
            />
            <img
                id={`${project}`}
                className="website__preview"
                src={preview} 
            />
        </div>
    );
};

export default Website;