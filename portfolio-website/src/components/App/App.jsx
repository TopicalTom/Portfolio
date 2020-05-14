import React, {useState} from 'react';
import "./App.scss";

import overlay from "../../assets/layers/iPhoneOverlay.svg";

const App = (props) => {

    const { project, preview } = props

    return (
        <div className="app">
            <img 
                className="app__overlay" 
                src={overlay}
            />
            <video
                id={`${project}`}
                className="app__preview"
                src={preview} 
                autoPlay
                loop
            />
        </div>
    );
};

export default App;