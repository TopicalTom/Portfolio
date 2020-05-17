import React from 'react';
import "./Palette.scss";

const Palette = () => {

    //const {primary, secondary, accent } = props

    return (
        <article className="palette">
            <div className="palette__container">
                <div className="palette__row">
                    <p>Primary</p>
                    <div className="palette__swatches">

                            <div 
                                className="palette__color"
                                style={{background: "#2E2E2E"}}>
                                <h4 
                                    className="palette__hex">
                                    #2E2E2E
                                </h4>
                            </div>
                            <div 
                                className="palette__color"
                                style={{background: "#7F7F7F"}}>
                                <h4 
                                    className="palette__hex">
                                    #7F7F7F
                                </h4>
                            </div>
                            <div 
                                className="palette__color"
                                style={{background: "#FFFFFF"}}>
                                <h4 
                                    className="palette__hex">
                                    #FFFFFF
                                </h4>
                            </div>

                        <div 
                            className="palette__color--hidden">
                        </div>

                            <div 
                                className="palette__color"
                                style={{background: "#C7CBD4"}}>
                                <h4 
                                    className="palette__hex">
                                    #C7CBD4
                                </h4>
                            </div>
                            <div 
                                className="palette__color"
                                style={{background: "#F2F3F7"}}>
                                <h4 
                                    className="palette__hex">
                                    #F2F3F7
                                </h4>
                            </div>
                            <div 
                                className="palette__color"
                                style={{background: "#F6F6F6"}}>
                                <h4 
                                    className="palette__hex">
                                    #F6F6F6
                                </h4>
                            </div>

                    </div>
                </div>
                <div className="palette__row">
                    <p>Accents</p>
                    <div className="palette__swatches">

                            <div 
                                className="palette__color"
                                style={{background: "#FD2D55"}}>
                                <h4 
                                    className="palette__hex">
                                    #FD2D55
                                </h4>
                            </div>
                            <div 
                                className="palette__color"
                                style={{background: "#F58F47"}}>
                                <h4 
                                    className="palette__hex">
                                    #F58F47
                                </h4>
                            </div>
                            <div 
                                className="palette__color"
                                style={{background: "#F6C232"}}>
                                <h4 
                                    className="palette__hex">
                                    #F6C232
                                </h4>
                            </div>


                            <div 
                                className="palette__color"
                                style={{background: "#31C488"}}>
                                <h4 
                                    className="palette__hex">
                                    #31C488
                                </h4>
                            </div>
                            <div 
                                className="palette__color"
                                style={{background: "#4D7FFF"}}>
                                <h4 
                                    className="palette__hex">
                                    #4D7FFF
                                </h4>
                            </div>
                            <div 
                                className="palette__color"
                                style={{background: "#8637A6"}}>
                                <h4 
                                    className="palette__hex">
                                    #8637A6
                                </h4>
                            </div>


                            <div 
                                className="palette__color"
                                style={{background: "#F26A9A"}}>
                                <h4 
                                    className="palette__hex">
                                    #F26A9A
                                </h4>
                            </div>
                        </div>

                </div>
            </div>
        </article>
    );
};

export default Palette;