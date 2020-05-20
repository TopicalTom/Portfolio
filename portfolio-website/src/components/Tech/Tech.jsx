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
                <img className="tech__logo" src={reactnative} alt=""/>
            </a>
            <a 
                className="tech__container tech__container--mapbox"
                href="https://www.mapbox.com/">
                <img className="tech__logo" src={mapbox} alt=""/>
            </a>
            <a 
                className="tech__container tech__container--foursquare"
                href="https://foursquare.com/">
                <img className="tech__logo" src={foursquare} alt=""/>
            </a>
        </article>
    );
};

export default Tech;