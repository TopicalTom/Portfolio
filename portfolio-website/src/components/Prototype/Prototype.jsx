import React from 'react';
import "./Prototype.scss";

import overlay from "../../assets/layers/iPhoneOverlay.svg";

const Prototype = (props) => {

    const {video} = props

    return (
        <div className="prototype">
            <img 
                className="prototype__overlay" 
                src={overlay}
                alt=""
            />
            <video
                id={`${video}`} 
                className="prototype__preview"
                src={video} 
                autoPlay
                loop
                playsInline
                muted
                type="video/mp4"
            />
        </div>
    );
};

export default Prototype;