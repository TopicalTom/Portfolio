import React from 'react';
import "./Shopping.scss";

import shoe from "../../assets/images/VessiShoe.png";

const Shopping = (props) => {

    const {color} = props

    return (
        <article className="shopping">
            <img 
                className="shopping__item"
                src={shoe}
                alt="Vessi Shoe Midnight Black"
            />
            <svg className="shopping__backing" width="384px" height="340px" viewBox="0 0 384 340">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g transform="translate(-148.000000, -96.000000)" style={{fill: color}}>
                        <path d="M375.012058,428.284602 C415.202917,343.961909 433.561704,342.969877 496.080818,312.712911 C558.599932,282.455945 392.874662,-43.9224786 349.706703,123.730876 C306.538743,291.38423 248.981464,180.276682 182.492883,291.38423 C116.004301,402.491778 334.821199,512.607295 375.012058,428.284602 Z" transform="translate(340.007992, 267.095386) rotate(-91.000000) translate(-340.007992, -267.095386) "></path>
                    </g>
                </g>
            </svg>   
        </article>
    );
};

export default Shopping;