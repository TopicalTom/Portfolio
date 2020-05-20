import React from 'react';
import "./App.scss";

import overlay from "../../assets/layers/iPhoneOverlay.svg";

const App = (props) => {

    const { project, preview, video } = props

    if (!video) {
        return (
            <div className="app">
                <img 
                    className="app__overlay" 
                    src={overlay}
                    alt=""
                />
                <video
                    id={`${project}`}
                    className="app__preview"
                    src={preview} 
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
            <div className="alt">
                <img 
                    className="alt__overlay" 
                    src={overlay}
                    alt=""
                />
                <video
                    id={`${video}`}
                    className="alt__preview"
                    src={video} 
                    autoPlay
                    loop
                    playsInline
                    muted
                    type="video/mp4"
                />
            </div>
        );
    }
};

export default App;