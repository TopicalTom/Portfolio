import React from 'react';
import "./Tech.scss";

import reactnative from "../../assets/icons/reactWatermark.svg";
import mapbox from "../../assets/icons/mapboxWatermark.svg";
import foursquare from "../../assets/icons/foursquareWatermark.svg";

const Tech = () => {

    return (
        <article className="tech">
            <a 
                className="tech__container tech__container--reactnative"
                href="https://reactnative.dev/">
                <img className="tech__logo" src={reactnative}/>
            </a>
            <a 
                className="tech__container tech__container--mapbox"
                href="https://www.mapbox.com/">
                <img className="tech__logo" src={mapbox}/>
            </a>
            <a 
                className="tech__container tech__container--foursquare"
                href="https://foursquare.com/">
                <img className="tech__logo" src={foursquare}/>
            </a>
        </article>
    );
};

export default Tech;