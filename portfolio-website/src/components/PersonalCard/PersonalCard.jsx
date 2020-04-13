import React from 'react';
import "./PersonalCard.scss";

import Spotify from "../../assets/icons/spotifygreen.svg";
import Album from "../../assets/images/TheSlowRush.jpg";

const PersonalCard = () => {

    return (
        <a href="https://open.spotify.com/user/shamal1ama?si=FT33n2uYRZqhokZ9mB3DIg">
            <article className="spotify">
                <div className="spotify__details">
                    <img
                        className="spotify__image"
                        src={Spotify}
                    />
                    <h2
                        className="spotify__cta">
                        The Slow Rush • Tame Impala
                    </h2>
                    <h4 
                        className="spotify__link">
                        What I'm currently listening to
                    </h4>
                </div>
                <div className="spotify__preview">
                    <img
                        className="spotify__album"
                        src={Album}
                    />
                </div>
            </article>
        </a>
    );
};

export default PersonalCard;