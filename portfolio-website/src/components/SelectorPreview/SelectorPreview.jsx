import React from 'react';
import "./SelectorPreview.scss";

import overlay from "../../assets/layers/iPhoneOverlay.svg";

const SelectorPreview = (props) => {

    const { video, sketch, type } = props

    if (type != "image") {
        return (
            <div className="selected">
                <img 
                    className="selected__overlay" 
                    src={overlay}
                    alt=""
                />
                <video
                    id={`${video}`}
                    className="selected__preview selected__preview--video"
                    src={video} 
                    autoPlay
                    loop
                    playsInline
                    muted
                    type="video/mp4"
                />
            </div>
        );
    } else {
        return (
            <div className="selected">
                <img 
                    className="selected__overlay" 
                    src={overlay}
                    alt=""
                />
                <img
                    id={`${sketch}`}
                    className="selected__preview selected__preview--image"
                    src={sketch} 
                />
            </div>
        );
    }
};

export default SelectorPreview;