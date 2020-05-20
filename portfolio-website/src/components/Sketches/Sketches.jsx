import React from 'react';
import "./Sketches.scss";

const Sketches = () => {

    return (
        <article className="sketches">
            <div className="sketches__container">
                <div className="sketches__row">
                    <div className="sketches__preview">
                        <img className="sketches__image" alt=""/>
                        <p className="sketches__label"></p>
                    </div>
                </div>
                <div className="sketches__row">

                </div>
            </div>
        </article>
    );
};

export default Sketches;